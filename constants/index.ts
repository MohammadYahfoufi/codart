import { FaYoutube, FaFacebook } from 'react-icons/fa';
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from 'react-icons/rx';

export const SKILL_DATA = [
  {
    skill_name: 'HTML',
    image: 'html.png',
    width: 100,
    height: 100,
  },
  {
    skill_name: 'CSS',
    image: 'css.png',
    width: 120,
    height: 120,
  },
  {
    skill_name: 'JavaScript',
    image: 'js.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'TypeScript',
    image: 'ts.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'React',
    image: 'react.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Next.js',
    image: 'next.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Tailwind CSS',
    image: 'tailwind.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Material UI',
    image: 'mui.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Redux',
    image: 'redux.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Framer Motion',
    image: 'framer.png',
    width: 80,
    height: 80,
  },
] as const;

export const SOCIALS = [
  {
    name: 'Instagram',
    icon: RxInstagramLogo,
    link: 'https://instagram.com',
  },
  {
    name: 'Facebook',
    icon: FaFacebook,
    link: 'https://facebook.com',
  },
  {
    name: 'Twitter',
    icon: RxTwitterLogo,
    link: 'https://twitter.com',
  },
] as const;

export const FRONTEND_SKILL = [
  {
    skill_name: 'Node.js',
    image: 'node.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Express.js',
    image: 'express.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'MongoDB',
    image: 'mongodb.png',
    width: 60,
    height: 60,
  },
  {
    skill_name: 'Firebase',
    image: 'firebase.png',
    width: 60,
    height: 60,
  },
  {
    skill_name: 'PostgreSQL',
    image: 'postgresql.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'MySQL',
    image: 'mysql.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Prisma',
    image: 'prisma.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Stripe',
    image: 'stripe.png',
    width: 80,
    height: 80,
  },
] as const;

export const BACKEND_SKILL = [
  {
    skill_name: 'Docker',
    image: 'docker.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Git',
    image: 'git.png',
    width: 120,
    height: 120,
  },
  {
    skill_name: 'Android',
    image: 'android.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Flutter',
    image: 'flutter.png',
    width: 60,
    height: 60,
  },
  {
    skill_name: 'Java',
    image: 'java.png',
    width: 100,
    height: 100,
  },
  {
    skill_name: 'Kotlin',
    image: 'kotlin.png',
    width: 80,
    height: 80,
  },
] as const;

export const FULLSTACK_SKILL = [
  {
    skill_name: 'NestJS',
    image: 'nestjs.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'npm',
    image: 'npm.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'Figma',
    image: 'figma.png',
    width: 50,
    height: 50,
  },
  {
    skill_name: 'Zustand',
    image: 'zustland.png',
    width: 80,
    height: 80,
  },
] as const;

export const OTHER_SKILL = [
  {
    skill_name: 'Dart',
    image: 'dart.png',
    width: 80,
    height: 80,
  },
  {
    skill_name: 'PHP',
    image: 'php.png',
    width: 80,
    height: 80,
  },
] as const;

export const PROJECTS = [
  {
    title: 'GraphicSpot — Printing Services Website',
    description:
      'A modern and responsive website built for a creative agency, GraphicSpot showcases services, products, and brand identity with a clean interface and smooth animations. It reflects strong UI/UX design principles while enabling future e-commerce expansion. The website features a professional dark theme with compelling hero sections, product showcases, and seamless user experience.',
    image: '/projects/project-1.png',
    link: 'https://graphicspotci.com/',
  },
  {
    title: 'ShopCodart — Tech Shop Ecommerce',
    description:
      'A modern and fully-featured ecommerce platform for a tech shop, built with cutting-edge web technologies. ShopCodart offers a seamless shopping experience with intuitive navigation, secure checkout, product management, and responsive design. The platform features advanced search functionality, shopping cart, user authentication, and admin dashboard for managing products and orders.',
    image: '/projects/project-2.png',
    link: 'https://shopcodart.vercel.app',
  },
  {
    title: 'Interactive Cards Portfolio',
    description:
      'Step into the extraordinary world of my professional journey through the "Interactive Cards Portfolio" - an innovative and visually captivating platform that redefines the traditional portfolio experience. Ditching the conventional static layout, this portfolio leverages interactive cards to showcase my skills, projects, and personality in an engaging and dynamic manner.',
    image: '/projects/project-3.png',
    link: 'https://example.com',
  },
] as const;

export const FOOTER_DATA = [
  {
    title: 'Community',
    data: [
      {
        name: 'YouTube',
        icon: FaYoutube,
        link: 'https://youtube.com',
      },
      {
        name: 'GitHub',
        icon: RxGithubLogo,
        link: 'https://github.com',
      },
      {
        name: 'Discord',
        icon: RxDiscordLogo,
        link: 'https://discord.com',
      },
    ],
  },
  {
    title: 'Social Media',
    data: [
      {
        name: 'Instagram',
        icon: RxInstagramLogo,
        link: 'https://instagram.com',
      },
      {
        name: 'Twitter',
        icon: RxTwitterLogo,
        link: 'https://twitter.com',
      },
      {
        name: 'Linkedin',
        icon: RxLinkedinLogo,
        link: 'https://linkedin.com',
      },
    ],
  },
  {
    title: 'About',
    data: [
      {
        name: 'Become Sponsor',
        icon: null,
        link: 'https://youtube.com',
      },
      {
        name: 'Learning about me',
        icon: null,
        link: 'https://example.com',
      },
      {
        name: 'Contact Me',
        icon: null,
        link: 'mailto:contact@example.com',
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: 'About me',
    link: '#about-me',
  },
  {
    title: 'Skills',
    link: '#skills',
  },
  {
    title: 'Services',
    link: '#services',
  },
  {
    title: 'Projects',
    link: '#projects',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
] as const;
