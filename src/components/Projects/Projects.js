import React from "react";
import "./Projects.css";
import ProjectsList from "./ProjectsList";

const Projects = () => {
    return (
        <section id="projects">
            <div className="projectHeading">
                <span className="projectTitle">My Projects</span>
                <span className="projectDesc">Some of the projects done in my academics and in my leisure time</span>
            </div>
            <div className="projectBars">
                {ProjectsList.map((project, index) => (
                    <div key={index} className="projectBar">
                        <div className="projectBarText">
                            <h3>{project.projectName}</h3>
                            <p>{project.projectDesc}</p>
                        </div>
                    </div>
                ))}
            </div> 
        </section>
    )
}

export default Projects;