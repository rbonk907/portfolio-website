import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.css';
import ContactForm from './contactForm';
import FormSuccess from './formSuccess';

const Contact = ({ isMobile }) => {
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        let timeoutID;
        if (success) {
           timeoutID = setTimeout(() => {
                setSuccess(false);
           }, 3000);
        }

        return () => {
            clearTimeout(timeoutID);
        }
        
    }, [success]);

    return (
        <div className={styles.contact}>
            <h2 id='contact' className={ isMobile ? `${styles.sticky}` : ''}>Get in Touch</h2>
            <h3>If you wish to discuss opportunities, please send me a message</h3>
            <div className={styles.flex}>
                <div className={styles.skills}>
                    <span className={styles.skillHeader}>Skills</span>
                    <div className={styles.skillGrid}>
                        <span>C/C++</span>
                        <span>HTML/CSS/JavaScript</span>
                        <span>React</span>
                    </div>
                </div>
                <div className={styles.formSection}>
                    <ContactForm success={success} setSuccess={setSuccess}/>
                </div>
            </div>
            {success ? <FormSuccess /> : ''}
            {/* <FormSuccess /> */}
        </div>
    )
};

export default Contact;