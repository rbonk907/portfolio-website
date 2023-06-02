import { useEffect, useState } from 'react';
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
        <div className="my-12 p-6">
            <h2 id='contact' className='sticky top-0 pt-2 mb-6 text-2xl font-extrabold z-50 md:static'>Get in Touch</h2>
            <h3 className='max-w-lg text-2xl mb-6'>If you wish to discuss opportunities, please send me a message</h3>
            <div className='flex flex-wrap md:flex-nowrap justify-start md:justify-end items-start'>
                <div className='mr-24'>
                    <span className='block text-base font-bold border-b border-black mb-3'>Skills</span>
                    <div>
                        <span className='block pb-3'>HTML/CSS/JavaScript</span>
                        <span className='block pb-3'>TypeScript</span>
                        <span className='block pb-3'>React</span>
                        <span className='block pb-3'>Node.js</span>
                        <span className='block pb-3'>PostgreSQL</span>
                    </div>
                </div>
                <div className='w-[600px] min-w-[312px]'>
                    <ContactForm success={success} setSuccess={setSuccess}/>
                </div>
            </div>
            {success ? <FormSuccess /> : ''}
            {/* <FormSuccess /> */}
        </div>
    )
};

export default Contact;