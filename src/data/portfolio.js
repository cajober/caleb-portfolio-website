import {
  SiHtml5,
  SiJavascript,
  SiVuedotjs,
  SiNuxt,
  SiNextdotjs,
  SiTailwindcss,
  SiPython,
  SiDjango,
  SiC,
  SiCplusplus,
  SiDocker,
  SiLinux,
  SiGit,
  SiCypress,
  SiSelenium,
} from 'react-icons/si'

import { FaAws, FaCss3Alt, FaReact } from 'react-icons/fa'

export const skills = [
  {
    category: 'Frontend',
    items: [
      { name: 'HTML5', Icon: SiHtml5 },
      { name: 'CSS3', Icon: FaCss3Alt },
      { name: 'JavaScript', Icon: SiJavascript },
      { name: 'React', Icon: FaReact },
      { name: 'Vue.js', Icon: SiVuedotjs },
      { name: 'Nuxt.js', Icon: SiNuxt },
      { name: 'Next.js', Icon: SiNextdotjs },
      { name: 'Tailwind CSS', Icon: SiTailwindcss },
    ],
  },
  {
    category: 'Backend & Languages',
    items: [
      { name: 'Python', Icon: SiPython },
      { name: 'Django', Icon: SiDjango },
      { name: 'C', Icon: SiC },
      { name: 'C++', Icon: SiCplusplus },
    ],
  },
  {
    category: 'Cloud & DevOps',
    items: [
      { name: 'AWS', Icon: FaAws },
      { name: 'Docker', Icon: SiDocker },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Git', Icon: SiGit },
    ],
  },
  {
    category: 'Testing',
    items: [
      { name: 'Cypress', Icon: SiCypress },
      { name: 'Selenium', Icon: SiSelenium },
    ],
  },
]

export const profile = {
  name: 'Caleb Josh Berandoy',
  tagline:
    'Full-stack developer and designer building web apps that are fast, clear, and a pleasure to use.',
  aboutParagraphs: [
  "I'm a Computer Science graduate from the University of the Philippines Cebu, based in Cebu City. I love designing as much as I love coding, and I enjoy building web apps end to end: the interface people use, the API behind it, and the infrastructure it runs on.",
  "Along the way, I've built full-stack projects with Vue, Next.js, and Django in a team, tested web apps with Cypress and Selenium as a software engineer intern at Pixel8, and most recently worked with AWS, Docker, and Linux as a site reliability engineer intern at OpsWerks.",
  "Beyond software, I spent two years as the technical head of our campus radio station, where I honed my speaking abilities and managed the technical operations that kept the station on air. It taught me how to keep systems running reliably, which carries over directly to the work I do today.",
  ],
  resume: '/BERANDOY_CALEB-RESUME.pdf',
  heroImage: '/assets/caleb-profile.svg',
  aboutImage: '/assets/aboutme.svg',
  email: 'calebjosh.berandoy@gmail.com',
  github: 'https://github.com/cajober',
  linkedin: 'https://www.linkedin.com/in/caleb-josh-berandoy-544370237',
}

export const navLinks = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const experience = [
  {
    period: 'Jul 2026 – Sep 2026',
    role: 'Site Reliability Engineer Intern',
    org: 'OpsWerks',
    points: [
      'Provisioned and secured AWS infrastructure (EC2, RDS, IAM, VPC) via CLI and CloudShell, including troubleshooting broken environments and configuring inbound rules for database access.',
      'Built and debugged multi-container Docker environments with Dockerfiles and docker-compose.',
      'Practiced Linux administration (permissions/ACLs, firewall configuration, LVM) by resolving access and environment issues in lab scenarios.',
      'Kept clean Git workflows (rebasing, cherry-picking, PR-based fixes) across a multi-branch team project.',
    ],
    tags: ['AWS', 'Docker', 'Linux', 'Git'],
  },
  {
    period: 'Jul 2025 – Aug 2025',
    role: 'Software Engineer Intern',
    org: 'Pixel8 Web Solutions & Consultancy Inc.',
    points: [
      'Wrote automated test scripts with Cypress and Selenium, improving test coverage and reducing manual testing effort for a web application.',
      'Worked with developers and project managers to report findings and support the software development lifecycle.',
      'Built and deployed a responsive WordPress page with Elementor for an active client project, following the company’s design standards.',
    ],
    tags: ['Cypress', 'Selenium', 'WordPress', 'Elementor'],
  },
]

export const projects = [
  {
    title: 'UPLoad',
    description: 'Accomplishment report platform for UP Cebu faculty members.',
    image: '/assets/upload ss.png',
    stack: ['Vue', 'Django'],
    demo: '',
    repo: '',
  },
  {
    title: "Layman's Law",
    description:
      'A platform where Filipinos can seek legal advice and assistance from lawyers.',
    image: '/assets/ll ss.png',
    stack: ['Next.js', 'Django'],
    demo: '',
    repo: '',
  },
]

export const education = [
  {
    period: '2016 - 2022',
    school: 'Science and Technology Education Center',
  },
  {
    period: '2022 - 2026',
    school: 'University of the Philippines Cebu',
    detail: 'Bachelor of Science in Computer Science',
  },
]