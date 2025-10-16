import {FC, memo} from 'react';

import {SectionId, skills} from '../../data/data';
import Section from '../Layout/Section';
import {SkillGroup} from './Resume/Skills';

const Skills: FC = memo(() => {
  return (
    <Section className="bg-gradient-to-b from-neutral-50 to-neutral-100" sectionId={SectionId.Skills}>
      <div className="flex flex-col gap-y-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-neutral-800 mb-4">Skills & Expertise</h2>
          <p className="text-neutral-600 text-lg">Technical skills and domain expertise across various technologies</p>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {skills.map((skillgroup, index) => (
            <SkillGroup key={`${skillgroup.name}-${index}`} skillGroup={skillgroup} />
          ))}
        </div>
      </div>
    </Section>
  );
});

Skills.displayName = 'Skills';
export default Skills;
