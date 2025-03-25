import React from 'react';

const skillCategories = [
  {
    title: 'Developer Technologies',
    skills: ['Python', 'Java', 'C', 'Kotlin', 'RESTful APIs', 'React', 'TypeScript', 'Node.js', 'Express', 'Tailwind CSS', 'HTML/CSS', '1+ years experience with OOP']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'CI/CD', 'Git', 'Jenkins', 'AWS', 'Bash']
  },
  {
    title: 'AWS',
    skills: ['S3', 'EFS', 'EBS', 'API Gateway', 'Lambda', 'DynamoDB', 'RDS', 'EC2', 'ECS', 'EKS', 'Beanstalk', 'Cognito', 'Amplify', 'SQS', 'SES', 'SNS', 'IAM', 'CloudWatch']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;