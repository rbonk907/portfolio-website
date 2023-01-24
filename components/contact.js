import { useEffect, useState } from 'react';
import styles from '../styles/Contact.module.css';
import ContactForm from './contactForm';
import FormSuccess from './formSuccess';

const Contact = () => {
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
            <h2>Get in Touch</h2>
            <div className={styles.formSection}>
                {success ? <FormSuccess /> : 
                    <ContactForm setSuccess={setSuccess}/>}
                {/* <FormSuccess opacity={opacity}/> */}
            </div>
        </div>
    )
};

export default Contact;