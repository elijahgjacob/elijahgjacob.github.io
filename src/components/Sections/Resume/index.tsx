import {FC, memo} from 'react';

import {education, experience, SectionId} from '../../../data/data';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-b from-neutral-50 to-neutral-100" sectionId={SectionId.Resume}>
      <div className="flex flex-col gap-y-12">
        <ResumeSection title="Education">
          <div className="flex flex-col gap-y-4">
            {education.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
        <ResumeSection title="Work Experience">
          <div className="flex flex-col gap-y-4">
            {experience.map((item, index) => (
              <TimelineItem item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

Resume.displayName = 'Resume';
export default Resume;
