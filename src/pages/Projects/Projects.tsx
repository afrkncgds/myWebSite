import React, { memo } from "react";
import { PROJECTS } from "../../data";
import ProjectCard from "../../components/projects/ProjectCard";
import MotionWrapper from "../../components/common/MotionWrapper";
import "./Projects.scss";

const Projects: React.FC = memo(() => {
    return (
        <MotionWrapper direction="top">
            <section className="section projects" aria-label="Projects section">
                <div className="title-item">
                    <h1>Projeler</h1>
                </div>
                <div className="projects-grid" role="list">
                    {PROJECTS.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>
        </MotionWrapper>
    );
});

Projects.displayName = "Projects";

export default Projects;
