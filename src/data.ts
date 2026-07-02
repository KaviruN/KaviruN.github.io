import { Project, CtfAchievement, ExperienceItem, EducationItem } from './types';

export const PROJECTS_DATA: Project[] = [

  {
    id: 'PixelGuard',
    name: 'Pixel Guard',
    category: 'FUll Stack Cryptography Project',
    description: 'Advanced pixel-level encryption and LSB steganography combined Encrypt entire images or hide secret messages invisibly inside them.',
    longDescription: 'Pixel Guard is a dual purpose security tool used for image encryption and decryption. It uses NumPy for high-speed mathematical pixel transformations and Flask for seamless web interface.',
    languages: ['python','javascript', 'css', 'html'],
    tools: ['Flask', 'numpy', 'PIL'],
    githubUrl: 'https://github.com/KaviruN/PixelGuard',
    imgSrc: 'https://raw.githubusercontent.com/KaviruN/PixelGuard/main/resources/image%26stegano.png'
  },

  {
    id: 'MindEase',
    name: 'Mind Ease',
    category: 'FUll Stack AI Project',
    description: 'Advanced pixel-level encryption and LSB steganography combined Encrypt entire images or hide secret messages invisibly inside them.',
    longDescription: 'This is a Django-based web application designed to provide mental health support through an AI-powered chat assistant. The application allows users to interact with the AI, save chat history, and retrieve past conversations.',
    languages: ['Python','javascript', 'css'],
    tools: ['React', 'Threejs'],
    githubUrl: 'https://github.com/KaviruN/MindEase',
    imgSrc: '/MIndEase.png'
  },

  {
    id: 'TurboStryke',
    name: 'TurboStryke',
    category: 'Front End Project',
    description: 'TurboStryke is a car-themed web app Built for a university assignment.',
    longDescription: 'The TurboStryke project is a car-themed web application built using React and JavaScript, with a touch of 3D graphics powered by Three.js. Inspired by a dark, edgy theme influenced by the Akatsuki organization from Naruto, it combines speed and style into a unique user experience. ',
    languages: ['javascript', 'css'],
    tools: ['React', 'Threejs'],
    githubUrl: 'https://github.com/KaviruN/TurboStryke',
    demoUrl: 'https://turbo-stryke-kavirus-projects-4aa1a92e.vercel.app/',
  },
  {
    id: 'nexcent',
    name: 'Nexcent',
    category: 'Front End Project',
    description: 'A front-end web application built using React and TypeScript, inspired by a Figma template.',
    longDescription: 'The Nexcent project is a front-end application built using React and TypeScript, inspired by a free Figma template. It aims to transform design concepts into a functional and user-friendly interface prioritizing accessibility, responsiveness, and user-centric design.',
    languages: ['html', 'css'],
    tools: ['React', 'Figma', 'Practice flex'],
    githubUrl: 'https://github.com/KaviruN/nexcent',
    demoUrl: 'https://kavirun.github.io/nexcent/'
  },
  {
    id: 'Jake-Elwood',
    name: 'Jake and Elwood',
    category: 'Frontend Focus',
    description: 'A curated set of learning experiments where I practiced layout systems, responsive design, and UI composition.',
    longDescription: 'A curated set of learning experiments focused on mastering modern CSS layout systems (Flexbox and Grid), responsive design patterns, media queries, and semantic UI composition.',
    languages: ['html', 'css'],
    tools: ['Flexbox', 'CSS Grid', 'Responsive Design'],
    githubUrl: 'https://github.com/KaviruN/Jake-Elwood',
    demoUrl: 'https://kavirun.github.io/Jake-Elwood/'
  },
  {
    id: 'scroll-animations',
    name: 'Scroll Animations',
    category: 'Frontend Focus',
    description: 'A motion-first interface prototype exploring smooth transitions and scroll-triggered effects inspired by huly.io.',
    longDescription: 'A motion-first interface prototype exploring smooth transitions, interactive animations, and scroll-triggered effects utilizing modern GSAP and ScrollTrigger libraries, inspired by the high-quality interactions on huly.io.',
    languages: ['javascript', 'css'],
    tools: ['GSAP', 'ScrollTrigger', 'Motion Design'],
    githubUrl: 'https://github.com/KaviruN/scroll-animations',
    demoUrl: 'https://kavirun.github.io/scroll-animations/'
  },
  {
    id: 'living-the-simple-life',
    name: 'Living the Simple Life',
    category: 'Frontend Focus',
    description: 'An early project focused on structure, content flow, and practical version control workflow as part of my growth process.',
    longDescription: 'An early frontend project built to establish a strong foundation in HTML structure, content flow, CSS typography, and a practical Git/GitHub version control workflow as part of my development growth process.',
    languages: ['html', 'css'],
    tools: ['HTML5', 'CSS3', 'Flex Practise'],
    githubUrl: 'https://github.com/KaviruN/living-the-simple-life',
    demoUrl: 'https://kavirun.github.io/living-the-simple-life/'
  },
  {
    id: 'qr-maker',
    name: 'QR Maker',
    category: 'Frontend Focus',
    description: 'A fun utility project for generating QR codes with attention to usability and approachable interface design.',
    longDescription: 'A user-friendly, approachable frontend utility project designed to generate customizable QR codes dynamically using Javascript, featuring a clean user interface and simple layout design.',
    languages: ['javascript', 'css'],
    tools: ['QR API', 'Vanilla JS', 'UI UX Design'],
    githubUrl: 'https://github.com/KaviruN/qrcode',
    demoUrl: 'https://kavirun.github.io/qrcode/'
  },
  {
    id: 'todo-app',
    name: 'Todo App',
    category: 'Full Stack',
    description: 'A full-stack todo application using Django REST APIs and React TypeScript frontend with authentication and realtime update workflows.',
    longDescription: 'A robust full-stack todo application that features a backend built with Django REST framework and SQLite, connected to a modern React TypeScript frontend. It implements secure user authentication and dynamic real-time task update workflows.',
    languages: ['python', 'typescript'],
    tools: ['React', 'Django REST', 'SQLite', 'JWT Auth'],
    githubUrl: 'https://github.com/KaviruN/toDoApp',
    demoUrl: 'https://to-do-app-chi-jade-42.vercel.app/'
  },
  {
    id: 'wifi-pass-tool',
    name: 'WiFi Pass Tool',
    category: 'Python',
    description: 'A legacy project from my early learning stage that demonstrates practical scripting and system-level experimentation.',
    longDescription: 'A legacy script created during the early stages of my learning journey. It demonstrates practical Python scripting, utilizing native system modules and subprocess commands to query local Wi-Fi profiles and passwords.',
    languages: ['python'],
    tools: ['Subprocess', 'OS Module', 'Command Line'],
    githubUrl: 'https://github.com/EthicalHackingLK/WIFI-Hack',
    imgSrc: 'https://github.com/KaviruN/wifi-pass-tool'
  }
];


export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'CTF Competitor',
    organization: 'Inter-University Cyber Security Competitions',
    period: '2025 - Present',
    description: 'Actively compete in inter-university Capture The Flag competitions, focusing on web exploitation and cryptography challenges.',
    bullets: [
      'Achieved Top 15 placement in first inter-university CTF competition.',
      'Awarded Best Performing certificate in second inter-university CTF.',
      'Specializing in web exploitation and cryptography challenge categories.',
    ],
    techStack: ['Linux', 'Bash', 'Wireshark', 'Burp Suite']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'Bachelor of Information Technology (Major in Cyber Security)',
    institution: 'Victoria University, Australia — NSBM Green University, Sri Lanka',
    period: '2024 - 2027 (Expected)',
    details: 'Coursework in Digital Forensics, Ethical Hacking, Vulnerability Analysis, Security Operations, Enterprise Network Management, and Data Analytics for Cyber Security.'
  }
];
