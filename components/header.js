import styles from '../styles/Header.module.css';
import { useEffect, useState } from 'react';

const getHeader = (isMobile, vh) => {
    if(isMobile) {
        return (
            <header className={ vh < 0 ? `${styles.headerOff} 
                ${styles.mobileHeader}` : `${styles.headerOn} 
                    ${styles.mobileHeader}`}></header>
            // <header className={styles.mobileHeader}></header>
        );
    }

    return (
        <header className={styles.header}>
            <ul className={styles.menu}>
                <li><a>About</a></li>
                <li><a>Experience</a></li>
                <li><a>Projects</a></li>
                <li><a>Contact</a></li>
                <li><a className={styles.resume} href='' target='_blank'>Resume</a></li>
            </ul>
        </header>
    );
};

const Header = ({ isMobile }) => {
    const [scrollHeight, setScrollHeight] = useState(0);
    // let vh = 0;    

    useEffect(() => {
        window.addEventListener("scroll", getScrollHeight);
        getScrollHeight();

        return () => {
            window.removeEventListener("scroll", getScrollHeight);
          };
    }, []);

    const getScrollHeight = () => {
        setScrollHeight(window.scrollY - window.innerHeight);
    }


    return (
        <div className={`${styles.sticky} ${styles.headerContainer}`}>
            { getHeader(isMobile, scrollHeight) }
        </div>
    );
};

export default Header;