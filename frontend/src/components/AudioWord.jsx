import { useSpeech } from '../hooks/useSpeech';

/**
 * AudioWord — attaches 🔊 (TTS) + 🎤 (STT) buttons to any German word/phrase.
 *
 * Props:
 *   word {string}   — German text to speak / to match against
 *   size {string}   — 'sm' | 'md'  (default 'sm')
 */
export default function AudioWord({ word, size = 'sm' }) {
  const { speak, listenFor, stopListening, speaking, listening, result, resetResult } = useSpeech();

  const btnBase = `
    inline-flex items-center justify-center rounded-full
    border transition-all duration-150 cursor-pointer select-none
    active:scale-95
  `;

  const btnSm = 'w-6 h-6 text-[11px]';
  const btnMd = 'w-7 h-7 text-[12px]';
  const btnSize = size === 'md' ? btnMd : btnSm;

  const handleMicClick = () => {
    if (listening) { stopListening(); return; }
    resetResult();
    listenFor(word);
  };

  /* Colour variants */
  const speakStyle = speaking
    ? { background: 'rgba(96,165,250,0.30)', borderColor: 'rgba(96,165,250,0.70)', color: '#60a5fa' }
    : { background: 'rgba(96,165,250,0.08)', borderColor: 'rgba(96,165,250,0.25)', color: 'rgba(96,165,250,0.70)' };

  const micStyle = listening
    ? { background: 'rgba(251,113,133,0.30)', borderColor: 'rgba(251,113,133,0.70)', color: '#fb7185', animation: 'pulse 1s ease-in-out infinite' }
    : { background: 'rgba(167,139,250,0.08)', borderColor: 'rgba(167,139,250,0.25)', color: 'rgba(167,139,250,0.70)' };

  return (
    <span className="inline-flex items-center gap-1" title="">
      {/* TTS — play pronunciation */}
      <button
        type="button"
        title={`Pronounce: ${word}`}
        className={`${btnBase} ${btnSize}`}
        style={speakStyle}
        onClick={(e) => { e.stopPropagation(); speak(word); }}
      >
        🔊
      </button>

      {/* STT — speak and compare */}
      <button
        type="button"
        title={listening ? 'Stop listening' : `Say: ${word}`}
        className={`${btnBase} ${btnSize}`}
        style={micStyle}
        onClick={(e) => { e.stopPropagation(); handleMicClick(); }}
      >
        {listening ? '🎙️' : '🎤'}
      </button>

      {/* Result badge */}
      {result && (
        <span
          className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded-full cursor-pointer"
          title="Click to dismiss"
          style={{
            background: result.match ? 'rgba(74,222,128,0.15)' : 'rgba(251,113,133,0.15)',
            color: result.match ? '#4ade80' : '#fb7185',
            border: `1px solid ${result.match ? 'rgba(74,222,128,0.35)' : 'rgba(251,113,133,0.35)'}`,
            maxWidth: 160,
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',
          }}
          onClick={(e) => { e.stopPropagation(); resetResult(); }}
        >
          {result.match ? '✓' : '✗'} {result.heard}
        </span>
      )}
    </span>
  );
}
