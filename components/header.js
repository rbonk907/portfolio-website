import { useEffect, useState } from 'react';
import scrollTo from '../utility/scrollTo';
import { AiOutlineMail } from 'react-icons/ai';

const getHeader = (isMobile, scrollOffset) => {
    if(isMobile) {
        const offsetStyle = scrollOffset < 0 ? "transition duration-200 -translate-y-[60px]" : "transition duration-200 translate-y-0"
        return (
            <header className={ `${offsetStyle} fixed top-0 w-full h-[50px] bg-slate-100 shadow-lg shadow-slate-400 z-40`} >
            </header>
        );
    }

    return (
        <header className='relative h-[50px] flex justify-end px-6 bg-slate-100 z-40 max-w-screen-2xl mx-auto'>
            <ul className='flex items-center gap-6'>
                <li onClick={() => scrollTo('projects')} className='cursor-pointer'>
                    <a>
                        <span className=''>PROJECTS</span>
                    </a>
                </li>
                <li onClick={() => scrollTo('experience')} className='cursor-pointer'>
                    <a>
                        <span className=''>EXPERIENCE</span>
                    </a>
                </li>
                <li onClick={() => scrollTo('contact')} className='flex items-center cursor-pointer'>
                    
                    <AiOutlineMail className='w-4 h-4 mr-2' />
                    <span className='block'>GET IN TOUCH</span>
                    
                </li>
            </ul>
        </header>
    );
};

const Header = ({ isMobile }) => {
    const [scrollHeight, setScrollHeight] = useState(-1);
        

    useEffect(() => {
        window.addEventListener("scroll", getScrollHeight);

        return () => {
            window.removeEventListener("scroll", getScrollHeight);
          };
    }, []);

    const getScrollHeight = () => {
        const element = document.getElementById('projects');
        const elementPosition = element.getBoundingClientRect().top;

        const offsetPosition = elementPosition + window.pageYOffset;

        setScrollHeight(window.scrollY - offsetPosition);
    }


    return (
        <>
            { getHeader(isMobile, scrollHeight) }
        </>
    );
};

export default Header;