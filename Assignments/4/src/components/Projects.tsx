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
    awsServices: ['SES', 'S3', 'Lambda'],
    github: 'https://github.com/Vero-Ventures/clasibot/tree/main/src/email-monitoring'
  },
  {
    title: 'TimeTrack – Academic Project',
    description: [
      'An employee timesheet app that utilizes a serverless architecture',
      'Spearheaded the design of the serverless architecture, leveraging 13 different AWS Services',
      'Developed User Access and Role Management on the backend, utilizing AWS Cognito, IAM, and Lambda for secure authentication and authorization',
      'Provided solutions and advice on various Amazon Web Services within a team of 10 developers',
    ],
    technologies: ['GitHub', 'Python', 'Node.js', 'React', 'Typescript', 'Tailwind CSS'],
    awsServices: ['SES', 'S3', 'Lambda', 'API Gateway', 'Amplify', 'CodePipeline', 'CodeBuild', 'Cognito', 'SNS', 'SQS', 'Cloudwatch', 'IAM'],
    github: 'https://github.com/iwen-sue/comp4968-project-employee'
  },
  {
    title: 'Mood Buddy – Academic Project',
    description: [
      "An AI-powered chatbot is designed to brighten your day - enter a message, and the chatbot will respond with something to lift your spirits, whether it's a funny joke, a calming description of nature, or warm, encouraging words tailored just for you",
      'Designed and developed the admin-dashboard page, integrating React for the frontend UI with Tailwind CSS',
      'Optimized API endpoints and backend logic using AWS API Gateway, Lambda, and DynamoDB'
    ],
    technologies: ['React', 'Tailwind CSS', 'Typescript', 'Github', 'Vercel', 'DigitalOcean'],
    awsServices: ['API Gateway', 'Lambda', 'DynamoDB'],
    github: 'https://github.com/Rezah64/COMP4537-Project'
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
                  <div className="flex flex-wrap gap-2 mb-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-gray-600 hover:text-gray-900"
                    >
                      <Github/>
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