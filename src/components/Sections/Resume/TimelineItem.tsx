import Image from 'next/image';
import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content, logo, locationUrl} = item;
  return (
    <div className="flex flex-col pb-8 text-center last:pb-0 md:text-left">
      <div className="flex flex-col pb-4">
        <div className="flex items-center justify-center gap-x-3 md:justify-start">
          {logo && (
            <div className="relative h-12 w-12 flex-shrink-0">
              <Image alt={`${location} logo`} className="h-full w-full object-contain" src={logo} />
            </div>
          )}
          <h2 className="text-xl font-bold">{title}</h2>
        </div>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          {locationUrl ? (
            <a
              className="flex-1 text-sm font-medium italic hover:text-blue-800 hover:underline sm:flex-none"
              href={locationUrl}
              rel="noopener noreferrer"
              target="_blank">
              {location}
            </a>
          ) : (
            <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          )}
          <span>•</span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      {content}
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
