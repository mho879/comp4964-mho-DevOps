import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Contact</h2>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a
              href="mailto:your.email@example.com"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Mail className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">Email</h3>
              <p className="text-gray-600">marcoho879@gmail.com</p>
            </a>
            <a
              href="https://github.com/mho879"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">GitHub</h3>
              <p className="text-gray-600">@mho879</p>
            </a>
            <a
              href="https://www.linkedin.com/in/marco-ho-45581b124/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Linkedin className="w-8 h-8 text-gray-900 mb-4" />
              <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-600">Marco Ho</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;