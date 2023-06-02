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

const Projects = () => {

    return (
        <div className='p-6'>
            <h2 id='projects' className='sticky top-0 pt-2 text-2xl font-extrabold md:static'>Projects</h2>
            <div className='flex flex-wrap justify-center gap-5 mt-8'>
                {getProjects()}
            </div>
        </div>
    );
}

export default Projects;