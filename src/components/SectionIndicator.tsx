import {FC, memo, useCallback, useEffect, useState} from 'react';

import {SectionId} from '../data/data';

const sections = [
  {id: SectionId.Hero, label: 'Home'},
  {id: SectionId.About, label: 'About'},
  {id: SectionId.Resume, label: 'Resume'},
];

const SectionIndicator: FC = memo(() => {
  const [activeSection, setActiveSection] = useState<string>(SectionId.Hero);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i].id);
        if (section) {
          const {offsetTop} = section;
          if (scrollPosition >= offsetTop) {
            setActiveSection(sections[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({behavior: 'smooth'});
    }
  }, []);

  return (
    <div className="fixed right-8 top-1/2 z-40 hidden -translate-y-1/2 md:block">
      <div className="flex flex-col gap-y-4">
        {sections.map(({id, label}) => (
          <button
            className="group relative flex items-center justify-end"
            key={id}
            onClick={() => scrollToSection(id)}
            title={label}>
            {/* Label */}
            <span
              className={`mr-4 rounded-md bg-neutral-900/90 px-3 py-1 text-sm font-medium backdrop-blur-sm transition-all duration-300 ${
                activeSection === id
                  ? 'opacity-100 translate-x-0'
                  : 'opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0'
              } ${activeSection === id ? 'text-white' : 'text-neutral-300'}`}>
              {label}
            </span>
            {/* Dot indicator */}
            <div
              className={`h-3 w-3 rounded-full border-2 transition-all duration-300 ${
                activeSection === id
                  ? 'border-blue-700 bg-blue-700 scale-125'
                  : 'border-neutral-400 bg-transparent hover:border-blue-500 hover:bg-blue-500/30'
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
});

SectionIndicator.displayName = 'SectionIndicator';
export default SectionIndicator;
