import { useRef, useState, useCallback } from 'react';

const SpeechRecognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

/**
 * Ranked list of preferred German voices.
 * We try each pattern in order; first match wins.
 * Covers Chrome (Google Deutsch), Edge/Windows (Microsoft), Safari (Anna), Firefox fallback.
 */
const DE_VOICE_PRIORITY = [
  // Google high-quality (Chrome)
  /Google Deutsch/i,
  /Google DE/i,
  // Microsoft Neural / Online (Edge, Chrome on Windows)
  /Microsoft.*Katja.*Online/i,
  /Microsoft.*Conrad.*Online/i,
  /Microsoft Katja/i,
  /Microsoft Conrad/i,
  /Microsoft Stefan/i,
  /Microsoft Hedda/i,
  /Microsoft Hanna/i,
  // macOS / iOS
  /Anna/i,
  /Petra/i,
  // Any de-DE then any de-* as last resort
  null, // filled below with language-based fallback
];

/**
 * Returns the best available German voice.
 * Voices MUST be fetched after the voiceschanged event fires.
 */
function pickGermanVoice() {
  const voices = window.speechSynthesis.getVoices();
  for (const pattern of DE_VOICE_PRIORITY) {
    if (pattern === null) break;
    const hit = voices.find(v => v.lang.startsWith('de') && pattern.test(v.name));
    if (hit) return hit;
  }
  // Fallback: first exact de-DE, then any de-*
  return (
    voices.find(v => v.lang === 'de-DE') ||
    voices.find(v => v.lang.startsWith('de')) ||
    null
  );
}

/**
 * Speak text with the best German voice available.
 * Handles the async voice-loading issue: if voices aren't ready yet,
 * waits for the voiceschanged event before speaking.
 */
function speakGerman(text, { onStart, onEnd } = {}) {
  if (!window.speechSynthesis) return;
  window.speechSynthesis.cancel();

  const fire = () => {
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'de-DE';
    utt.rate = 0.85;   // slightly slower → clearer German pronunciation
    utt.pitch = 1.0;
    utt.volume = 1.0;

    const voice = pickGermanVoice();
    if (voice) utt.voice = voice;

    utt.onstart = onStart;
    utt.onend = onEnd;
    utt.onerror = onEnd; // always release "speaking" state on error too
    window.speechSynthesis.speak(utt);
  };

  // voices may not be loaded on first call — wait for the event
  const voices = window.speechSynthesis.getVoices();
  if (voices.length > 0) {
    fire();
  } else {
    window.speechSynthesis.addEventListener('voiceschanged', fire, { once: true });
  }
}

/**
 * useSpeech — TTS + STT helper for German-learning platform
 *
 * speak(text)           → plays German TTS with best available German voice
 * listenFor(expected)   → starts mic, resolves { heard, match }
 * state                 → { speaking, listening, result: null | { heard, match } }
 * resetResult()         → clears last result
 */
export function useSpeech() {
  const [speaking, setSpeaking] = useState(false);
  const [listening, setListening] = useState(false);
  const [result, setResult] = useState(null); // { heard, match }
  const recogRef = useRef(null);

  /* ── Text-to-Speech ── */
  const speak = useCallback((text) => {
    speakGerman(text, {
      onStart: () => setSpeaking(true),
      onEnd:   () => setSpeaking(false),
    });
  }, []);

  /* ── Speech-to-Text ── */
  const listenFor = useCallback((expected) => {
    if (!SpeechRecognition) {
      setResult({ heard: '(not supported)', match: false });
      return;
    }

    // Stop any running recognition first
    if (recogRef.current) {
      try { recogRef.current.stop(); } catch { /* ignore */ }
    }

    const recognition = new SpeechRecognition();
    recogRef.current = recognition;
    recognition.lang = 'de-DE';
    recognition.interimResults = false;
    recognition.maxAlternatives = 3;

    setListening(true);
    setResult(null);

    recognition.onresult = (e) => {
      const alternatives = Array.from(e.results[0]).map(a => a.transcript.trim().toLowerCase());
      const clean = (s) =>
        s.toLowerCase()
          .replace(/[.,!?;:]/g, '')
          .normalize('NFD')
          .replace(/[\u0300-\u036f]/g, '')
          .trim();

      const target = clean(expected);
      const match = alternatives.some(a => clean(a) === target);
      const best = alternatives[0];
      setResult({ heard: best, match });
      setListening(false);
    };

    recognition.onerror = (e) => {
      if (e.error !== 'aborted') {
        setResult({ heard: `(error: ${e.error})`, match: false });
      }
      setListening(false);
    };

    recognition.onend = () => setListening(false);

    recognition.start();
  }, []);

  const stopListening = useCallback(() => {
    try { recogRef.current?.stop(); } catch { /* ignore */ }
    setListening(false);
  }, []);

  const resetResult = useCallback(() => setResult(null), []);

  return { speak, listenFor, stopListening, speaking, listening, result, resetResult };
}
