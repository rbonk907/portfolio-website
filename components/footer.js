import styles from '../styles/Footer.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <AiFillLinkedin />
            <AiFillGithub />
        </footer>
    )
}

export default Footer;