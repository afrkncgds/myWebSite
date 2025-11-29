import React from "react";
import "./Skills.scss";
import MotionWrapper from "../components/common/MotionWrapper.tsx";

interface Skill {
    name: string;
    value: number;
}

interface EducationItem {
    year: string;
    title: string;
    place: string;
    desc: string;
}

const skills: {  coding: Skill[] } = {

    coding: [
        { name: "JavaScript", value: 85 },
        { name: "PHP", value: 70 },
        { name: "Python", value: 45 },
        { name: "Css", value: 75 },
        { name: "HTML ", value: 100 },
        { name: "Git ", value: 60 },
        { name: "React.js / Twig", value: 60 },
        { name: "React Native / Twig", value: 60 },
        { name: "Node.js / Twig", value: 60 },
        { name: "Angular.js / Twig", value: 60 },
        { name: "UX/UI / Twig", value: 60 },
        { name: "Sass / Twig", value: 60 },
        { name: "Scss / Twig", value: 60 },
        { name: "c/ Twig", value: 60 },
        { name: "sql / Twig", value: 60 },
        { name: "mvc / Twig", value: 60 },
    ],
};

const education: EducationItem[] = [
    {
        year: "2021",
        title: "Frontend Development & Product Management",
        place: "Gülenayva İnteraktif Media Ajansı",
        desc: "Maecenas finibus nec sem ut imperdiet. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis ante.",
    },
    {
        year: "2023",
        title: "Frontend Development & Product Management",
        place: "Pine-Up İnteraktif Media Ajansı",
        desc: "Aliquam tincidunt malesuada tortor vitae iaculis. In eu turpis iaculis, feugiat risus quis, aliquet urna. Quisque fringilla mollis risus, eu pulvinar dolor.",
    },
];

const Skills: React.FC = () => {
    return (
        <MotionWrapper direction="top">
            <section className="section skills">
                <div className="title-item">
                    <h1>Yetenekler</h1>
                </div>
                <div className="skills-experience-wrapper">
                    <div className="education-group">
                        <h3 className="skills-title">Education</h3>
                        {education.map((item, index) => (
                            <div key={index} className="timeline-item">
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
                            {skills.coding.map((skill, i) => (
                                <div key={i} className="skill-bar">
                                    <div className="skill-bar-header">
                                        <span>{skill.name}</span>
                                        <span>{skill.value}%</span>
                                    </div>
                                    <div className="skill-bar-track">
                                        <div
                                            className="skill-bar-fill"
                                            style={{ width: `${skill.value}%` }}
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
};

export default Skills;