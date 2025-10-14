import {FC, memo, useEffect, useState} from 'react';

const ScrollProgress: FC = memo(() => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-neutral-900/50">
      <div
        className="h-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 shadow-lg shadow-blue-500/50 transition-all duration-150"
        style={{
          width: `${scrollProgress}%`,
          backgroundSize: '200% 100%',
          animation: 'border-flow 3s ease infinite',
          boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
        }}
      />
    </div>
  );
});

ScrollProgress.displayName = 'ScrollProgress';
export default ScrollProgress;
