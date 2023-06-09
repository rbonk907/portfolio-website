import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className='py-6 bg-slate-100 shadow-y shadow-slate-400'>
            <div className='flex items-center justify-start pl-8 max-w-screen-2xl mx-auto'>
                <a target='_blank' href='https://www.linkedin.com/in/ryan-bonk-ak/' rel='noreferrer' >
                    <AiFillLinkedin className='mr-4 w-6 h-6' />
                </a>
                <a target='_blank' href='https://github.com/rbonk907' rel='noreferrer'>
                    <AiFillGithub className='w-6 h-6' />
                </a>
            </div>
        </footer>
    )
}

export default Footer;