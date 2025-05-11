import React from 'react';
import { Github, Linkedin, BookOpen, Globe } from 'lucide-react';

interface SocialLinksProps {
  className?: string;
  size?: number;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = '', size = 24 }) => {
  return (
    <div className="flex space-x-4">
      <a
        href="https://github.com/puneethkumar18"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform hover:scale-110 ${className}`}
        aria-label="GitHub"
      >
        <Github size={size} />
      </a>
      <a
        href="https://www.linkedin.com/in/puneethkumar-g-73a1b7228/"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform hover:scale-110 ${className}`}
        aria-label="LinkedIn"
      >
        <Linkedin size={size} />
      </a>
      <a
        href="https://leetcode.com/u/Puneethkumar18/"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform hover:scale-110 ${className}`}
        aria-label="LeetCode"
      >
        <BookOpen size={size} />
      </a>
      <a
        href="https://example.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-transform hover:scale-110 ${className}`}
        aria-label="Personal Blog"
      >
        <Globe size={size} />
      </a>
    </div>
  );
};

export default SocialLinks;