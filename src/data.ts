import { Project, CtfAchievement, ExperienceItem, EducationItem } from './types';

export const PROJECTS_DATA: Project[] = [

  {
    id: 'subdo-brute',
    name: 'SubDo-Brute',
    category: 'Information Gathering',
    description: 'A multi-threaded subdomain brute-forcing tool utilizing concurrent DNS resolution and wildcard detection.',
    longDescription: 'SubDo-Brute is a high-performance active reconnaissance tool. Built to resolve millions of DNS queries concurrently, it filters out false positives caused by wildcard DNS hosting and extracts valid subdomains from massive dictionaries. It seamlessly integrates with passive search APIs and resolves records across multiple recursive resolvers.',
    languages: ['Go'],
    tools: ['DNS Protocol', 'Cobra', 'Go-routines'],
    githubUrl: 'https://github.com/darkduchiha/subdo-brute',
    demoUrl: '/demo-subdo-brute.html'
  }
];

export const CTF_ACHIEVEMENTS_DATA: CtfAchievement[] = [
  {
    platform: 'TryHackMe',
    title: 'Top 2% Globally',
    stat: 'Rank: ~15,200',
    description: 'Advanced offensive security rooms and red teaming labs completed with consistent top-tier placement.',
    iconType: 'trophy'
  },
  {
    platform: 'PicoCTF',
    title: '81+ Challenges Solver',
    stat: 'Score: 12,450',
    description: 'Focusing on Binary Exploitation and Cryptography fundamentals in high-pressure competition environments.',
    iconType: 'shield'
  }
];

export const EXPERIENCE_DATA: ExperienceItem[] = [
  {
    role: 'Vulnerability Researcher & Bug Hunter',
    organization: 'HackerOne / Bugcrowd (Independent)',
    period: '2023 - Present',
    description: 'Focus on Web application penetration testing, API vulnerability discovery, and cloud security misconfigurations.',
    bullets: [
      'Discovered and responsibly disclosed IDOR and JWT authentication bypasses in public financial APIs.',
      'Identified subdomain takeover possibilities on major enterprise cloud resources by auditing stale DNS pointers.',
      'Reported multiple High-severity vulnerabilities, receiving accolades on private security programs.'
    ],
    techStack: ['Burp Suite', 'Nmap', 'API Security', 'Python', 'DNS Recon']
  },
  {
    role: 'Active CTF Competitor & Security Lead',
    organization: 'University Cyber Security Club',
    period: '2022 - Present',
    description: 'Lead offensive training sessions, CTF preparation workshops, and participate in international hacking events.',
    bullets: [
      'Competed in PicoCTF, TryHackMe Advent of Cyber, and regional CTF contests, specializing in web and cryptography.',
      'Developed 10+ custom CTF challenges in binary exploitation and web vulnerability categories for university tournaments.',
      'Mentored 30+ students in beginning web application testing methodologies and Linux command line mastery.'
    ],
    techStack: ['Linux', 'Bash', 'GDB', 'Ghidra', 'Docker', 'Wireshark']
  }
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: 'B.Sc. (Hons) in Cybersecurity & Computer Networks',
    institution: 'University of Westminster (Sri Lanka)',
    period: '2023 - 2026 (Expected)',
    details: 'Focusing on Network Protocols, Secure Coding, Cryptographic foundations, Penetration Testing, and Digital Forensics. Academic focus on automated API assessment tools.'
  }
];
