import {ArrowDownTrayIcon, ArrowUpIcon} from '@heroicons/react/24/outline';
import {FC, memo, useEffect, useState} from 'react';

const FloatingButtons: FC = memo(() => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  return (
    <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
      {/* Download Resume Button */}
      <a
        className="group relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/60"
        download
        href="/assets/resume.pdf"
        style={{backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite'}}
        title="Download Resume">
        <div
          className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
          style={{background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'}}
        />
        <ArrowDownTrayIcon className="relative h-6 w-6 text-white transition-transform group-hover:scale-110" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="group relative flex h-14 w-14 animate-fade-in items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-blue-600 via-cyan-500 to-blue-700 shadow-lg shadow-blue-500/50 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/60"
          onClick={scrollToTop}
          style={{backgroundSize: '200% 200%', animation: 'gradient 3s ease infinite 1.5s'}}
          title="Back to Top">
          <div
            className="absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100"
            style={{background: 'radial-gradient(circle at center, rgba(255,255,255,0.2) 0%, transparent 70%)'}}
          />
          <ArrowUpIcon className="relative h-6 w-6 text-white transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
});

FloatingButtons.displayName = 'FloatingButtons';
export default FloatingButtons;
