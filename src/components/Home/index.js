import { useState } from 'react';
import './index.scss';

const Home = () => {
    const greetings = ['Hi', 'Hello', 'Hey', 'Greetings', 'Welcome', 'Namaste', 'Hola', 'Ciao'];
    const welcomeMessages = [
        'Welcome to my website.',
        'Glad you stopped by.',
        'Come explore my work.',
        'Take a look around.',
        'Thanks for visiting my portfolio.',
        'Let me show you what I build.'
    ];
    const [greeting] = useState(() => greetings[Math.floor(Math.random() * greetings.length)]);
    const [welcomeMessage] = useState(() => welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    <span className='greeting-text'>{greeting}</span>, <br />I'm
                    Vishvak !
                    <br />
                    {welcomeMessage}
                </h1>
                <h2>Machine Learning + Agentic Systems + Full-Stack Development</h2>
                <div className='button-group'>
                    <button className='flat-button' onClick={() => scrollTo('projects')}>VIEW PROJECTS</button>
                    <button className='flat-button' onClick={() => scrollTo('contact')}>CONTACT ME</button>
                </div>
            </div>
        </div>
    );
};

export default Home;