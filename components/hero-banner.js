import styles from '../styles/HeroBanner.module.css';
import profile from '../resources/images/profile-small.png';
import bannerPhoto from '../public/banner-photo.jpg';
import Image from 'next/image';
import scrollTo from '../utility/scrollTo';
import { AiFillGithub, AiFillLinkedin, AiOutlineSelect } from 'react-icons/ai';

const HeroBanner = ({lexend}) => {
    return (
        <div className={styles.heroBanner}>
            <div className="flex items-center gap-4">
                <div className="w-16 h-16">
                    <Image 
                        src={profile}
                        className='rounded-full w-full h-auto'
                        alt="Ryan Bonk's headshot" />
                </div>
                <ul className='flex gap-4'>
                    <li>
                        <a 
                        className='flex items-center gap-2'
                        target='_blank' href='https://www.linkedin.com/in/ryan-bonk-ak/' rel='noreferrer' >
                            <AiFillLinkedin className='w-6 h-6' />
                            <span className='font-bold'>LinkedIn</span>
                        </a>
                    </li>
                    <li>
                        <a 
                        className='flex items-center gap-2'
                        target='_blank' href='https://github.com/rbonk907' rel='noreferrer' >
                            <AiFillGithub className='w-6 h-6' />
                            <span className='font-bold'>GitHub</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className={styles.maxWidth}>
                <h1>Hi there, I&apos;m Ryan.</h1>
                <h2><span>Aspiring Full-Stack Developer,</span><span>and Lifelong Student</span></h2>
                {/* <div className={`${styles.maxWidth} ${styles.overflowXHidden}`}>
                    <div className={styles.bannerImageContainer}>
                        <Image src={bannerPhoto} alt="Ryan at his desk" />
                    </div>
                </div> */}
                
                <div className={styles.infoBlurb}>
                    <div className={styles.col1}>
                        <p >
                            I&apos;m an Electrical Engineer graduate from the University of Alaska Fairbanks pursuing a career in software development.
                        </p>
                        <p>
                            My love for computers began around the age of 10 when I broke my brother&apos;s Game Boy Color while cracking it open to take a peek inside. I had wished to build a Game Boy of my own and my naive younger self believed I could figure it out if I stared at the circuit long enough. After being completely perplexed by the circuit board and scolded by my brother, I set aside the dream.
                        </p>
                    </div>
                    <div className={styles.col2}>
                        <p>
                            Years later, I decided to pursue a degree in Electrical Engineering to unlock the secrets that my 10-year-old self never had a chance to. When I graduated, I realized I had a basic understanding of how the hardware worked, but still little to no understanding of how software worked. With new found determination, I began exploring computer programming and have not looked back.
                        </p>
                        <p>
                            Since then, I have been learning Javascript, SQL, and related technologies for web development. I recently completed the Full-Stack Engineering career path on Codecademy and am now seeking a full-time role where I can continue to hone my skills.
                        </p>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default HeroBanner;