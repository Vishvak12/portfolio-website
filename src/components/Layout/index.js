import Navbar from '../Navbar';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';
import './index.scss';

const Layout = () => {
    return (
        <div className='App'>
            <Navbar />
            <main className='page'>
                <section id='home'>
                    <Home />
                </section>
                <section id='about'>
                    <About />
                </section>
                <section id='projects'>
                    <Projects />
                </section>
                <section id='contact'>
                    <Contact />
                </section>
            </main>
        </div>
    );
};

export default Layout; 