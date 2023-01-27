import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';
import scrollTo from '../utility/scrollTo';
import { AiOutlineMail } from 'react-icons/ai';

const getHeader = (isMobile, scrollOffset) => {
    if(isMobile) {
        return (
            <header className={ scrollOffset < 0 ? `${styles.headerOff} 
                ${styles.mobileHeader}` : `${styles.headerOn} 
                    ${styles.mobileHeader}`}></header>
        );
    }

    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <li onClick={() => scrollTo('projects')}>
                    <a>
                        <span className={styles.headerLink}>PROJECTS</span>
                    </a>
                </li>
                <li onClick={() => scrollTo('experience')}>
                    <a>
                        <span className={styles.headerLink}>EXPERIENCE</span>
                    </a>
                </li>
                <li onClick={() => scrollTo('contact')}>
                    
                    <AiOutlineMail className={styles.mailIcon}/>
                    <span className={styles.headerLink}>GET IN TOUCH</span>
                    
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
        <div className={ isMobile ? `${styles.headerContainer}` : `${styles.headerContainer}`}>
            { getHeader(isMobile, scrollHeight) }
        </div>
    );
};

export default Header;