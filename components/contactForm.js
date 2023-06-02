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
        <form name='contact' method='post' data-netlify='true' data-netlify-honeypot='bot-field' onSubmit={handleSubmit} className='mt-6 md:mt-0'>
            <input type='hidden' name='form-name' value='contact' />
            <label className='block text-base'>
                Name 
                <input type='text' name='name' value={contactInfo.name} onChange={handleChange} className='block w-full p-2 rounded-sm mb-5'/>
            </label>
            <label className='block text-base'>
                Email
                <input type='email' name='email' value={contactInfo.email}
                 onChange={handleChange} className='block w-full p-2 rounded-sm mb-5'/>
            </label>
            <label className='block text-base'>
                Message 
                <textarea name='message' value={contactInfo.message}
                 onChange={handleChange} className='block w-full p-2 rounded-sm h-48 resize-none mb-5'/>
            </label>
            <button disabled={success} type='submit' className='px-16 py-5 w-full rounded-md font-bold uppercase bg-blue-300'>
                {success ? '' : 'Submit Message'}
            </button>
        </form>
    );
}

export default ContactForm;