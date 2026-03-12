import './index.scss';

const About = () => {
    const skills = {
        "Programming Languages": [
            "Python", "JavaScript", "TypeScript", "C++", "C", "Java", "SQL"
        ],
        "AI / ML & Data Science": [
            "TensorFlow", "PyTorch", "Keras", "Scikit-learn", "OpenCV",
            "NumPy", "Pandas", "Matplotlib", "Hugging Face", "NLTK",
            "LangChain", "YOLO"
        ],
        "Web Development": [
            "React", "Next.js", "Node.js", "Express.js",
            "HTML5", "CSS3", "SCSS", "Tailwind CSS",
            "REST APIs", "GraphQL"
        ],
        "Databases": [
            "MongoDB", "PostgreSQL", "MySQL", "Firebase", "Redis"
        ],
        "Robotics & Embedded": [
            "ROS", "ROS 2", "Arduino", "Raspberry Pi",
            "Gazebo", "SLAM", "Computer Vision"
        ],
        "DevOps & Tools": [
            "Git", "GitHub", "Docker", "Linux", "Bash",
            "CI/CD", "AWS", "Vercel", "VS Code", "Jupyter"
        ]
    };

    return (
        <div className='container about-page'>
            <div className='text-zone'>
                <h1>About Me</h1>
                <p>
                    I'm passionate about solving problems using technology. From building circuits
                    and cars using microcontrollers in high school to delving into the world of
                    robotics and biology, I'm always up for a challenge.
                </p>
                <p>
                    Using my skills as a developer and trying to apply a creative approach to
                    everything I do is what drives me. Whether it's training a neural network,
                    wiring up a sensor on a robot, or just experimenting in the kitchen — I
                    bring the same curiosity and energy to every project.
                </p>
                <p>
                    I thrive at the intersection of AI, software, and hardware — turning ideas
                    into things that actually work. If there's a hard problem and a blank
                    terminal, I'm in.
                </p>
            </div>

            <div className='skills-section'>
                <h2>Technical Skills</h2>
                <div className='skills-container'>
                    {Object.entries(skills).map(([category, items], catIdx) => (
                        <div
                            key={category}
                            className='skill-category'
                            style={{ animationDelay: `${catIdx * 0.12}s` }}
                        >
                            <h3>{category}</h3>
                            <div className='skill-tags'>
                                {items.map((skill, i) => (
                                    <span
                                        key={skill}
                                        className='skill-tag'
                                        style={{ animationDelay: `${catIdx * 0.12 + i * 0.04}s` }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
