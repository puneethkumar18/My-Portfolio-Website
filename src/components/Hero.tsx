import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 bg-gradient-to-br from-white to-blue-50 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 lg:pr-16">
            <p className="text-blue-600 dark:text-blue-400 font-semibold mb-4">Hello, I'm</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Puneethkumar
            </h1>
            <h2 className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-300 mb-6">
              Software Engineer
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg max-w-lg">
              I create engaging, accessible, and high-performance web experiences
              with modern technologies and user-centered design principles.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-300 flex items-center gap-2 font-medium"
              >
                View Projects <ArrowRight size={18} />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-gray-800 rounded-lg transition-colors duration-300 font-medium dark:text-blue-400 dark:border-blue-400"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="w-full lg:w-1/2 mt-12 lg:mt-0 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-full blur-3xl opacity-20 dark:opacity-10"></div>
              <img
                src="https://media.licdn.com/dms/image/v2/D5603AQHOssR4ptWhjg/profile-displayphoto-shrink_400_400/B56ZTmCArcGsAk-/0/1739026076428?e=1752710400&v=beta&t=cwmYBW0NEXB4Ap6W2BUY1z0wsjCBVhdaZXGnyvmZfbQ"
                alt="Professional portrait"
                className="relative z-10 rounded-full w-64 h-64 sm:w-80 sm:h-80 object-cover border-4 border-white dark:border-gray-800 shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;