import {Link, NavLink} from 'react-router-dom';
import './index.scss';
import LogoV from '../../assets/images/triforce.png';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {faEnvelope, faHome, faUser, faBriefcase} from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => (
    <div className = 'nav-bar'>
        <Link className = 'logo' to ="/">
        <img src = {LogoV} alt = "logo" />
        
        </Link>
        <nav>
            <NavLink end to ="/">
                <FontAwesomeIcon icon = {faHome} color = "#4d4d4e" />
            </NavLink>
            <NavLink className = 'about-link' to ="/about">
                <FontAwesomeIcon icon = {faUser} color = "#4d4d4e" />
            </NavLink>
            <NavLink className = 'projects-link' to ="/projects">
                <FontAwesomeIcon icon = {faBriefcase} color = "#4d4d4e" />
            </NavLink>
            <NavLink className='contact-link' to ="/contact">
                <FontAwesomeIcon icon = {faEnvelope} color = "#4d4d4e" />
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/vishvaksen-pendyala-1ab5b4268/">
                    <FontAwesomeIcon icon = {faLinkedin} color = "#4d4d4e" />   
                </a>
            </li>
            <li>
                <a target = "_blank" rel = "noreferrer" href = "https://github.com/Vishvak12/">
                    <FontAwesomeIcon icon = {faGithub} color = "#4d4d4e" />   
                </a>
            </li>
           
        </ul>
    </div>
)


export default Sidebar;
