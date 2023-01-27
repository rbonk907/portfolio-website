import styles from '../styles/Footer.module.css';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.socials}>
                <a target='_blank' href='https://www.linkedin.com/in/ryan-bonk-ak/' rel='noreferrer' >
                    <AiFillLinkedin className={`${styles.svg20} ${styles.mr16}`} />
                </a>
                <a target='_blank' href='https://github.com/rbonk907' rel='noreferrer'>
                    <AiFillGithub className ={styles.svg20} />
                </a>
            </div>
        </footer>
    )
}

export default Footer;