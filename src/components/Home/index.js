import { Link } from "react-router-dom";
import LogoV from '../../assets/images/triforce.png';
import './index.scss';
const Home = () => {
    return (
        <div className = 'container home-page'>
            <div className ='text-zone'>
               <h1>Hi, <br />I'm
               <img src = {LogoV} alt = "developer" />
               Vishvak !
               <br />
               This is a website.
               </h1>
               <h2>AIML Developer + Software + Robotics </h2>
               <div className='button-group'>
                   <Link to ="/projects" className = 'flat-button'>VIEW PROJECTS</Link>
                   <Link to ="/contact" className = 'flat-button'>CONTACT ME</Link>
               </div>
            </div>
        </div>
    )
}

export default Home;