import React, { useState } from 'react';
import { GraduationCap, Award } from 'lucide-react';
import { education, certifications } from '../utils/data';

type QualificationType = 'education' | 'certifications';

const Qualifications: React.FC = () => {
  const [activeTab, setActiveTab] = useState<QualificationType>('education');

  return (
    <section id="qualifications" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Qualifications</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My educational background and professional certifications that have shaped my expertise.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center px-5 py-3 font-medium transition-colors ${
                activeTab === 'education'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <GraduationCap className="mr-2" size={20} />
              Education
            </button>
            <button
              onClick={() => setActiveTab('certifications')}
              className={`flex items-center px-5 py-3 font-medium transition-colors ${
                activeTab === 'certifications'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              <Award className="mr-2" size={20} />
              Certifications
            </button>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          {activeTab === 'education' ? (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 last:border-transparent last:pb-0">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{edu.degree}</h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                        {edu.years}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{edu.institution}</p>
                    <p className="text-gray-600 dark:text-gray-400">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-8">
              {certifications.map((cert, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l-2 border-blue-200 dark:border-blue-900 last:border-transparent last:pb-0">
                  <div className="absolute left-[-8px] top-0 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
                  <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow-sm">
                    <div className="flex justify-between items-start mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">{cert.name}</h3>
                      <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                        {cert.year}
                      </span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">{cert.organization}</p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-600 dark:text-blue-400 hover:underline inline-flex items-center"
                      >
                        View Certificate
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;