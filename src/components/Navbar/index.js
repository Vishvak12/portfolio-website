import { useState, useEffect } from 'react';
import './index.scss';
import LogoV from '../../assets/images/triforce.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faHome, faUser, faBriefcase, faEnvelope, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const navItems = [
        { id: 'home', label: 'Home', icon: faHome },
        { id: 'about', label: 'About', icon: faUser },
        { id: 'projects', label: 'Projects', icon: faBriefcase },
        { id: 'contact', label: 'Contact', icon: faEnvelope },
    ];

    useEffect(() => {
        const sectionIds = ['home', 'about', 'projects', 'contact'];

        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            const scrollPos = window.scrollY + 120;

            for (let i = sectionIds.length - 1; i >= 0; i--) {
                const el = document.getElementById(sectionIds[i]);
                if (el && el.offsetTop <= scrollPos) {
                    setActiveSection(sectionIds[i]);
                    break;
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        setMenuOpen(false);
    };

    return (
        <nav className={`top-navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-inner">
                <div className="navbar-logo" onClick={() => scrollToSection('home')}>
                    <img src={LogoV} alt="logo" />
                </div>

                <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                    <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
                </button>

                <ul className={`navbar-links ${menuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.id}>
                            <button
                                className={activeSection === item.id ? 'active' : ''}
                                onClick={() => scrollToSection(item.id)}
                            >
                                <FontAwesomeIcon icon={item.icon} />
                                <span>{item.label}</span>
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="navbar-socials">
                    <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/vishvaksen-pendyala-1ab5b4268/">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a target="_blank" rel="noreferrer" href="https://github.com/Vishvak12/">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
