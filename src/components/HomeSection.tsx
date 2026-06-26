import { useState, useEffect } from 'react';
import { Github, Linkedin, Shield, Code, Wrench, ChevronRight, Activity, Calendar } from 'lucide-react';
import { PROJECTS_DATA} from '../data';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  openTerminal: () => void;
}

export default function HomeSection({ setActiveTab, openTerminal }: HomeSectionProps) {
  const [typedActivity, setTypedActivity] = useState('');
  const [activityIndex, setActivityIndex] = useState(0);
  const activities = [
    'Analyzing binary payloads in Ghidra...',
    'Configuring reverse shell listener on Port 4444...',
    'Decoding Base64 cryptography vectors...',
    'Performing multi-threaded subnet fuzzing...'
  ];

  // Typing effect for current activity
  useEffect(() => {
    let currentText = '';
    let charIndex = 0;
    const activity = activities[activityIndex];

    const typingInterval = setInterval(() => {
      if (charIndex < activity.length) {
        currentText += activity.charAt(charIndex);
        setTypedActivity(currentText);
        charIndex++;
      } else {
        clearInterval(typingInterval);
        // Wait before transitioning to next activity
        const timeout = setTimeout(() => {
          setActivityIndex((prev) => (prev + 1) % activities.length);
        }, 3000);
        return () => clearTimeout(timeout);
      }
    }, 60);

    return () => clearInterval(typingInterval);
  }, [activityIndex]);

  // Streak data details on hover
  const streakDays = [
    { name: 'MON', active: true, desc: 'Solved 4 TryHackMe rooms' },
    { name: 'TUE', active: true, desc: 'Built automated API scanner' },
    { name: 'WED', active: true, desc: 'Reported high-severity BOLA flaw' },
    { name: 'THU', active: true, desc: 'Solved 6 PicoCTF cryptography labs' },
    { name: 'FRI', active: true, desc: 'Participated in private bug hunt' },
    { name: 'SAT', active: false, desc: 'Stale connection / Routine pause' },
    { name: 'SUN', active: false, desc: 'Stale connection / Server update' }
  ];

  const [hoveredStreak, setHoveredStreak] = useState<string | null>(null);

  // Unsplash profile image styled as black & white high contrast cyber portrait
  const avatarUrl = 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400&h=400';

  return (
    <div className="home-section bg-grid-pattern" id="home-section">

      {/* Hero Section */}
      <div className="hero-block" id="hero-block">

        {/* Avatar Ring Structure */}
        <div className="hero-avatar-wrapper" id="hero-avatar">
          <div className="hero-avatar-blur"></div>
          <div className="hero-avatar-inner">
            <div className="avatar-border-box">
              <img
                src={avatarUrl}
                alt="DARKDUCHIHA Profile"
                referrerPolicy="no-referrer"
                className="avatar-img"
                id="avatar-image"
              />
            </div>

            {/* Clinical technical badge under avatar */}
            <div className="avatar-badge" id="avatar-badge">
              SL.PROV.SEC
            </div>
          </div>
        </div>

        {/* Hero Title & Bio */}
        <div className="hero-text-block" id="hero-text-block">
          <h1 className="hero-heading" id="hero-heading">
            Not chasing titles.<br />
            <span className="hero-heading-gray">Chasing understanding.</span>
          </h1>

          <p className="hero-subtext" id="hero-subtext">
            Cybersecurity undergrad from Sri Lanka. I grind CTFs, break things to learn how they work, and write about it. Currently exploring bug bounty — not for the money, for the hunt.
          </p>
        </div>

        {/* Hero Actions (GitHub & LinkedIn) */}
        <div className="hero-actions" id="hero-actions">
          <a
            href="https://github.com/KaviruN"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-primary"
            id="hero-github-btn"
          >
            <Github size={14} />
            <span>GITHUB</span>
          </a>
          <a
            href="https://linkedin.com/in/kaviru-n"
            target="_blank"
            rel="noopener noreferrer"
            className="hero-btn-secondary"
            id="hero-linkedin-btn"
          >
            <Linkedin size={14} />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="tech-stack-section" id="tech-stack-section">
        <div className="section-label-header" id="tech-stack-header">
          <span className="section-label">_TECH_STACK</span>
        </div>

        <div className="tech-stack-grid" id="tech-stack-grid">

          {/* Languages Card */}
          <div className="tech-card" id="tech-card-languages">
            <div className="tech-card-header" id="tech-card-header-1">
              <Code size={16} />
              <span>[01]</span>
            </div>
            <div>
              <h3 className="tech-card-title">LANGUAGES</h3>
              <ul className="tech-card-list" id="languages-list">
                <li>
                  <span className="bullet-square"></span>
                  <span>Python</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>Java</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>JavaScript</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cybersecurity Card */}
          <div className="tech-card" id="tech-card-security">
            <div className="tech-card-header" id="tech-card-header-2">
              <Shield size={16} />
              <span>[02]</span>
            </div>
            <div>
              <h3 className="tech-card-title">CYBERSECURITY</h3>
              <ul className="tech-card-list" id="cyber-list">
                <li>
                  <span className="bullet-square"></span>
                  <span>Web Exploitation</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>Pentesting</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>Bug Bounty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tools Card */}
          <div className="tech-card" id="tech-card-tools">
            <div className="tech-card-header" id="tech-card-header-3">
              <Wrench size={16} />
              <span>[03]</span>
            </div>
            <div>
              <h3 className="tech-card-title">TOOLS</h3>
              <ul className="tech-card-list" id="tools-list">
                <li>
                  <span className="bullet-square"></span>
                  <span>Burp Suite</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>Nmap</span>
                </li>
                <li>
                  <span className="bullet-square"></span>
                  <span>Metasploit</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* CTF Achievements & Terminal Quick Activity Screen */}
      <div className="ctf-section" id="ctf-section">
        <div className="section-label-header" id="ctf-header">
          <span className="section-label">_CTF_ACHIEVEMENTS</span>
        </div>

        <div className="ctf-grid" id="ctf-grid">

          {/* Left Column: Achievements Info */}
          <div className="ctf-info-col" id="ctf-info">

            {/* TryHackMe achievement block */}
            <div
              className="ctf-achievement-card"
              id="ctf-card-thm-ranking"
              onClick={() => window.open('https://tryhackme.com/p/KaviruN', '_blank')}
            >
              <div className="flex-1">
                <span className="ctf-card-label">TOP RANKING</span>
                <h4 className="ctf-card-heading" id="thm-title-ranking">
                  TryHackMe — top 2% globally
                </h4>
                <p className="ctf-card-desc" id="thm-desc-ranking">
                  Advanced offensive security rooms and red teaming labs completed with consistent top-tier placement.
                </p>
              </div>
            </div>

            {/* PicoCTF achievement block */}
            <div className="ctf-achievement-card" id="ctf-card-pico">
              <div className="flex-1">
                <span className="ctf-card-label">CHALLENGE SOLVER</span>
                <h4 className="ctf-card-heading" id="pico-title">
                  PicoCTF — 81+ challenges
                </h4>
                <p className="ctf-card-desc" id="pico-desc">
                  Focusing on Web Exploitation and Cryptography fundamentals in high-pressure competition environments.
                </p>
              </div>
            </div>

            {/* TryHackMe achievement block */}
            <div
              className="ctf-achievement-card"
              id="ctf-card-thm-challenges"
              onClick={() => window.open('https://tryhackme.com/p/KaviruN', '_blank')}
            >
              <div className="flex-1">
                <span className="ctf-card-label">CHALLENGE SOLVER</span>
                <h4 className="ctf-card-heading" id="thm-title-challenges">
                  TryHackMe — 50+ Challenges
                </h4>
                <p className="ctf-card-desc" id="thm-desc-challenges">
                  Completed rooms with focus on of web exploitation and linux.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Streak & Status Dashboard */}
          <div className="ctf-dashboard-col" id="ctf-dashboard-card">

            {/* Top row: Header & Online status */}
            <div className="dashboard-header-row" id="ctf-dashboard-header">
              <span className="dashboard-section-label">
                <Calendar size={12} />
                <span>LEARNING STREAK</span>
              </span>
              <span className="dashboard-status-label">
                <span className="ping-dot"></span>
                <span>ACT_STATE: ONLINE</span>
              </span>
            </div>

            {/* Streak vertical block grid matching layout */}
            <div className="streak-block-wrapper" id="streak-block">
              <div className="streak-row" id="streak-bar-grid">
                {streakDays.map((day) => (
                  <div
                    key={day.name}
                    className="streak-day-cell"
                    onMouseEnter={() => setHoveredStreak(day.desc)}
                    onMouseLeave={() => setHoveredStreak(null)}
                    id={`streak-day-${day.name.toLowerCase()}`}
                  >
                    {/* Visual box. Highly active = Pure white, inactive = Dark Gray */}
                    <div className={`streak-visual-box ${day.active ? 'active' : ''}`} />
                    <span className="streak-day-label">{day.name}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic tooltip area for hover details */}
              <div className="streak-tooltip-box" id="streak-tooltip">
                <span className="streak-tooltip-text">
                  {hoveredStreak ? `[LOG] ${hoveredStreak}` : '[HINT] Hover over days to view learning server telemetry'}
                </span>
              </div>
            </div>

            {/* Middle Section: Typing current activity */}
            <div className="dashboard-divider-block" id="current-activity-block">
              <span className="dashboard-section-label">
                <Activity size={10} />
                <span>CURRENT_ACTIVITY</span>
              </span>
              <div
                onClick={openTerminal}
                className="activity-terminal-trigger"
                id="activity-terminal-box"
              >
                <span>{typedActivity}</span>
                <span className="activity-cursor-blink"></span>
              </div>
            </div>

            {/* Bottom Row: Uptime */}
            <div className="dashboard-uptime-row" id="uptime-block">
              <span className="dashboard-section-label">UPTIME</span>
              <span className="uptime-value" id="uptime-val">99.9%</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
