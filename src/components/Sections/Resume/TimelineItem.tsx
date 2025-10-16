import Image from 'next/image';
import {FC, memo} from 'react';

import SpotlightCard from '../../../components/SpotlightCard';
import {TimelineItem} from '../../../data/dataDef';
import {useScrollAnimation} from '../../../hooks/useScrollAnimation';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo, locationUrl} = item;
  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <div ref={ref}>
      <SpotlightCard
        className={`group transform-gpu rounded-xl bg-white p-6 shadow-md transition-all duration-700 last:mb-0 hover:-translate-y-1 hover:shadow-2xl md:mb-6 ${
          isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
        }`}>
        <div className="relative flex flex-col text-center md:text-left">
          <div className="flex flex-col pb-3">
            <div className="flex items-center justify-center gap-x-3 md:justify-start">
              {logo && (
                <div className="relative h-14 w-14 flex-shrink-0 rounded-lg bg-white p-0.5 shadow-sm">
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
      </SpotlightCard>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
