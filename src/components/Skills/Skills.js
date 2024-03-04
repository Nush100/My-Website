import SkillsList from "./SkillsList";
import "./Skills.css";

const Skills = () => {
    return (
        <section id="skills">
            <div className="skillHeading">
                <span className="skillTitle">Skills</span>
                <span className="skillDesc">My skills on Programming Languages, frameworks, libraries, tools and technologies etc.</span>
            </div>
            <div className="skillsList">
                {SkillsList.map((skill, index) => (
                    <div key={index} className="skill">
                        <div className="skillImg">{skill.img}</div>
                        <h2>{skill.name}</h2>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills;