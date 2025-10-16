import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  HeartIcon,
  LanguageIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import acubedLogo from '../images/Acubed.png';
import alEssaLogo from '../images/AlEssa.png';
import colonyLogo from '../images/Colony.png';
import heroImage from '../images/hero-background.jpg';
import diseasepredImage from '../images/portfolio/diseasepred.jpg';
import foundersincImage from '../images/portfolio/foundersinc.png';
import malakImage from '../images/portfolio/malak.png';
import porfolioImage2 from '../images/portfolio/traffic.png';
import porfolioImage1 from '../images/portfolio/wayfinder.png';
import xtillionosImage from '../images/portfolio/xtillionos.png';
import profilepic from '../images/profilepic.jpg';
import berkeleyLogo from '../images/Seal_of_University_of_California,_Berkeley.svg';
import xtillionLogo from '../images/Xtillion-new.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Elijah Jacob - Resume',
  description: "Elijah Jacob's personal resume website - Software Engineer & Data Scientist",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `Hi! I'm Elijah Jacob`,
  description: (
    <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
      I'm an <strong className="text-stone-100">AI-native Software Engineer</strong> at{' '}
      <strong className="text-stone-100">Xtillion</strong> in San Juan, Puerto Rico, specializing in transforming large
      datasets into production-ready systems that solve real-world problems. With a UC Berkeley background in Economics
      and Data Science, I bridge the gap between complex data analysis and scalable software solutions, having built
      everything from computer vision systems to aviation navigation platforms.
    </p>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a software engineer with a background in economics and data science from UC Berkeley. 
  I have experience in building scalable software solutions, data engineering pipelines, and full-stack applications.
  I'm passionate about using technology to create impactful solutions and continuously learning new technologies.`,
  aboutItems: [
    {label: 'Location', text: 'San Juan, Puerto Rico', Icon: MapIcon},
    {label: 'Study', text: 'UC Berkeley', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Xtillion', Icon: BuildingOffice2Icon},
    {label: 'Languages', text: 'English, Malayalam, Spanish, Arabic', Icon: LanguageIcon},
    {label: 'Passions', text: 'People, Aviation, Travel', Icon: HeartIcon},
    {label: 'Interests', text: 'AI/ML, Data Engineering, Software Development', Icon: SparklesIcon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Programming Languages',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'SQL',
        level: 7.5,
      },
      {
        name: 'Java',
        level: 6,
      },
    ],
  },
  {
    name: 'AI/ML Frameworks',
    skills: [
      {
        name: 'LangSmith/LangChain',
        level: 8,
      },
      {
        name: 'TensorFlow/PyTorch',
        level: 7,
      },
      {
        name: 'Model Performance Evaluation',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Science Libraries',
    skills: [
      {
        name: 'Pandas/NumPy',
        level: 8.5,
      },
      {
        name: 'Scikit-learn',
        level: 8,
      },
      {
        name: 'OpenCV',
        level: 7,
      },
    ],
  },
  {
    name: 'Domain Expertise',
    skills: [
      {
        name: 'Aviation Technology',
        level: 8,
      },
      {
        name: 'Economics & Finance',
        level: 8,
      },
      {
        name: 'Statistical Analysis',
        level: 8,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  // 2025 Projects (Most Recent)
  {
    title: 'License Plate Reader (LPR)',
    description:
      'Advanced computer vision system for automatic license plate detection and recognition using Roboflow, YOLO, and PaddleOCR. Features real-time video processing, vehicle tracking with SORT algorithm, and comprehensive performance analytics with Supabase integration.',
    url: 'https://github.com/elijahgjacob/lpr',
    image: porfolioImage2,
    company: 'Personal',
    category: 'personal',
    technologies: ['Python', 'OpenCV', 'YOLO', 'PaddleOCR', 'Roboflow', 'Supabase', 'SORT'],
    year: '2025',
  },
  {
    title: 'AI Chatbot System',
    description:
      'Intelligent chatbot application with natural language processing capabilities. Built with modern AI frameworks, featuring conversation management, context awareness, and seamless integration with various messaging platforms.',
    url: 'https://github.com/elijahgjacob/chatbot',
    image: malakImage,
    company: 'Personal',
    category: 'personal',
    technologies: ['Python', 'LangChain', 'OpenAI', 'FastAPI', 'React', 'Docker'],
    year: '2025',
  },
  {
    title: 'AI-Powered Data Analytics Platform',
    description:
      'Built a comprehensive data analytics platform at Xtillion using Python, FastAPI, and React. Implemented real-time data processing, machine learning pipelines, and interactive dashboards for business intelligence.',
    url: 'https://github.com/elijahgjacob/xtillion-analytics',
    image: xtillionosImage,
    company: 'Xtillion',
    category: 'work',
    technologies: ['LangChain', 'MCP Architecture', 'LLMs'],
    year: '2025',
  },

  // 2024 Projects
  {
    title: 'Disease Prediction Model',
    description:
      'Machine learning system for medical disease prediction using patient data and symptoms. Implements advanced ML algorithms with high accuracy rates, featuring data preprocessing, model training, and prediction APIs for healthcare applications.',
    url: 'https://github.com/elijahgjacob/disease-prediction',
    image: diseasepredImage,
    company: 'Personal',
    category: 'personal',
    technologies: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Flask', 'SQLite'],
    year: '2024',
  },
  {
    title: 'Colony Inc. Technical Infrastructure',
    description:
      'Co-founded and developed the complete technical infrastructure for Colony Inc. Built the backend API, database design, and frontend application from scratch. Implemented user authentication, payment processing, and core business logic.',
    url: '/assets/colony-pitch-deck.pdf',
    image: foundersincImage,
    company: 'Colony Inc.',
    category: 'work',
    technologies: [],
    year: '2024',
  },

  // 2023 Projects
  {
    title: 'Wayfinder - Aviation Navigation',
    description:
      'Innovative aviation navigation system developed at Acubed by Airbus. Advanced flight path optimization and navigation assistance for pilots, featuring real-time data processing and intuitive user interfaces for enhanced flight safety.',
    url: 'https://acubed.airbus.com/projects/wayfinder/',
    image: porfolioImage1,
    company: 'Acubed by Airbus',
    category: 'work',
    technologies: ['Python', 'Pandas', 'Linux', 'Real-time Systems'],
    year: '2023',
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2024',
    location: 'University of California, Berkeley',
    title: 'B.A. in Economics, Data Science',
    content: (
      <p>
        Studied economics, data science, and computer science with a focus on machine learning, statistical analysis,
        and quantitative methods. Developed strong analytical and problem-solving skills through rigorous coursework and
        research projects - Most importantly, learned how to learn.
      </p>
    ),
    logo: berkeleyLogo,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2025 - Present',
    location: 'Xtillion',
    title: 'Software Engineer',
    content: (
      <p>
        Currently working as a Software Engineer at Xtillion in San Juan, Puerto Rico. Building scalable software
        solutions and contributing to innovative projects in a dynamic startup environment.
      </p>
    ),
    logo: xtillionLogo,
    locationUrl: 'https://xtillion.com',
  },
  {
    date: 'May 2024 - August 2024',
    location: 'Colony Inc.',
    title: 'Cofounder',
    content: (
      <p>
        Co-founded Colony Inc. in San Francisco, CA. Led product development and technical strategy for a startup
        focused on innovative solutions. Managed full product lifecycle from concept to deployment.
      </p>
    ),
    logo: colonyLogo,
    locationUrl: '/assets/colony-pitch-deck.pdf',
  },
  {
    date: 'May 2023 - August 2023',
    location: 'Acubed by Airbus',
    title: 'Data Engineering Intern',
    content: (
      <p>
        Worked on data engineering projects at Acubed by Airbus in Sunnyvale, CA. Developed and optimized data
        pipelines, worked with large-scale datasets, and contributed to aviation technology innovation projects. Learned
        I could build a career out of my passion at the intersection of aviation and AI.
      </p>
    ),
    logo: acubedLogo,
    locationUrl: 'https://acubed.airbus.com',
  },
  {
    date: 'May 2020 - August 2022',
    location: 'Al-Essa Med.',
    title: 'Data Analyst Intern',
    content: (
      <p>
        Contributed to healthcare technology projects at Al-Essa Medical in Kuwait City, Kuwait. Gained experience in
        medical technology and international work environments. Self-learned the fundamentals of data science before
        entering college.
      </p>
    ),
    logo: alEssaLogo,
    locationUrl: 'https://alessaonline.com',
  },
];

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for opportunities, collaborations, or just to connect!',
  items: [
    {
      type: ContactType.Email,
      text: 'elijahgjacob(at)berkeley.edu',
    },
    {
      type: ContactType.Location,
      text: 'San Juan, Puerto Rico',
      href: 'https://www.google.com/maps/place/San+Juan,+Puerto+Rico',
    },
    {
      type: ContactType.Github,
      text: 'elijahgjacob',
      href: 'https://github.com/elijahgjacob',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/elijahgjacob'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/elijahjacob/'},
];
