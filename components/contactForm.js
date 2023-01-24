import styles from '../styles/ContactForm.module.css';
import { useState } from "react";

const ContactForm = ({ setSuccess }) => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // post info here

        setSuccess(true);
        
        setContactInfo({
            name: '',
            email: '',
            message: '',
        });

        
    }

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setContactInfo({...contactInfo, [name]: value});
    };
    
    return (
        <form onSubmit={handleSubmit} className={styles.contactForm}>
            <label>
                Name 
                <input type='text' name='name' value={contactInfo.name} onChange={handleChange}/>
            </label>
            <label>
                Email
                <input type='email' name='email' value={contactInfo.email}
                 onChange={handleChange}/>
            </label>
            <label>
                Message 
                <textarea name='message' value={contactInfo.message}
                 onChange={handleChange} />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
}

export default ContactForm;