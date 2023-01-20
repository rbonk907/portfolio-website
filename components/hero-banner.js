import styles from '../styles/HeroBanner.module.css';
import profile from '../resources/images/profile-small.png';
import Image from 'next/image';
import { AiFillGithub, AiFillLinkedin, AiOutlineSelect } from 'react-icons/ai';

const HeroBanner = ({lexend}) => {
    return (
        <div className={styles.heroBanner}>
            <h1>Ryan Bonk,</h1>
            <h2>Aspiring Software Developer</h2>
            <div className={styles.socials}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={profile}
                        alt="Ryan Bonk's headshot" />
                </div>
                <ul>
                    <li>
                        <a className={`${styles.flex} ${styles.flexCenter}`}>
                            <AiFillLinkedin 
                                className={`${styles.mr16} ${styles.svg18}`} 
                            />
                            <span className={styles.textCenter}>
                                LinkedIn
                            </span>
                            <AiOutlineSelect 
                                className={`${styles.ml8} ${styles.svg12}`}
                            />
                        </a>
                    </li>
                    <li>
                        <a className={`${styles.flex} ${styles.flexCenter}`}>
                            <AiFillGithub 
                                className={`${styles.mr16} ${styles.svg18}`}
                            />
                            <span>GitHub</span>
                            <AiOutlineSelect 
                                className={`${styles.ml8} ${styles.svg12}`}
                            />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default HeroBanner;