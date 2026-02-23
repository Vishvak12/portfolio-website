import './index.scss';

const About = () => {
    // Customize these skills with your actual proficiency levels (0-100)
    const skills = {
        "Programming Languages": [
            { name: "Python", level: 90 },
            { name: "JavaScript", level: 85 },
            { name: "C++", level: 80 },
            { name: "Java", level: 75 }
        ],
        "AI/ML & Data Science": [
            { name: "TensorFlow", level: 85 },
            { name: "PyTorch", level: 80 },
            { name: "Scikit-learn", level: 90 },
            { name: "OpenCV", level: 85 }
        ],
        "Web Development": [
            { name: "React", level: 85 },
            { name: "Node.js", level: 80 },
            { name: "HTML/CSS", level: 90 },
            { name: "MongoDB", level: 75 }
        ],
        "Robotics & Tools": [
            { name: "ROS", level: 85 },
            { name: "Arduino", level: 80 },
            { name: "Git", level: 90 },
            { name: "Docker", level: 70 }
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
                    {Object.entries(skills).map(([category, categorySkills], categoryIndex) => (
                        <div key={category} className='skill-category'>
                            <h3>{category}</h3>
                            <div className='skills-list'>
                                {categorySkills.map((skill, skillIndex) => (
                                    <div
                                        key={skill.name}
                                        className='skill-item'
                                        style={{
                                            animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1)}s`
                                        }}
                                    >
                                        <div className='skill-info'>
                                            <span className='skill-name'>{skill.name}</span>
                                            <span className='skill-percentage'>{skill.level}%</span>
                                        </div>
                                        <div className='skill-bar'>
                                            <div
                                                className='skill-progress'
                                                style={{
                                                    width: `${skill.level}%`,
                                                    animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.1) + 0.5}s`
                                                }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About;
