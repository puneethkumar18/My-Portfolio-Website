export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  category: 'web' | 'mobile' | 'design';
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Platform',
    description: 'A full-featured e-commerce solution with product management, cart functionality, and secure checkout.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'A productivity application to manage projects, tasks, and deadlines with team collaboration features.',
    image: 'https://images.pexels.com/photos/6956183/pexels-photo-6956183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React Native', 'Firebase', 'Redux'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'mobile',
  },
  {
    id: 3,
    title: 'Finance Dashboard',
    description: 'Interactive dashboard displaying financial metrics with data visualization and reporting capabilities.',
    image: 'https://images.pexels.com/photos/186461/pexels-photo-186461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Vue.js', 'D3.js', 'Express', 'PostgreSQL'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
  },
  {
    id: 4,
    title: 'Fitness Tracking App',
    description: 'Mobile app for tracking workouts, nutrition, and health metrics with personalized recommendations.',
    image: 'https://images.pexels.com/photos/1092878/pexels-photo-1092878.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Flutter', 'Firebase', 'HealthKit'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'mobile',
  },
  {
    id: 5,
    title: 'Corporate Website Redesign',
    description: 'Complete redesign of a corporate website focusing on improved UX, accessibility, and conversion rate.',
    image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['Figma', 'Sketch', 'Adobe XD'],
    liveUrl: 'https://example.com',
    category: 'design',
  },
  {
    id: 6,
    title: 'Weather Forecast App',
    description: 'Real-time weather application providing accurate forecasts, alerts, and historical weather data.',
    image: 'https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    technologies: ['React', 'OpenWeather API', 'Chart.js'],
    githubUrl: 'https://github.com',
    liveUrl: 'https://example.com',
    category: 'web',
  },
];

export interface Education {
  degree: string;
  institution: string;
  location?: string;
  years: string;
  description: string;
}

export const education: Education[] = [
  {
    degree: 'Bachelor of Engineering in Computer Science',
    institution: 'JSS Scinece and Technology, MYSURU(SJCE)',
    location: 'Mysore ,Karnataka',
    years: '2022 - 2025',
    description: 'Specialized in Artificial Intelligence and Human-Computer Interaction. Graduated with honors.',
  },
  {
    degree: 'Diploma In Mechanical Engineering',
    institution: 'Govt. CPC Polytechnic, Mysuru',
    location: 'Mysuru',
    years: '2018 - 2021',
    description: 'Completed a Diploma in Mechanical Engineering with hands-on training in design, manufacturing, and core mechanical concepts.',
  },
  
];

export interface Certification {
  name: string;
  organization: string;
  year: string;
  url?: string;
}

export const certifications: Certification[] = [
  {
    name: 'AWS Certified Solutions Architect',
    organization: 'Amazon Web Services',
    year: '2022',
    url: 'https://example.com/cert1',
  },
  {
    name: 'Professional Frontend Developer',
    organization: 'Meta',
    year: '2021',
    url: 'https://example.com/cert2',
  },
  {
    name: 'Google UX Design Professional Certificate',
    organization: 'Google',
    year: '2020',
    url: 'https://example.com/cert3',
  },
  {
    name: 'Machine Learning Specialization',
    organization: 'Stanford Online',
    year: '2019',
    url: 'https://example.com/cert4',
  },
];

export interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
}

export const experience: Experience[] = [
  // {
  //   title: 'Senior Frontend Developer',
  //   company: 'Tech Innovations Inc.',
  //   location: 'San Francisco, CA',
  //   period: '2020 - Present',
  //   responsibilities: [
  //     'Lead a team of 5 developers building enterprise-level React applications',
  //     'Architect and implement scalable frontend solutions using modern JavaScript frameworks',
  //     'Collaborate with UX/UI designers to create engaging user experiences',
  //     'Establish coding standards, best practices, and performance optimization techniques',
  //   ],
  //   achievements: [
  //     'Reduced application load time by 45% through code optimization and lazy loading',
  //     'Implemented CI/CD pipeline reducing deployment time from hours to minutes',
  //     'Led the migration from legacy codebase to a modern React architecture',
  //   ],
  // },
  // {
  //   title: 'Frontend Developer',
  //   company: 'Digital Solutions LLC',
  //   location: 'San Jose, CA',
  //   period: '2018 - 2020',
  //   responsibilities: [
  //     'Developed responsive web applications using React, Redux, and TypeScript',
  //     'Created reusable component libraries to ensure consistent design across products',
  //     'Implemented unit and integration tests using Jest and React Testing Library',
  //     'Collaborated with backend developers to design and consume RESTful APIs',
  //   ],
  //   achievements: [
  //     'Received Employee of the Year award in 2019',
  //     'Developed an internal tool that increased team productivity by 30%',
  //   ],
  // },
  // {
  //   title: 'Web Developer Intern',
  //   company: 'StartUp Ventures',
  //   location: 'Palo Alto, CA',
  //   period: '2017 - 2018',
  //   responsibilities: [
  //     'Built and maintained company websites using HTML, CSS, and JavaScript',
  //     'Assisted senior developers with frontend feature implementation',
  //     'Participated in code reviews and agile development processes',
  //     'Created wireframes and prototypes for new product features',
  //   ],
  // },
];