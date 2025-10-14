import {FC, memo} from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: FC<GlitchTextProps> = memo(({text, className = ''}) => {
  return (
    <span className={`relative inline-block ${className}`}>
      <span className="relative z-10">{text}</span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 animate-glitch-1 opacity-80"
        style={{color: 'rgba(59, 130, 246, 0.8)'}}>
        {text}
      </span>
      <span
        aria-hidden="true"
        className="absolute left-0 top-0 -z-10 animate-glitch-2 opacity-80"
        style={{color: 'rgba(6, 182, 212, 0.8)'}}>
        {text}
      </span>
    </span>
  );
});

GlitchText.displayName = 'GlitchText';
export default GlitchText;
