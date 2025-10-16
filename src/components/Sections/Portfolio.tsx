import {ArrowTopRightOnSquareIcon, FunnelIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo, MouseEvent, useCallback, useEffect, useRef, useState} from 'react';

import {isMobile} from '../../config';
import {portfolioItems, SectionId} from '../../data/data';
import {PortfolioItem} from '../../data/dataDef';
import useDetectOutsideClick from '../../hooks/useDetectOutsideClick';
import Section from '../Layout/Section';

const Portfolio: FC = memo(() => {
  const [filter, setFilter] = useState<string>('all');
  const [filteredItems, setFilteredItems] = useState<PortfolioItem[]>(portfolioItems);

  const companies = ['all', ...Array.from(new Set(portfolioItems.map(item => item.company)))];

  useEffect(() => {
    if (filter === 'all') {
      setFilteredItems(portfolioItems);
    } else {
      setFilteredItems(portfolioItems.filter(item => item.company === filter || item.category === filter));
    }
  }, [filter]);

  return (
    <Section className="bg-neutral-800" sectionId={SectionId.Portfolio}>
      <div className="flex flex-col gap-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-4">My Portfolio</h2>
          <p className="text-gray-300 text-lg">Explore my projects across different organizations and personal work</p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 text-white">
            <FunnelIcon className="h-5 w-5" />
            <span className="text-sm font-medium">Filter by:</span>
          </div>
          <button
            className={classNames(
              'px-4 py-2 rounded-full text-sm font-medium transition-colors',
              filter === 'all' ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600',
            )}
            onClick={() => setFilter('all')}>
            All Projects
          </button>
          {companies.slice(1).map(company => (
            <button
              className={classNames(
                'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                filter === company ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600',
              )}
              key={company}
              onClick={() => setFilter(company)}>
              {company}
            </button>
          ))}
        </div>

        <div className="w-full columns-1 md:columns-2 lg:columns-3">
          {filteredItems.map((item, index) => {
            const {title, image, company, year, technologies} = item;
            return (
              <div className="pb-6" key={`${title}-${index}`}>
                <div
                  className={classNames(
                    'group relative h-64 w-full overflow-hidden rounded-lg shadow-lg shadow-black/30 lg:shadow-xl bg-gray-900',
                  )}>
                  <Image alt={title} className="h-full w-full object-cover" placeholder="blur" src={image} />
                  <ItemOverlay item={item} />

                  {/* Project Info Overlay */}
                  <div className="absolute top-4 left-4 right-4">
                    <div className="flex justify-between items-start">
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        {company}
                      </span>
                      <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded-full">{year}</span>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="absolute bottom-4 left-4 right-4 group-hover:opacity-0 transition-opacity duration-300">
                    <div className="flex flex-wrap gap-1">
                      {technologies.slice(0, 3).map((tech, techIndex) => (
                        <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded" key={techIndex}>
                          {tech}
                        </span>
                      ))}
                      {technologies.length > 3 && (
                        <span className="bg-gray-800 text-gray-300 text-xs px-2 py-1 rounded">
                          +{technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
});

Portfolio.displayName = 'Portfolio';
export default Portfolio;

const ItemOverlay: FC<{item: PortfolioItem}> = memo(({item: {url, title, description, technologies}}) => {
  const [mobile, setMobile] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const linkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    // Avoid hydration styling errors by setting mobile in useEffect
    if (isMobile) {
      setMobile(true);
    }
  }, []);
  useDetectOutsideClick(linkRef, () => setShowOverlay(false));

  const handleItemClick = useCallback(
    (event: MouseEvent<HTMLElement>) => {
      if (mobile && !showOverlay) {
        event.preventDefault();
        setShowOverlay(!showOverlay);
      }
    },
    [mobile, showOverlay],
  );

  return (
    <a
      className={classNames(
        'absolute inset-0 h-full w-full bg-gray-900 transition-all duration-300',
        {'opacity-0 hover:opacity-90': !mobile},
        showOverlay ? 'opacity-90' : 'opacity-0',
      )}
      href={url}
      onClick={handleItemClick}
      ref={linkRef}
      target="_blank">
      <div className="relative h-full w-full p-4">
        <div className="flex h-full w-full flex-col gap-y-3 overflow-y-auto overscroll-contain">
          <h2 className="text-center font-bold text-white opacity-100 text-lg">{title}</h2>
          <p className="text-xs text-gray-200 opacity-100 sm:text-sm leading-relaxed">{description}</p>

          {/* Technologies in overlay */}
          {technologies.length > 0 && (
            <div className="mt-auto">
              <div className="flex flex-wrap gap-1 justify-center">
                {technologies.slice(0, 4).map((tech, techIndex) => (
                  <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full" key={techIndex}>
                    {tech}
                  </span>
                ))}
                {technologies.length > 4 && (
                  <span className="bg-gray-600 text-white text-xs px-2 py-1 rounded-full">
                    +{technologies.length - 4}
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <ArrowTopRightOnSquareIcon className="absolute bottom-2 right-2 h-5 w-5 shrink-0 text-white" />
      </div>
    </a>
  );
});
