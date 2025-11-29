import React, { memo } from "react";
import type {Project} from "../../types";
import { ExternalLinkIcon, GitHubIcon } from "../icons";
import "./ProjectCard.scss";

interface ProjectCardProps {
    project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = memo(({ project }) => {
    const handleImageClick = (e: React.MouseEvent) => {
        e.stopPropagation();
    };

    return (
        <article className="project-card">
            {project.image && (
                <div className="project-image-wrapper">
                    <img 
                        src={project.image} 
                        alt={project.title}
                        className="project-image"
                        loading="lazy"
                    />
                    {project.link && (
                        <div className="project-image-overlay">
                            <a 
                                href={project.link} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="project-image-link"
                                onClick={handleImageClick}
                                aria-label={`Visit ${project.title} live demo`}
                            >
                                <ExternalLinkIcon size={24} />
                            </a>
                        </div>
                    )}
                </div>
            )}
            
            <div className="project-content">
                <header className="project-header">
                    <h3 className="project-title">{project.title}</h3>
                </header>
                
                <div className="project-body">
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies" role="list">
                        {project.technologies.map((tech) => (
                            <span 
                                key={tech} 
                                className="tech-tag"
                                role="listitem"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
                
                <footer className="project-footer">
                    {project.link && (
                        <a 
                            href={project.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link"
                            aria-label={`View ${project.title} live demo`}
                        >
                            <ExternalLinkIcon size={18} />
                            <span>Live Demo</span>
                        </a>
                    )}
                    {project.github && (
                        <a 
                            href={project.github} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="project-link github"
                            aria-label={`View ${project.title} on GitHub`}
                        >
                            <GitHubIcon size={18} />
                            <span>GitHub</span>
                        </a>
                    )}
                </footer>
            </div>
        </article>
    );
});

ProjectCard.displayName = "ProjectCard";

export default ProjectCard;
