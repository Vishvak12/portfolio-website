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
                    I'm a passionate AIML Developer with experience in Software Development and Robotics.
                    I love building intelligent systems and creating innovative solutions to complex problems.
                </p>
                <p>
                    My expertise includes machine learning, artificial intelligence, full-stack development,
                    and robotics systems. I'm always eager to learn new technologies and take on challenging projects.
                </p>
                <p>
                    When I'm not coding, you can find me exploring new tech trends, contributing to open-source
                    projects, or working on personal robotics projects.
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
