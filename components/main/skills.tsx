import { SkillDataProvider } from '@/components/sub/skill-data-provider';
import { SkillText } from '@/components/sub/skill-text';

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from '@/constants';

export const Skills = () => {
  const skillGroups = [
    SKILL_DATA,
    FRONTEND_SKILL,
    BACKEND_SKILL,
    FULLSTACK_SKILL,
    OTHER_SKILL,
  ];

  let animationIndex = 0;

  return (
    <section
      id="skills"
      style={{ transform: 'scale(0.9)' }}
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden py-20 px-4 md:px-8"
    >
      <SkillText />

      <div className="w-full flex justify-center mt-4">
        <div className="flex flex-col items-center gap-4 sm:gap-6 lg:gap-8">
          {skillGroups.map((group, groupIndex) => (
            <div
              key={groupIndex}
              className="flex flex-row flex-nowrap items-center justify-center gap-2 sm:gap-4 lg:gap-6"
            >
              {group.map((skill) => {
                const currentIndex = animationIndex;
                animationIndex += 1;

                return (
                  <SkillDataProvider
                    key={skill.skill_name}
                    src={skill.image}
                    name={skill.skill_name}
                    width={skill.width}
                    height={skill.height}
                    index={currentIndex}
                  />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
