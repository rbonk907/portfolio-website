import styles from '../styles/ContactForm.module.css';
import { useState } from "react";

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join('&');
}

const ContactForm = ({ success, setSuccess }) => {
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();

        // post info here
        fetch('/', {
            method: 'POST',
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "contact", ...contactInfo })
        })
          .then(() => setSuccess(true))
          .catch(error => console.log(error));

        // setSuccess(true);
        
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
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit} className={styles.contactForm}>
            <input type='hidden' name='form-name' value='contact' />
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
            <button disabled={success} type='submit'>
                {success ? '' : 'Submit Message'}
            </button>
        </form>
    );
}

export default ContactForm;