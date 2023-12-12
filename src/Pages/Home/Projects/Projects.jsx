import React from 'react';
import { DiReact, DiHtml5, DiCss3, DiNodejs } from 'react-icons/di';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const projectsData = [
  {
    id: 1,
    title: 'Knowledge Hub',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin auctor nisi ut erat fringilla, ac bibendum libero tincidunt.',
    technologies: [<DiReact />, <DiCss3 />, <DiNodejs />],
    image: 'https://i.ibb.co/xg7Zz0W/Fire-Shot-Capture-001-Vite-React-bistro-boss-fe0bb-web-app.png',
    codeLink: 'https://github.com/istiakahmedsarker/Knowledge-hub-client',
    liveLink: 'https://bistro-boss-fe0bb.web.app/',
  },
  {
    id: 2,
    title: 'Estate Mastermind',
    description:
      'Sed euismod quam eu quam semper, ac semper purus volutpat. Integer non turpis nec nulla cursus dapibus.',
    technologies: [<DiHtml5 />, <DiCss3 />, <DiNodejs />],
    image: 'https://i.ibb.co/qmX6v71/Fire-Shot-Capture-002-Vite-React-building-management-7c1a9-web-app.png',
    codeLink: 'https://github.com/istiakahmedsarker/Estate-mastermind-client',
    liveLink: 'https://building-management-7c1a9.web.app/',
  },
];

const Projects = () => {
    return (
      <div className="bg-[#022835] text-gray-300 md:p-8 py-28">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
          <div className="grid grid-cols-1 gap-8">
            {projectsData.map((project) => (
              <div key={project.id} className="flex flex-col md:flex-row bg-[#023240] p-4 rounded-md shadow-xl">
                <div className="md:w-1/4 mb-4 md:mb-0 mx-auto">
                  {/* Project Image */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 bg-cover rounded-md mx-auto"
                  />
                </div>
                <div className="md:w-1/2 flex flex-col">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="mb-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {project.technologies.map((icon, index) => (
                      <span key={index} className="text-3xl ">
                        {icon}
                      </span>
                    ))}
                  </div>
                  <div className="flex justify-between">
                    <a href={project.codeLink} target="_blank" rel="noopener noreferrer" className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-700 flex items-center">
                      <FaGithub className="text-xl mr-2" />
                      Code
                    </a>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 flex items-center">
                      <FaExternalLinkAlt className="text-xl mr-2" />
                      Live
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Projects;
  
