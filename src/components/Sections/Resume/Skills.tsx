import {FC, memo, PropsWithChildren, useMemo} from 'react';

import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import {useScrollAnimation} from '../../../hooks/useScrollAnimation';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <div
      className={`flex flex-col rounded-xl bg-white p-6 shadow-lg transition-all duration-700 hover:shadow-xl ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}
      ref={ref}>
      <span className="mb-4 text-center text-lg font-bold text-neutral-800">{name}</span>
      <div className="flex flex-col gap-y-3">
        {skills.map((skill, index) => (
          <Skill isVisible={isVisible} key={`${skill.name}-${index}`} skill={skill} />
        ))}
      </div>
    </div>
  );
});

SkillGroup.displayName = 'SkillGroup';

export const Skill: FC<{skill: SkillType; isVisible: boolean}> = memo(({skill, isVisible}) => {
  const {name, level, max = 10} = skill;
  const percentage = useMemo(() => Math.round((level / max) * 100), [level, max]);

  return (
    <div className="flex flex-col">
      <span className="mb-2 text-sm font-medium text-neutral-700">{name}</span>
      <div className="h-3 w-full overflow-hidden rounded-full bg-neutral-200 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-700 to-blue-900 shadow-sm transition-all duration-1000 ease-out"
          style={{width: isVisible ? `${percentage}%` : '0%'}}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
