import React, { useEffect, useState } from 'react';
import projectsData from '../data/projects.json';

const Projects = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(projectsData);
    }, []);

    return (
        <section id="projects" className="projects">
            <h2>My Projects</h2>
            <div className="projects-list">
                {projects.map((project, index) => (
                    <div key={index} className="project-item">
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.url} target="_blank" rel="noopener noreferrer">View Project</a>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;