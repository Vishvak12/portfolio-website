import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './index.scss';

const EMAILJS_SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;
const CONTACT_EMAIL = process.env.REACT_APP_CONTACT_EMAIL;

const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState('idle');
    const [feedbackMessage, setFeedbackMessage] = useState('');

    const resetFeedback = () => {
        setTimeout(() => {
            setStatus('idle');
            setFeedbackMessage('');
        }, 5000);
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        setStatus('sending');
        setFeedbackMessage('Sending your message...');

        const formData = new FormData(form.current);
        const name = formData.get('name')?.toString().trim() || '';
        const email = formData.get('email')?.toString().trim() || '';
        const subject = formData.get('subject')?.toString().trim() || 'Portfolio contact';
        const message = formData.get('message')?.toString().trim() || '';

        if (EMAILJS_SERVICE_ID && EMAILJS_TEMPLATE_ID && EMAILJS_PUBLIC_KEY) {
            try {
                await emailjs.sendForm(
                    EMAILJS_SERVICE_ID,
                    EMAILJS_TEMPLATE_ID,
                    form.current,
                    EMAILJS_PUBLIC_KEY
                );

                setStatus('success');
                setFeedbackMessage("Message sent successfully! I'll get back to you soon.");
                form.current.reset();
                resetFeedback();
                return;
            } catch (error) {
                console.error('Failed to send message with EmailJS:', error);
            }
        }

        if (CONTACT_EMAIL) {
            const mailtoSubject = encodeURIComponent(subject);
            const mailtoBody = encodeURIComponent(
                `Name: ${name}\nEmail: ${email}\n\n${message}`
            );

            window.location.href = `mailto:${CONTACT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}`;
            setStatus('success');
            setFeedbackMessage('Your email app has been opened with the message details.');
            form.current.reset();
            resetFeedback();
            return;
        }

        setStatus('error');
        setFeedbackMessage(
            'Contact service is not configured yet. Add EmailJS keys or a contact email in your environment settings.'
        );
    };

    return (
        <div className='container contact-page'>
            <div className='text-zone'>
                <h1>Contact Me</h1>
                <p>
                    I'm interested in freelance opportunities, collaborations, and exciting projects.
                    Feel free to reach out if you have any questions or just want to connect!
                </p>
                <p className='contact-note'>
                    This form uses EmailJS when configured, and falls back to your email app if a contact address is set.
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
                                    value={status === 'sending' ? 'SENDING...' : 'SEND'}
                                    disabled={status === 'sending'}
                                />
                            </li>
                        </ul>
                    </form>
                    {feedbackMessage && (
                        <div className={`form-message ${status}`}>
                            {feedbackMessage}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Contact;
