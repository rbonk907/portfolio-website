import styles from '../styles/Header.module.css';

const Header = () => {

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

export default Header;