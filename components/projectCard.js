import styles from '../styles/ProjectCard.module.css'
import Image from 'next/image'

const ProjectCard = ({ project }) => {
    return (
        <div className={styles.projectCard}>
            <h3>{project.title}</h3>
            <div className={styles.imageContainer}>
                <Image 
                    className={styles.projectImage}
                    src={project.imageURL}
                    alt='' 
                    fill />
            </div>
            <p>{project.description}</p>
        </div>
    )
}

export default ProjectCard;