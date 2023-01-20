import styles from '../styles/Bio.module.css';
import Image from 'next/image';
import bioPic from '../resources/images/profile-square.jpg';

const Bio = ({ lexend }) => {
    const bioHighlights = ["Electrical Engineer", "Alaskan Raised", "Coffee Enthusiast"];
    const skillList = ["C/C++", "VHDL", "NodeJS"];
    
    return (
        <div className={`${styles.bio}`}>
            <div className={styles.bioInfo}>
                <h2>About me</h2>
                <p>
                    Hello, I’m Ryan Bonk, and I have a deep passion for beautiful interactive apps on the internet. 
                    I was first introduced to web development when I began the Full-Stack Engineering course on 
                    CodeCademy back in the summer of 2021. I began viewing websites in a whole new light and quickly 
                    fell in love with the beautiful layouts that are possible with CSS and the endless possibilities 
                    for interaction with JavaScript.
                </p>
                <p>
                    I graduated from the University of Alaska Fairbanks with a degree in Electrical Engineering in 
                    2020 where I first learned to program, using C++. After college, I was hired by a small firm in 
                    Anchorage, Alaska, where I currently work as an Electrical Engineer. After a few months of 
                    working, I discovered there was a void in my life that needed to be filled by some form of 
                    computer programming.
                </p>
                <p>
                    Fast forward to today and I could not be more enamored by web technologies, encouraging me to 
                    pursue a career change.
                </p>
            </div>
            <div className={styles.bioCard}>
                <div className={styles.imgContainer}>
                    <Image 
                        className={styles.bioPic}
                        src={bioPic}
                        alt='Picture of Author'
                    />
                </div>
                <ul className={styles.highlightList}>
                    {bioHighlights.map(highlight => {
                        return <li className={styles.bioHighlight} key={highlight}>{highlight}</li>;
                    })}
                </ul>
                <h3>- Skills -</h3>
                <ul className={styles.highlightList}>
                    {skillList.map(highlight => {
                        return <li className={styles.bioHighlight} key={highlight}>{highlight}</li>;
                    })}
                </ul>
            </div>
        </div>
    );
};

export default Bio;