import {FC, memo} from 'react';

const AnimatedBackground: FC = memo(() => {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/20 via-neutral-900/10 to-blue-900/20 animate-gradient" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.3) 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          animation: 'gridMove 20s linear infinite',
        }}
      />

      {/* Floating orbs */}
      <div className="absolute left-1/4 top-1/4 h-96 w-96 animate-float rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 animate-float-delayed rounded-full bg-cyan-500/10 blur-3xl" />
    </div>
  );
});

AnimatedBackground.displayName = 'AnimatedBackground';
export default AnimatedBackground;
