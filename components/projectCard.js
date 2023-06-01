import { AiOutlineFolder, AiOutlineGithub } from 'react-icons/ai';
import Link from 'next/link';

const ProjectCard = ({ project }) => {
    return (
        <Link href={project.href}>
            <div className='bg-slate-100 p-6 max-w-sm min-h-[375px] flex flex-col gap-2 md:shadow-lg md:shadow-slate-400'>
                <div className='flex justify-between'>
                        <AiOutlineFolder className='w-6 h-6' />
                        <AiOutlineGithub className='w-6 h-6' />
                </div>
                <h3 className='text-3xl font-extrabold'>{project.title}</h3>
                <p className='text-gray-700'>{project.description}</p>
                <div>
                    <ul className='flex gap-3 flex-wrap mt-3'>
                        {project.tags.map(tag => {
                            return <li key={tag} className='px-3 py-1 bg-slate-200 rounded-full'>{tag}</li>;
                        })}
                    </ul>
                </div>
                
                {project.isComplete ? '' : 
                <div className='flex gap-3 items-center pt-3'>
                    <span className='relative flex h-3 w-3'>
                        <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75'></span>
                        <span className='relative inline-flex rounded-full h-3 w-3 bg-orange-400'></span>
                    </span>
                    <span className='font-bold text-orange-400'>In Progress</span>
                </div>}
            </div>
        </Link>
    )
}

export default ProjectCard;