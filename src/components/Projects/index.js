import './index.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt, faStar, faCodeBranch } from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Your GitHub username
    const GITHUB_USERNAME = 'Vishvak12';

    useEffect(() => {
        // Fetch repositories from GitHub API
        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch repositories');
                }
                return response.json();
            })
            .then(data => {
                // Priority projects to show first (add your repo names here)
                const priorityProjects = ['super-mario-rl', 'breast-cancer-detection', 'Super-Mario-RL', 'Breast-Cancer-Detection'];

                // Filter out forks and portfolio repos to avoid duplicates
                let filteredRepos = data
                    .filter(repo => !repo.fork) // Exclude forked repositories
                    .filter(repo => !['portfolio-website', 'my-portfolio', 'react-portfoli'].includes(repo.name)); // Exclude portfolio duplicates

                // Separate priority and other repos
                const priority = filteredRepos.filter(repo =>
                    priorityProjects.some(name => repo.name.toLowerCase().includes(name.toLowerCase()))
                );
                const others = filteredRepos.filter(repo =>
                    !priorityProjects.some(name => repo.name.toLowerCase().includes(name.toLowerCase()))
                );

                // Combine: priority first, then others, limit to 7 total
                const githubProjects = [...priority, ...others]
                    .slice(0, 7)
                    .map(repo => ({
                        id: repo.id,
                        title: repo.name.replace(/-/g, ' ').replace(/_/g, ' '), // Format repo name
                        description: repo.description || 'No description available',
                        technologies: repo.topics || [], // GitHub topics as technologies
                        github: repo.html_url,
                        live: repo.homepage || null, // If repo has a homepage URL
                        stars: repo.stargazers_count,
                        forks: repo.forks_count,
                        language: repo.language,
                        image: `/images/${repo.name}.jpg` // You can add custom images with repo names
                    }));

                // Add this portfolio website as a featured project
                const portfolioProject = {
                    id: 'portfolio-featured',
                    title: 'Portfolio Website',
                    description: 'A modern, responsive portfolio website built with React. Features include dynamic GitHub integration, animated skills section, contact form, and smooth page transitions.',
                    technologies: ['React', 'React Router', 'SCSS', 'EmailJS', 'GitHub API'],
                    github: 'https://github.com/Vishvak12/portfolio-website',
                    live: window.location.origin, // Current website URL
                    stars: 0,
                    forks: 0,
                    language: 'JavaScript',
                    image: '/images/portfolio.jpg',
                    featured: true
                };

                // Put portfolio first, then other projects
                setProjectsData([portfolioProject, ...githubProjects]);
                setLoading(false);
            })
            .catch(err => {
                console.error('Error fetching GitHub repos:', err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return (
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>My Projects</h1>
                    <p className='loading-message'>Loading projects from GitHub...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className='container projects-page'>
                <div className='text-zone'>
                    <h1>My Projects</h1>
                    <p className='error-message'>Failed to load projects. Please try again later.</p>
                </div>
            </div>
        );
    }

    return (
        <div className='container projects-page'>
            <div className='text-zone'>
                <h1>My Projects</h1>
                <p>
                    Here are my recent projects from GitHub showcasing my skills in AI/ML,
                    software development, and robotics. Each project represents a unique
                    challenge and learning experience.
                </p>
            </div>

            <div className='projects-grid'>
                {projectsData.map((project, index) => (
                    <div
                        key={project.id}
                        className={`project-card ${project.featured ? 'featured' : ''}`}
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className='project-image'>
                            <img
                                src={project.image}
                                alt={project.title}
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x250?text=' +
                                                   encodeURIComponent(project.title);
                                }}
                            />
                        </div>
                        <div className='project-content'>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>

                            {project.language && (
                                <div className='project-language'>
                                    <span className='language-badge'>{project.language}</span>
                                </div>
                            )}

                            {project.technologies.length > 0 && (
                                <div className='technologies'>
                                    {project.technologies.slice(0, 5).map((tech, techIndex) => (
                                        <span key={techIndex} className='tech-tag'>{tech}</span>
                                    ))}
                                </div>
                            )}

                            <div className='project-stats'>
                                <span className='stat'>
                                    <FontAwesomeIcon icon={faStar} /> {project.stars}
                                </span>
                                <span className='stat'>
                                    <FontAwesomeIcon icon={faCodeBranch} /> {project.forks}
                                </span>
                            </div>

                            <div className='project-links'>
                                {project.github && (
                                    <a
                                        href={project.github}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='project-link'
                                    >
                                        <FontAwesomeIcon icon={faGithub} /> View Code
                                    </a>
                                )}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target='_blank'
                                        rel='noreferrer'
                                        className='project-link'
                                    >
                                        <FontAwesomeIcon icon={faExternalLinkAlt} /> Live Demo
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {projectsData.length === 0 && !loading && !error && (
                <div className='no-projects'>
                    <p>No projects found. Start creating amazing projects!</p>
                </div>
            )}
        </div>
    );
}

export default Projects;
