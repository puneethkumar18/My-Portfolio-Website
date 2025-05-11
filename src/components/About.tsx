import React from 'react';
import { Code, Briefcase, Zap, Globe } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
}

const skills: Skill[] = [
  { name: 'HTML/CSS', level: 95 },
  { name: 'JavaScript', level: 90 },
  { name: 'Flutter', level: 85 },
  { name: 'Dart', level: 80 },
  { name: 'Node.js', level: 75 },
  { name: 'UI/UX Design', level: 70 },
];

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-16 h-1 bg-blue-600 dark:bg-blue-400 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            I'm a passionate frontend developer with a keen eye for design and a commitment to creating accessible, 
            performant web applications. With over 5 years of experience, I specialize in building engaging user 
            interfaces that deliver exceptional user experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">What I Do</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <Code className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Web Development</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Building responsive and interactive websites with modern frameworks and technologies.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <Briefcase className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">UI/UX Design</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Creating intuitive user interfaces and enjoyable user experiences.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-blue-100 dark:bg-blue-900/50 p-3 rounded-lg">
                  <Zap className="text-blue-600 dark:text-blue-400" size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-900 dark:text-white">Performance Optimization</h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Enhancing website speed and efficiency through modern best practices.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">My Skills</h3>
            <div className="space-y-4">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-1">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                    <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-blue-600 dark:bg-blue-400 h-2 rounded-full"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-blue-600 text-white dark:bg-blue-900 rounded-xl p-8 shadow-lg">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h3 className="text-2xl font-bold mb-2">Interested in working together?</h3>
              <p className="text-blue-100">
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>
            <a
              href="#contact"
              className="px-6 py-3 bg-white text-blue-600 hover:bg-blue-50 rounded-lg transition-colors duration-300 font-medium whitespace-nowrap"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;