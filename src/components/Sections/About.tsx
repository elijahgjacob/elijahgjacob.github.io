import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import {useScrollAnimation} from '../../hooks/useScrollAnimation';
import Section from '../Layout/Section';

const About: FC = memo(() => {
  const {profileImageSrc, description, aboutItems} = aboutData;
  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <Section className="bg-gradient-to-b from-neutral-800 to-neutral-900" sectionId={SectionId.About}>
      <div
        className={classNames('grid grid-cols-1 gap-y-8 md:gap-x-8', {'md:grid-cols-4': !!profileImageSrc})}
        ref={ref}>
        {!!profileImageSrc && (
          <div
            className={`col-span-1 flex justify-center transition-all duration-700 md:justify-start ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}>
            <div className="group relative h-64 w-48 overflow-hidden rounded-2xl shadow-xl ring-4 ring-white/10 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/50 hover:ring-cyan-500/50 md:h-full md:w-64">
              {/* Neon glow effect */}
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-0 blur-lg transition-opacity duration-300 group-hover:opacity-30" />
              <Image
                alt="about-me-image"
                className="relative h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-110"
                src={profileImageSrc}
              />
            </div>
          </div>
        )}
        <div
          className={classNames(
            `col-span-1 flex flex-col gap-y-6 transition-all duration-700 delay-200 ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`,
            {'md:col-span-3': !!profileImageSrc},
          )}>
          <div className="flex flex-col gap-y-3">
            <h2 className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-3xl font-bold text-transparent">
              About me
            </h2>
            <p className="prose prose-sm text-gray-300 sm:prose-base">{description}</p>
          </div>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {aboutItems.map(({label, text, Icon}, idx) => (
              <li
                className="group col-span-1 flex items-start gap-x-3 rounded-lg bg-white/5 p-3 backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:shadow-lg"
                key={idx}>
                {Icon && (
                  <Icon className="h-6 w-6 flex-shrink-0 text-blue-400 transition-transform group-hover:scale-110" />
                )}
                <div className="flex flex-col">
                  <span className="text-sm font-bold text-white">{label}</span>
                  <span className="text-sm text-gray-300">{text}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
