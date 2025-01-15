import React from 'react';
import { Github } from 'lucide-react';

const projects = [
  {
    title: 'Clasibot - Industry Project',
    description: [
      'An AI powered QuickBooks extension app that aims to merge traditional online accounting tools with machine learning to assist with transaction classification',
      'Proposed and implemented solution for automated email monitoring feature',
      "Worked with the client to setup DNS records to meet their various requirements",
      "Documented meeting minutes for client, team, and supervisor sessions"
    ],
    technologies: ['React', 'Typescript', 'AWS SES', 'AWS S3', 'AWS Lambda', 'Python', 'GitHub'],
    awsServices: ['SES', 'S3', 'Lambda']
  },
  {
    title: 'TimeTrack – Academic Project',
    description: [
      'An employee timesheet app that utilizes a serverless architecture',
      'Spearheaded the design of the serverless architecture, leveraging 13 different AWS Services',
      'Developed User Access and Role Management on the backend, utilizing AWS Cognito, IAM, and Lambda for secure authentication and authorization',
      'Provided solutions and advice on various Amazon Web Services within a team of 10 developers',
    ],
    technologies: ['GitHub', 'Python', 'Node.js'],
    awsServices: ['SES', 'S3', 'Lambda', 'API Gateway', 'Amplify', 'CodePipeline', 'CodeBuild', 'Cognito', ' SNS', 'SQS', 'Cloudwatch', 'IAM']
  },
  {
    title: 'QuickQueue App - Academic Project',
    description: [
      'An app designed to provide users with recommendations and information of videogames best matching their preferences',
      'Participated in Scrum meetings including sprint planning, daily scrum, and sprint retrospective',
      'Optimized API endpoints and backend logic, ensuring secure user workflows and seamless microservice integration using AWS API Gateway and Lambda'
    ],
    technologies: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'jQuery', 'Express.js', 'EJS', 'MOngoDB', 'IGDB API', 'OpenAI'],
    awsServices: []
  }
];

const Projects = () => {
  return (
    <section id="projects" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                  <div className="flex flex-wrap gap-2 mb-4">

                    {project.awsServices.map((service, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                      >
                        {service}
                      </span>
                    ))}
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