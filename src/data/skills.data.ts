export interface Skill {
    name: string;
    value: number;
}

export interface EducationItem {
    year: string;
    title: string;
    place: string;
    desc: string;
}

export const SKILLS = {
    coding: [
        { name: "JavaScript", value: 85 },
        { name: "PHP", value: 70 },
        { name: "Python", value: 45 },
        { name: "CSS", value: 75 },
        { name: "HTML", value: 100 },
        { name: "Git", value: 60 },
        { name: "React.js", value: 60 },
        { name: "React Native", value: 60 },
        { name: "Node.js", value: 60 },
        { name: "Angular.js", value: 60 },
        { name: "UX/UI", value: 60 },
        { name: "Sass", value: 60 },
        { name: "SCSS", value: 60 },
        { name: "C", value: 60 },
        { name: "SQL", value: 60 },
        { name: "MVC", value: 60 },
    ],
} as const;

export const EDUCATION: EducationItem[] = [
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
