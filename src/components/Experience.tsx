import React from 'react';
import { experience } from '../utils/data';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My professional journey and the valuable experience I've gained along the way.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experience.map((job, index) => (
              <div key={index} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:shrink-0 bg-blue-600 dark:bg-blue-900 md:w-2 w-full h-2 md:h-auto"></div>
                  <div className="p-8">
                    <div className="flex flex-wrap justify-between items-start gap-4 mb-6">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">{job.title}</h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">{job.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm font-medium rounded-full">
                          {job.period}
                        </span>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">{job.location}</p>
                      </div>
                    </div>
                    
                    <ul className="space-y-3 text-gray-600 dark:text-gray-400">
                      {job.responsibilities.map((item, i) => (
                        <li key={i} className="flex">
                          <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 dark:bg-blue-400 mt-2 mr-2"></div>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    
                    {job.achievements && (
                      <div className="mt-6">
                        <h4 className="font-medium text-gray-900 dark:text-white mb-3">Key Achievements:</h4>
                        <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                          {job.achievements.map((achievement, i) => (
                            <li key={i} className="flex">
                              <div className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400 mt-2 mr-2"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;