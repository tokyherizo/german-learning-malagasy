import { useRef, useState, useCallback } from 'react';

const SpeechRecognition =
  typeof window !== 'undefined'
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;

/**
 * useSpeech — TTS + STT helper for German-learning platform
 *
 * speak(text)           → plays German TTS
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
    if (!window.speechSynthesis) return;
    window.speechSynthesis.cancel();
    const utt = new SpeechSynthesisUtterance(text);
    utt.lang = 'de-DE';
    utt.rate = 0.9;
    utt.pitch = 1;

    // Try to pick a German voice when available
    const voices = window.speechSynthesis.getVoices();
    const deVoice = voices.find(v => v.lang.startsWith('de'));
    if (deVoice) utt.voice = deVoice;

    utt.onstart = () => setSpeaking(true);
    utt.onend = () => setSpeaking(false);
    utt.onerror = () => setSpeaking(false);
    window.speechSynthesis.speak(utt);
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
