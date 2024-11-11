import React from 'react';

const experiences = [
  {
    company: 'Square One Insurance Services',
    position: 'Licensed Insurance Agent',
    period: 'October 2019 - June 2022',
    description: [
      'Managed online chat support team',
      'Assisted with the training of new agents',
      'Achieved a perfect 5/5 rating from the management team for excellence in underwriting reviews and communication',
      'Call center customer service agent and online chat customer support licesned for three different provinces'
    ]
  },
  {
    company: 'Mosaic Sales Solutions Canada Operation Co.',
    position: 'Sales Merchandising Rep.',
    period: 'February 2019 - July 2019',
    description: [
      'Audited for various brands and companies',
      'Operated without supervision and communicated with direct manager via email and SMS',
    ]
  },
  {
    company: 'IKEA Richmond',
    position: 'Customer Experience Team Member',
    period: 'Fall 2016 - Spring 2017',
    description: [
      'Resolved customer inquiries on store navigation, policies, and services'
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Experience</h2>
        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="bg-white rounded-lg shadow-md p-6">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exp.position}</h3>
                    <p className="text-gray-600">{exp.company}</p>
                  </div>
                  <p className="text-gray-500 mt-2 md:mt-0">{exp.period}</p>
                </div>
                <ul className="list-disc list-inside text-gray-600 space-y-2">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;