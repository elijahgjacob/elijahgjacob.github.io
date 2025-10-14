import {FC, memo, PropsWithChildren, useMemo} from 'react';

import SpotlightCard from '../../../components/SpotlightCard';
import {Skill as SkillType, SkillGroup as SkillGroupType} from '../../../data/dataDef';
import {useScrollAnimation} from '../../../hooks/useScrollAnimation';

export const SkillGroup: FC<PropsWithChildren<{skillGroup: SkillGroupType}>> = memo(({skillGroup}) => {
  const {name, skills} = skillGroup;
  const {ref, isVisible} = useScrollAnimation(0.2);

  return (
    <div ref={ref}>
      <SpotlightCard
        className={`transform-gpu rounded-xl bg-white p-6 shadow-lg transition-all duration-700 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20 ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
        }`}>
        <span className="mb-4 block text-center text-lg font-bold text-neutral-800">{name}</span>
        <div className="flex flex-col gap-y-3">
          {skills.map((skill, index) => (
            <Skill isVisible={isVisible} key={`${skill.name}-${index}`} skill={skill} />
          ))}
        </div>
      </SpotlightCard>
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
      <div className="relative h-3 w-full overflow-hidden rounded-full bg-neutral-200 shadow-inner">
        <div
          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700 shadow-sm shadow-blue-400/50 transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : '0%',
            backgroundSize: '200% 100%',
            animation: isVisible ? 'border-flow 3s ease infinite' : 'none',
          }}
        />
        {/* Shimmer effect */}
        <div
          className="absolute inset-0 translate-x-[-100%] bg-gradient-to-r from-transparent via-white/30 to-transparent transition-transform duration-1000"
          style={{
            transform: isVisible ? 'translateX(100%)' : 'translateX(-100%)',
            transitionDelay: '0.5s',
          }}
        />
      </div>
    </div>
  );
});

Skill.displayName = 'Skill';
