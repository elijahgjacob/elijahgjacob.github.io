import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Image from 'next/image';
import {FC, memo, useEffect, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';

const Hero: FC = memo(() => {
  const {imageSrc, name} = heroData;
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [currentIndex, name]);

  // Split text to style "Elijah Jacob" in blue
  const renderTypedText = () => {
    const prefix = "Hi! I'm ";
    if (displayedText.length <= prefix.length) {
      return <>{displayedText}</>;
    }
    return (
      <>
        {prefix}
        <span className="text-blue-700">{displayedText.substring(prefix.length)}</span>
      </>
    );
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          alt="hero-background"
          className="absolute z-0 h-full w-full scale-110 object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        {/* Typing animation heading */}
        <div className="z-10 flex items-center justify-center px-4">
          <h1
            className="bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-4xl font-bold text-transparent sm:text-5xl lg:text-7xl"
            style={{
              backgroundSize: '200% auto',
              animation: 'shimmer 4s linear infinite',
              WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
              paintOrder: 'stroke fill',
            }}>
            {renderTypedText()}
            <span className="animate-pulse">|</span>
          </h1>
        </div>

        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="rounded-full bg-white p-1 ring-white ring-offset-2 ring-offset-gray-700/80 focus:outline-none focus:ring-2 sm:p-2"
            href={`/#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
