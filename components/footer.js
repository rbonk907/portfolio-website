import styles from '../styles/Footer.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <AiFillLinkedin className={`${styles.svg20} ${styles.mr16}`} />
                <AiFillGithub className ={styles.svg20} />
            </div>
        </footer>
    )
}

export default Footer;