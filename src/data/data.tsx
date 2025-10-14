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
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
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
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm an <strong className="text-stone-100">AI-native Software Engineer</strong> currently working at{' '}
        <strong className="text-stone-100">Xtillion</strong> in San Juan, Puerto Rico. I graduated from UC Berkeley with
        a degree in Economics and Data Science.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I combine <strong className="text-stone-100">solid engineering fundamentals</strong> with
        <strong className="text-stone-100"> extremely high proficiency in AI tools</strong>, building scalable
        applications and leveraging cutting-edge AI to solve complex problems.
      </p>
    </>
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
    name: 'AI/ML & Data Science',
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
      {
        name: 'Model Performance Evaluation',
        level: 8,
      },
    ],
  },
  {
    name: 'Cloud & DevOps',
    skills: [
      {
        name: 'AWS (EC2, S3, Lambda)',
        level: 7.5,
      },
      {
        name: 'Docker',
        level: 7.5,
      },
      {
        name: 'Git/GitHub',
        level: 9,
      },
      {
        name: 'CI/CD',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [
      {
        name: 'Jupyter Notebooks',
        level: 9,
      },
      {
        name: 'VS Code/Cursor',
        level: 9,
      },
      {
        name: 'Linux/Unix',
        level: 8,
      },
    ],
  },
  {
    name: 'Soft Skills',
    skills: [
      {
        name: 'Problem-Solving',
        level: 9,
      },
      {
        name: 'Project Management',
        level: 9,
      },
      {
        name: 'Communication',
        level: 9,
      },
    ],
  },
  {
    name: 'Domain Knowledge',
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
  {
    title: 'Automatic License Plate Reader (ALPR)',
    description:
      'A Python-based computer vision project for automatic license plate detection and recognition using machine learning and image processing techniques.',
    url: 'https://github.com',
    image: porfolioImage1,
  },
  {
    title: 'Data Pipeline Projects',
    description:
      'Built scalable data engineering pipelines for processing and analyzing large-scale datasets at Acubed by Airbus.',
    url: 'https://github.com',
    image: porfolioImage2,
  },
  {
    title: 'Colony Inc. Pitch Deck',
    description:
      'Co-founded and developed the technical infrastructure for Colony Inc., focusing on innovative solutions and product development.',
    url: 'https://github.com',
    image: porfolioImage3,
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
