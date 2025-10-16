import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, useEffect, useState} from 'react';

import {heroData, SectionId} from '../../data/data';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC = memo(() => {
  const {imageSrc, name, description, actions} = heroData;
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < name.length) {
      // Add a pause after "Hi!" (3 characters)
      const delay = currentIndex === 3 ? 500 : 100;
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + name[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, delay);

      return () => clearTimeout(timeout);
    }
    return undefined;
  }, [currentIndex, name]);

  // Split text to style "Elijah Jacob" in blue
  const renderTypedText = () => {
    const prefix = "Hi!";
    const middle = " I'm ";
    if (displayedText.length <= prefix.length) {
      return <>{displayedText}</>;
    } else if (displayedText.length <= prefix.length + middle.length) {
      return (
        <>
          {prefix}
          <br />
          {displayedText.substring(prefix.length)}
        </>
      );
    }
    return (
      <>
        {prefix}
        <br />
        {middle}
        <span className="text-blue-700">{displayedText.substring(prefix.length + middle.length)}</span>
      </>
    );
  };

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <Image
          alt={`${name}-image`}
          className="absolute z-0 h-full w-full scale-110 object-cover transition-transform duration-[2000ms] ease-out hover:scale-105"
          placeholder="blur"
          priority
          src={imageSrc}
        />
        {/* Gradient overlay for better text contrast */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/30 via-black/20 to-black/40" />

        <div className="z-10 max-w-screen-lg px-4 lg:px-0">
          <div className="group relative flex flex-col items-center gap-y-6 overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-br from-gray-900/20 to-gray-800/10 p-8 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:shadow-2xl">
            {/* Animated border glow - darker on hover */}
            <div className="absolute -inset-0.5 rounded-2xl bg-black opacity-0 blur transition-opacity duration-500 group-hover:opacity-40" />

            <h1
              className="relative bg-gradient-to-r from-white via-blue-100 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent text-center sm:text-4xl md:text-5xl lg:text-6xl"
              style={{
                backgroundSize: '200% auto',
                animation: 'shimmer 4s linear infinite',
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.3)',
                paintOrder: 'stroke fill',
              }}>
              {renderTypedText()}
              <span className="animate-pulse">|</span>
            </h1>
            {description}
            <div className="flex gap-x-10 text-neutral-100">
              <Socials />
            </div>
            <div className="flex w-full justify-center gap-x-4">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'group flex gap-x-2 rounded-full border-2 px-6 py-3 text-sm font-medium text-white shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-offset-2 sm:text-base',
                    primary
                      ? 'border-blue-800 bg-gradient-to-r from-blue-700 to-blue-900 ring-blue-800 hover:from-blue-600 hover:to-blue-800'
                      : 'border-white bg-white/10 ring-white backdrop-blur-sm hover:bg-white/20',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && (
                    <Icon className="h-5 w-5 text-white transition-transform group-hover:scale-110 sm:h-6 sm:w-6" />
                  )}
                </a>
              ))}
            </div>
          </div>
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
