import { Project, CtfAchievement, ExperienceItem, EducationItem } from './types';

export const PROJECTS_DATA: Project[] = [
  {
    id: 'aura-scanner',
    name: 'Aura-Scanner',
    category: 'Vulnerability Scanning',
    description: 'An automated vulnerability scanner for custom REST and GraphQL API gateways with smart JWT token analysis.',
    longDescription: 'Aura-Scanner is a security auditing tool designed specifically to scan API endpoints for common architectural flaws, misconfigured CORS, broken object-level authorization (BOLA/IDOR), and vulnerable JWT implementations. It automatically parses OpenAPI/Swagger specifications or raw request logs to map the attack surface and execute non-destructive exploit payloads.',
    languages: ['Python', 'TypeScript'],
    tools: ['Pytest', 'Aiohttp', 'Docker'],
    githubUrl: 'https://github.com/darkduchiha/aura-scanner',
    demoCommand: 'python3 aura_scan.py --target https://api.staging.internal/v1 --depth high',
    simulatedOutput: [
      '[*] Initializing Aura API Scanner v1.2.4',
      '[*] Target endpoint loaded: https://api.staging.internal/v1',
      '[+] Phase 1: SSL/TLS and security headers check...',
      '    [!] Missing HSTS header on target endpoint.',
      '    [!] CORS policy allows wildcard "*" domains.',
      '[+] Phase 2: Endpoint discovery & OpenAPI specification matching...',
      '    [+] Discovered 14 active routes from schema.',
      '[+] Phase 3: JSON Web Token (JWT) key confusion and signature fuzzing...',
      '    [!] VULNERABILITY FOUND: /v1/auth/refresh accepts JWTs signed with "none" algorithm.',
      '    [!] Impact: Authentication bypass via identity spoofing. (CVSS: 9.8 Critical)',
      '[+] Phase 4: Broken Object Level Authorization (IDOR/BOLA) fuzzing...',
      '    [!] IDOR FOUND: /v1/users/{id}/billing returned details of user #1004 when requested by user #1005.',
      '[+] Scan complete. 2 Critical, 1 Medium, 2 Low findings.',
      '[+] Vulnerability report written to ./reports/aura_report_v1.json'
    ]
  },
  {
    id: 'subdo-brute',
    name: 'SubDo-Brute',
    category: 'Information Gathering',
    description: 'A multi-threaded subdomain brute-forcing tool utilizing concurrent DNS resolution and wildcard detection.',
    longDescription: 'SubDo-Brute is a high-performance active reconnaissance tool. Built to resolve millions of DNS queries concurrently, it filters out false positives caused by wildcard DNS hosting and extracts valid subdomains from massive dictionaries. It seamlessly integrates with passive search APIs and resolves records across multiple recursive resolvers.',
    languages: ['Go'],
    tools: ['DNS Protocol', 'Cobra', 'Go-routines'],
    githubUrl: 'https://github.com/darkduchiha/subdo-brute',
    demoCommand: './subdo-brute -d target.com -w subdomains_100k.txt -t 500',
    simulatedOutput: [
      '__      _      _ ___       ___            _       ',
      '\\ \\ ___| |__  | | _ \\___  | _ )_ _ _  _ _| |_ ___ ',
      ' \\ \\___| \'_-< |_|  _// _ \\ | _ \\ \'_| || |  _/ -_)',
      '  \\_\\  |_|\\_\\   |_|  \\___/ |___/_|  \\_,_|\\__\\___| v2.0.1',
      '',
      '[*] Target domain: target.com',
      '[*] Wordlist: subdomains_100k.txt (104,230 entries)',
      '[*] Thread count: 500 (Concurrent DNS workers)',
      '[*] Testing for wildcard DNS resolutions...',
      '    [-] Detected wildcard resolution: *.target.com -> 192.168.1.1. Filtering enabled.',
      '[*] Commencing resolution loop...',
      '[+] resolved: mail.target.com -> [104.22.4.21]',
      '[+] resolved: dev.target.com -> [104.22.4.99] (CName: cdn.vercel.com)',
      '[+] resolved: api.target.com -> [34.120.90.10]',
      '[+] resolved: Jenkins-internal.target.com -> [10.201.24.12] (RFC 1918 Private range)',
      '[!] ALERT: Exposed administrative portal found at jenkins-internal.target.com',
      '[*] Progress: 104,230 / 104,230 dns queries resolved in 14.2 seconds.',
      '[+] Found 4 active, unique subdomains saved to resolves_target.com.txt'
    ]
  },
  {
    id: 'xss-fuzz',
    name: 'XSS-Fuzz',
    category: 'Web Exploitation',
    description: 'An advanced context-aware payloads fuzzer for Cross-Site Scripting (XSS) with headless browser verification.',
    longDescription: 'XSS-Fuzz goes beyond simple keyword matching by injecting custom-crafted strings and verifying if they execute in a real headless Chromium instance. It detects contextual escapes, filters, and sanitization mechanisms to optimize injection vectors and minimize false alarms.',
    languages: ['JavaScript', 'HTML'],
    tools: ['Puppeteer', 'Chromium', 'Payload Fuzzer'],
    githubUrl: 'https://github.com/darkduchiha/xss-fuzz',
    demoCommand: 'node xss_fuzz.js --url "https://target-portal.com/search?q=FUZZ" --cookies "session=abc"',
    simulatedOutput: [
      '[*] Starting Context-Aware XSS Fuzzer',
      '[*] Target URL: https://target-portal.com/search?q=FUZZ',
      '[*] Session state provided. Initiating headless Chromium instance...',
      '[*] Analyzing base response reflection context...',
      '    [-] Input reflected inside HTML body text context.',
      '[*] Testing basic character filter exemptions...',
      '    [-] < > " \' / are NOT filtered.',
      '[*] Running test suite A (Standard HTML tag injections)...',
      '    [-] injected: <script>alert(1)</script> -> Blocked by Cloudflare WAF.',
      '[*] Running test suite B (WAF evasion & modern browser payloads)...',
      '    [-] injected: <img src=x onerror=alert(1)> -> Blocked by WAF.',
      '    [+] injected: <svg/onload=eval(atob("YWxlcnQoMSk="))> -> Bypass successful!',
      '    [!] EXPLORER VERIFICATION: Headless browser successfully triggered JavaScript alert()!',
      '    [!] Reflected XSS Vulnerability confirmed in "q" query parameter!',
      '[*] Fuzzing complete. 1 active payload triggered script execution.'
    ]
  },
  {
    id: 'scylla-c2',
    name: 'Scylla-C2',
    category: 'Red Teaming',
    description: 'A lightweight, educational Command & Control (C2) framework built to demonstrate telemetry evasion.',
    longDescription: 'Scylla-C2 is an educational post-exploitation infrastructure. It features a dashboard to coordinate agents, generate payloads with obfuscated call stacks, and route secure communications over custom HTTPS payloads mimicking benign static asset requests.',
    languages: ['Go', 'TypeScript', 'C++'],
    tools: ['React', 'Windows API', 'Protobuf', 'Gcrypt'],
    githubUrl: 'https://github.com/darkduchiha/scylla-c2',
    demoCommand: './scylla-server --port 8443 --secret-key dev_secret',
    simulatedOutput: [
      '[+] Scylla-C2 Server active on port :8443 (HTTPS)',
      '[+] Listening for incoming implants (beacons)...',
      '[*] Generating obfuscated PE beacon payload (ScyllaBeacon.exe)...',
      '    [-] Applied RC4 encryption to shellcode payload.',
      '    [-] Obfuscated Windows API imports via dynamic hashing (API Hashing).',
      '    [-] Payload compiled successfully (32 KB).',
      '[+] New Beacon received from 192.168.140.32 (Domain: CORP-WORKSTATION-01)',
      '    [-] OS: Windows 11 Enterprise (Build 22621)',
      '    [-] Privileges: User (CORP\\j.smith)',
      '    [-] Sleep interval: 10s (Jitter 15%)',
      'scylla-c2 (corp-workstation-01) > shell whoami /priv',
      '[*] Task queued: shell "whoami /priv"',
      '[-] Command execution response received:',
      '    SeShutdownPrivilege           Disabled',
      '    SeChangeNotifyPrivilege       Enabled by default',
      '    SeUndockPrivilege             Disabled',
      'scylla-c2 (corp-workstation-01) >'
    ]
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
