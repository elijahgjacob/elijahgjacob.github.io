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
        className="group flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        download
        href="/assets/resume.pdf"
        title="Download Resume">
        <ArrowDownTrayIcon className="h-6 w-6 text-white transition-transform group-hover:scale-110" />
      </a>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          className="group flex h-14 w-14 animate-fade-in items-center justify-center rounded-full bg-gradient-to-br from-blue-700 to-blue-900 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
          onClick={scrollToTop}
          title="Back to Top">
          <ArrowUpIcon className="h-6 w-6 text-white transition-transform group-hover:-translate-y-1" />
        </button>
      )}
    </div>
  );
});

FloatingButtons.displayName = 'FloatingButtons';
export default FloatingButtons;
