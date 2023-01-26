import styles from '../styles/HeroBanner.module.css';
import profile from '../resources/images/profile-small.png';
import Image from 'next/image';
import scrollTo from '../utility/scrollTo';
import { AiFillGithub, AiFillLinkedin, AiOutlineSelect } from 'react-icons/ai';

const HeroBanner = ({lexend}) => {
    return (
        <div className={styles.heroBanner}>
            <div>
                <h1>Ryan Bonk</h1>
                <h2>Aspiring Software Developer</h2>
                <div className={styles.infoBlurb}>
                    <p>
                        I&apos;m an Electrical Engineer seeking a career in Software Development. I love system languages and tinkering around with different embedded platforms. I believe that my work should speak for itself, so please feel free to view my <span className={styles.link} onClick={() => scrollTo('projects')}>project highlights</span> below, or check out my <a target='_blank' href='https://github.com/rbonk907' rel='noreferrer'><span className={styles.link}>github</span></a>. 
                    </p>
                    <p className={styles.link} onClick={() => scrollTo('contact')}>
                        Let me know how I can help you!
                    </p>
                </div>
            </div>
            <div className={styles.socials}>
                <div className={styles.imageContainer}>
                    <Image 
                        src={profile}
                        alt="Ryan Bonk's headshot" />
                </div>
                <ul>
                    <li>
                        <a className={`${styles.flex} ${styles.flexCenter}`}
                            target='_blank' href='https://www.linkedin.com/in/ryan-bonk-ak/' rel='noreferrer' >
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
                        <a 
                            className={`${styles.flex} ${styles.flexCenter}`}
                            target='_blank' href='https://github.com/rbonk907' rel='noreferrer' >
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