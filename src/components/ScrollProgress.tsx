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
    <div className="fixed left-0 top-0 z-50 h-1 w-full bg-neutral-200">
      <div
        className="h-full bg-gradient-to-r from-blue-700 to-blue-900 transition-all duration-150"
        style={{width: `${scrollProgress}%`}}
      />
    </div>
  );
});

ScrollProgress.displayName = 'ScrollProgress';
export default ScrollProgress;
