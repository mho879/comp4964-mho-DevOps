import React from 'react';
import { GraduationCap, Award, ExternalLink } from 'lucide-react';

const educationData = [
  {
    institution: 'British Columbia Institute of Technology',
    degree: 'Cumputer Systems Technology, Diploma',
    period: '2023 - Present'
  },
  {
    institution: 'Emily Carr University of Art and Design',
    degree: 'Bachelor of Fine Arts, Illustration',
    period: '2014 - 2018 (Graduated)'
  },
  {
    institution: 'Kwantlen Polytechnic University',
    degree: 'Bachelor of Fine Arts',
    period: '2012 - 2014 (Transferred Out)'
  }
];

const certifications = [
  {
    name: 'AWS Certified Solutions Architect - Associate',
    issuer: 'Amazon Web Services',
    date: 'October 2024 - 2027',
    credlyUrl: 'https://www.credly.com/badges/6333b619-ccdb-45da-a990-c1fbfea7ca4c/linked_in?t=slhdl6'
  }
];

const Education = () => {
  return (
    <section id="education" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Certifications & Education</h2>

        {/* Certifications */}
        <div className="max-w-3xl mx-auto mb-12">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-gray-700" />
            <h3 className="text-2xl font-semibold">Certifications</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">{cert.name}</h4>
                    <p className="text-gray-600">Issuer: {cert.issuer}</p>
                    <p className="text-gray-600">Date: {cert.date}</p>
                  </div>
                  <a
                    href={cert.credlyUrl}
                    target="_blank"

                    className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">Credly</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-4">
            <GraduationCap className="w-6 h-6 text-gray-700" />
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          {educationData.map((edu, index) => (
            <div key={index} className="bg-gray-50 rounded-lg shadow-sm p-6 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-gray-900">{edu.degree}</h4>
                  <p className="text-gray-600">{edu.institution}</p>
                </div>
                <p className="text-gray-500 mt-2 md:mt-0">{edu.period}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;