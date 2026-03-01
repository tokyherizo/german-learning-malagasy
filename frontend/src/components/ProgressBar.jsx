const colorMap = {
  /* brand defaults */
  gold:   { track: 'bg-indigo-400/12', fill: 'bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400' },
  indigo: { track: 'bg-indigo-400/12', fill: 'bg-gradient-to-r from-indigo-600 via-violet-500 to-indigo-400' },
  teal:   { track: 'bg-indigo-400/10', fill: 'bg-gradient-to-r from-blue-600 via-indigo-500 to-blue-400' },
  red:    { track: 'bg-blue-400/12',   fill: 'bg-gradient-to-r from-blue-700 via-blue-500 to-blue-400' },
  purple: { track: 'bg-violet-400/12', fill: 'bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400' },
  violet: { track: 'bg-violet-400/12', fill: 'bg-gradient-to-r from-violet-600 via-purple-500 to-violet-400' },
  green:  { track: 'bg-emerald-400/12',fill: 'bg-gradient-to-r from-emerald-600 via-green-500 to-teal-400' },
};

const sizeMap = {
  small:  'h-1.5',
  medium: 'h-2.5',
  large:  'h-4',
};

const ProgressBar = ({
  value = 0,
  max = 100,
  label,
  sublabel,
  color = 'gold',
  size = 'medium',
  showPercentage = true,
  animated = true,
  className = ''
}) => {
  const pct = Math.min(Math.round((value / max) * 100), 100);
  const { track, fill } = colorMap[color] || colorMap.gold;
  const height = sizeMap[size] || sizeMap.medium;

  return (
    <div className={`w-full ${className}`}>
      {(label || sublabel) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>{label}</span>}
          <div className="flex items-center gap-2">
            {sublabel && <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{sublabel}</span>}
            {showPercentage && <span className="text-xs font-bold" style={{ color: 'var(--accent)' }}>{pct}%</span>}
          </div>
        </div>
      )}
      <div className={`w-full ${height} rounded-full overflow-hidden ${track}`}>
        <div
          className={`h-full rounded-full relative ${fill} ${animated ? 'animate-progress' : ''}`}
          style={{ width: `${pct}%`, minWidth: pct > 0 ? '4px' : '0' }}
        >
          {pct > 10 && (
            <span className="absolute inset-x-0 top-0 h-1/2 bg-white/20 rounded-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
