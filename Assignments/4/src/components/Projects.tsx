import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Clasibot - AI Powered Quickbooks Extension',
    description: [
      'An app that aims to merge traditional online accounting tools with machine learning to assist with transaction classification',
      'Proposed and implemented the solution for an automated email monitoring feature',
      "Utilized AWs Cloud services to reduce client's cost overhead by 90%",
      "Developed Infrastructure as Code to duplicate certain AWS services' configurations for a feature"
    ],
    technologies: ['React', 'Typescript', 'PostgresSQL', 'AWS', 'Python', 'GitHub']
  },
  {
    title: 'Employee Timesheet',
    description: [
      'Provided solutions and advice on cloud architecture decisions for a microservices-based employee timesheet app using 15 AWS services',
      'Developed User Access and Role Management on the backend, utilizing AWS Cognito, IAM, and Lambda for secure authentication and authorization.',
      'Optimized API endpoints and backend logic, ensuring secure user workflows and seamless microservice integration using AWS API Gateway and Lambda'
    ],
    technologies: ['AWS APIGateway', 'AWS Lambda', 'AWS Cognito', 'AWS IAM', 'Python', 'GitHub'],
    github: 'https://github.com'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg h-full">
              <div className="p-6 flex flex-col h-full">
                <h3 className="text-xl font-bold mb-4">{project.title}</h3>
                <ul className="list-disc list-inside text-gray-600 mb-6 flex-grow space-y-2">
                  {project.description.map((item, i) => (
                    <li key={i} className="text-sm leading-relaxed">{item}</li>
                  ))}
                </ul>
                <div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;