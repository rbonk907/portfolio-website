import styles from '../styles/Projects.module.css';
import { projectInfo } from '../resources/projectInfo.js';
import ProjectCard from './projectCard';

const getProjects = () => {
    const projectList = projectInfo.projects.map(project => {
        return (<ProjectCard
                    key={project.id} 
                    project={project} />);
    });

    return projectList;
}

const Projects = ({ isMobile }) => {

    return (
        <div className={styles.projectContainer}>
            <h2 id='projects' className={isMobile ? `${styles.sticky}` : ''}>Projects</h2>
            <div className={styles.projects}>
                {getProjects()}
            </div>
        </div>
    );
}

export default Projects;