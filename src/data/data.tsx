import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
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
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Elijah Jacob.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a <strong className="text-stone-100">Software Engineer</strong> currently working
        at <strong className="text-stone-100">Xtillion</strong> in San Juan, Puerto Rico.
        I graduated from UC Berkeley with a degree in Economics and Data Science.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I specialize in building scalable applications and working with data engineering pipelines.
        I'm passionate about leveraging technology to solve complex problems.
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
        name: 'JavaScript/TypeScript',
        level: 8,
      },
      {
        name: 'SQL',
        level: 8,
      },
    ],
  },
  {
    name: 'Data Science & ML',
    skills: [
      {
        name: 'Machine Learning',
        level: 8,
      },
      {
        name: 'Data Analysis',
        level: 9,
      },
      {
        name: 'Computer Vision',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend & Data Engineering',
    skills: [
      {
        name: 'Data Pipelines',
        level: 8,
      },
      {
        name: 'Database Design',
        level: 8,
      },
      {
        name: 'Cloud Services (AWS/GCP)',
        level: 7,
      },
    ],
  },
  {
    name: 'Tools & Frameworks',
    skills: [
      {
        name: 'React',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 7,
      },
      {
        name: 'Git',
        level: 9,
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
    description: 'A Python-based computer vision project for automatic license plate detection and recognition using machine learning and image processing techniques.',
    url: 'https://github.com',
    image: porfolioImage1,
  },
  {
    title: 'Data Pipeline Projects',
    description: 'Built scalable data engineering pipelines for processing and analyzing large-scale datasets at Acubed by Airbus.',
    url: 'https://github.com',
    image: porfolioImage2,
  },
  {
    title: 'Colony Inc. Platform',
    description: 'Co-founded and developed the technical infrastructure for Colony Inc., focusing on innovative solutions and product development.',
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
    title: 'Bachelor of Arts in Economics, Data Science',
    content: <p>Studied economics, data science, and computer science with a focus on machine learning, statistical analysis, and quantitative methods. Developed strong analytical and problem-solving skills through rigorous coursework and research projects.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'January 2025 - Present',
    location: 'Xtillion',
    title: 'Software Engineer',
    content: (
      <p>
        Currently working as a Software Engineer at Xtillion in San Juan, Puerto Rico. Building scalable software solutions and contributing to innovative projects in a dynamic startup environment.
      </p>
    ),
  },
  {
    date: 'May 2024 - August 2024',
    location: 'Colony Inc.',
    title: 'Cofounder',
    content: (
      <p>
        Co-founded Colony Inc. in San Francisco, CA. Led product development and technical strategy for a startup focused on innovative solutions. Managed full product lifecycle from concept to deployment.
      </p>
    ),
  },
  {
    date: 'May 2023 - August 2023',
    location: 'Acubed by Airbus',
    title: 'Data Engineering Intern',
    content: (
      <p>
        Worked on data engineering projects at Acubed by Airbus in Sunnyvale, CA. Developed and optimized data pipelines, worked with large-scale datasets, and contributed to aviation technology innovation projects.
      </p>
    ),
  },
  {
    date: 'Previous',
    location: 'Al-Essa Medical',
    title: 'Technical Role',
    content: (
      <p>
        Contributed to healthcare technology projects at Al-Essa Medical in Kuwait City, Kuwait. Gained experience in medical technology and international work environments.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to reach out to me for opportunities, collaborations, or just to connect!',
  items: [
    {
      type: ContactType.Email,
      text: 'elijahgjacob@berkeley.edu',
      href: 'mailto:elijahgjacob@berkeley.edu',
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
