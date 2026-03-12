import { useState } from 'react';
import './index.scss';

const Home = () => {
    const greetings = ['Hi', 'Hello', 'Hey', 'Greetings', 'Welcome', 'Namaste', 'Hola', 'Ciao'];
    const [greeting] = useState(() => greetings[Math.floor(Math.random() * greetings.length)]);

    const scrollTo = (id) => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className='container home-page'>
            <div className='text-zone'>
                <h1>
                    {greeting}, <br />I'm
                    Vishvak !
                    <br />
                    Welcome to my website.
                </h1>
                <h2>AIML Developer + Software + Robotics</h2>
                <div className='button-group'>
                    <button className='flat-button' onClick={() => scrollTo('projects')}>VIEW PROJECTS</button>
                    <button className='flat-button' onClick={() => scrollTo('contact')}>CONTACT ME</button>
                </div>
            </div>
        </div>
    );
};

export default Home;