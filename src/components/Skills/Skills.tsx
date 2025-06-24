import React from 'react';
import type { SkillsData } from '../../types/skills';

interface SkillsProps {
  data: SkillsData;
}

const Skills: React.FC<SkillsProps> = ({ data }) => {
  return (
    <section className="section skills">
      <div className="section__title">Skills</div>
      <div className="section__content">
        <div className="skillz">
          {Object.entries(data).map(([category, items]) => (
            <div className="skillz__category" key={category}>
              <div className="skillz__category__label">{category.charAt(0).toUpperCase() + category.slice(1)}</div>
              <ul>
                {items.map((skill, index) => (
                  <li className="skillz__category__item" key={index}>
                    {skill.item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
