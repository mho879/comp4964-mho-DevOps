import React from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'HTML/CSS']
  },
  {
    title: 'Backend',
    skills: ['Node.js', 'Express', 'RESTful APIs', 'Python', 'Java', 'C']
  },
  {
    title: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL']
  },
  {
    title: 'DevOps',
    skills: ['Docker', 'AWS', 'CI/CD', 'Git', 'Jenkins']
  }
];

const Skills = () => {
  return (
    <section id="skills" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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