import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';
import {useScrollAnimation} from '../../../hooks/useScrollAnimation';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo, locationUrl} = item;
  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <div
      className={`group relative flex flex-col rounded-xl bg-white p-6 shadow-md transition-all duration-700 last:mb-0 hover:shadow-xl md:mb-6 ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
      }`}
      ref={ref}>
      {/* Gradient border effect on hover */}
      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-700 to-blue-900 opacity-0 transition-opacity duration-300 group-hover:opacity-10" />

      <div className="relative flex flex-col text-center md:text-left">
        <div className="flex flex-col pb-3">
          <div className="flex items-center justify-center gap-x-3 md:justify-start">
            {logo && (
              <div className="relative h-12 w-12 flex-shrink-0 rounded-lg bg-white p-1 shadow-sm">
                <Image alt={`${location} logo`} className="h-full w-full object-contain" src={logo} />
              </div>
            )}
            <h2 className="text-xl font-bold text-neutral-800">{title}</h2>
          </div>
          <div className="mt-2 flex items-center justify-center gap-x-2 text-neutral-600 md:justify-start">
            {locationUrl ? (
              <a
                className="flex-1 text-sm font-medium italic transition-colors hover:text-blue-800 hover:underline sm:flex-none"
                href={locationUrl}
                rel="noopener noreferrer"
                target="_blank">
                {location}
              </a>
            ) : (
              <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
            )}
            <span className="text-blue-700">•</span>
            <span className="flex-1 text-sm font-medium sm:flex-none">{date}</span>
          </div>
        </div>
        <div className="text-neutral-700">{content}</div>
      </div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
