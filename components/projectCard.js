import styles from '../styles/ProjectCard.module.css';
import { AiOutlineFolder, AiOutlineGithub } from 'react-icons/ai';

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <div className={styles.icons}>
                <div className={styles.iconLeft}>
                    <AiOutlineFolder className={styles.iconLarge} />
                </div>
                <div className={styles.iconRight}>
                    <AiOutlineGithub className={styles.iconLarge} />
                </div>
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.tags}>
                <ul>
                    {project.tags.map(tag => {
                        return <li key={tag} >{tag}</li>;
                    })}
                </ul>
            </div>
            <div className={styles.status}>
                {project.isComplete ? '' : <span>In Progress</span>}
            </div>
        </div>
    )
}

export default ProjectCard;