import React, { memo } from "react";
import MotionWrapper from "../../components/common/MotionWrapper";
import { SKILLS, EDUCATION } from "../../data";
import "./Skills.scss";

const Skills: React.FC = memo(() => {
    return (
        <MotionWrapper direction="top">
            <section className="section skills" aria-label="Skills and Education section">
                <div className="title-item">
                    <h1>Yetenekler</h1>
                </div>
                <div className="skills-experience-wrapper">
                    <div className="education-group">
                        <h3 className="skills-title">Education</h3>
                        {EDUCATION.map((item, index) => (
                            <div key={`${item.year}-${index}`} className="timeline-item">
                                <div className="timeline-year">{item.year}</div>
                                <div className="timeline-content">
                                    <strong>{item.title}</strong>
                                    <p className="timeline-place">{item.place}</p>
                                    <p>{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="skills-columns">
                        <div className="skills-group">
                            <h3 className="skills-title">Coding Skills</h3>
                            {SKILLS.coding.map((skill) => (
                                <div key={skill.name} className="skill-bar">
                                    <div className="skill-bar-header">
                                        <span>{skill.name}</span>
                                        <span>{skill.value}%</span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.value}%` }}
                                            role="progressbar"
                                            aria-valuenow={skill.value}
                                            aria-valuemin={0}
                                            aria-valuemax={100}
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </MotionWrapper>
    );
});

Skills.displayName = "Skills";

export default Skills;
