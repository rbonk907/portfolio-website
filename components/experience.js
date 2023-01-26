import styles from '../styles/Experience.module.css';
import { AiOutlineLink } from 'react-icons/ai';

const Experience = ({ isMobile }) => {
    return (
        <div className={styles.experience}>
            <h2 id='experience' className={ isMobile ? `${styles.sticky}` : ''}>Experience</h2>
            <div className={styles.jobList}>
                <div className={styles.job}>
                    <div className={styles.jobCompany}>
                        <span>HZA Engineering Solutions</span>
                        <span className={styles.date}>Jan 2021 - Dec 2022</span>
                    </div>
                    <div className={styles.jobDescription}>
                        <h3>Electrical Engineer</h3>
                        <p>
                            Worked under the supervision of a Professional Electrical Engineer licensed in the State of Alaska, developing construction drawings. Designed Electrical Systems for new and remodeled buildings that met the User-Requirements of the Owner and the constraints set forth by the National Electrical Code (including State Amendments). This required performing load analyses to ensure proper and safe operation of all added electrical equipment and coordinating with different Engineer disciplines to produce a final product.
                        </p>
                        <a className={styles.companyLink} target='_blank'
                        rel='noreferrer' href='https://www.hza-eng.com/'>
                            <AiOutlineLink />
                            <span>https://www.hza-eng.com/</span>
                        </a>
                    </div>
                </div>
                <div className={styles.job}>
                    <div className={styles.jobCompany}>
                        <span>NASA Langley Research Center</span>
                        <span className={styles.date}>May 2020 - Aug 2020</span>
                    </div>
                    <div className={styles.jobDescription}>
                        <h3>Team Lead | Intern</h3>
                        <p>
                            Led 15 student researchers towards prototyping an autonomous multi-modal vechicle capable of navigating hazardous terrain without the use of GPS. Coordinated between project mentors and team members to ensure an end result was feasible within the time constrains set forth by the internship. This included delegating roles and tasks to individual team members based on experience and background. Additionally, assisted the software sub-team in designing simulations in Linux using the Robotic Operating System as well as designing a finite state machine detailing the robot&apos;s operation. Concluded the internship by writing and publishing a paper of our work to the AIAA Sci Tech conference [<a target='_blank' rel='noreferrer' href='https://doi.org/10.2514/6.2021-1520'>paper</a>].
                        </p>
                        <a className={styles.companyLink} target='_blank'
                        rel='noreferrer' href='https://aero.larc.nasa.gov/nasa-academy/'>
                            <AiOutlineLink />
                            <span>https://aero.larc.nasa.gov/nasa-academy/</span>
                        </a>
                    </div>
                </div>
                <div className={styles.job}>
                    <div className={styles.jobCompany}>
                        <span>NASA Langley Research Center</span>
                        <span className={styles.date}>May 2019 - Aug 2019</span>
                    </div>
                    <div className={styles.jobDescription}>
                        <h3>Intern</h3>
                        <p>
                            Collaborated in a multi-disciplined team of engineer interns by researching consumer GPS receivers and their viability for safe use with unmanned aerial vehicles. Conducted experiments with RTK GPS and performed data analysis on the resulting NMEA data with Excel and Python. Concluded the internship by writing and publishing a paper of our work to the AIAA Sci Tech conference [<a target='_blank' rel='noreferrer' href='https://doi.org/10.2514/6.2020-0740'>paper</a>]
                        </p>
                        <a className={styles.companyLink} target='_blank'
                        rel='noreferrer' href='https://aero.larc.nasa.gov/nasa-academy/'>
                            <AiOutlineLink />
                            <span>https://aero.larc.nasa.gov/nasa-academy/</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;