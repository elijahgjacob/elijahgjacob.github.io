import {FC, memo, PropsWithChildren} from 'react';

import {useScrollAnimation} from '../../../hooks/useScrollAnimation';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  const {ref, isVisible} = useScrollAnimation(0.1);

  return (
    <div className="grid grid-cols-1 gap-y-6 md:grid-cols-4 md:gap-x-8" ref={ref}>
      <div className="col-span-1 flex justify-center md:justify-start">
        <div
          className={`relative h-max transition-all duration-700 ${
            isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'
          }`}>
          <h2 className="bg-gradient-to-r from-neutral-800 to-blue-700 bg-clip-text text-2xl font-bold uppercase text-transparent">
            {title}
          </h2>
          <span className="absolute inset-x-0 -bottom-1 h-1 bg-gradient-to-r from-blue-700 to-blue-900 rounded-full" />
        </div>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
