import {FC, memo, PropsWithChildren, useRef, useState} from 'react';

interface SpotlightCardProps {
  className?: string;
}

const SpotlightCard: FC<PropsWithChildren<SpotlightCardProps>> = memo(({children, className = ''}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({x: 0, y: 0});
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      className={`group relative overflow-hidden ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      ref={cardRef}>
      {/* Spotlight effect */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(59, 130, 246, 0.15), transparent 40%)`,
          }}
        />
      )}

      {/* Neon glow border */}
      <div className="absolute -inset-0.5 rounded-xl bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 opacity-0 blur transition-opacity duration-500 group-hover:opacity-30" />

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
});

SpotlightCard.displayName = 'SpotlightCard';
export default SpotlightCard;
