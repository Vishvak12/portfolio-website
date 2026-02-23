import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const Contact = () => {
    const form = useRef();
    const [messageSent, setMessageSent] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();

        // You'll need to replace these with your actual EmailJS credentials
        // Sign up at https://www.emailjs.com/ to get these values
        emailjs.sendForm(
            'YOUR_SERVICE_ID',
            'YOUR_TEMPLATE_ID',
            form.current,
            'YOUR_PUBLIC_KEY'
        )
        .then(() => {
            setMessageSent(true);
            form.current.reset();
            setTimeout(() => setMessageSent(false), 5000);
        }, (error) => {
            console.log('Failed to send message:', error.text);
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I'm interested in freelance opportunities, collaborations, and exciting projects.
                    Feel free to reach out if you have any questions or just want to connect!
                </p>
                <div className='contact-form'>
                    <form ref={form} onSubmit={sendEmail}>
                        <ul>
                            <li className='half'>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                />
                            </li>
                            <li className='half'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                />
                            </li>
                            <li>
                                <input
                                    type="text"
                                    name="subject"
                                    placeholder="Subject"
                                    required
                                />
                            </li>
                            <li>
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    required
                                ></textarea>
                            </li>
                            <li>
                                <input
                                    type="submit"
                                    className='flat-button'
                                    value="SEND"
                                />
                            </li>
                        </ul>
                    </form>
                    {messageSent && (
                        <div className='success-message'>
                            Message sent successfully! I'll get back to you soon.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact;
