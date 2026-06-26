import { useState, useEffect } from 'react';
import { Github, Linkedin, Shield, Code, Wrench, ChevronRight, Activity, Calendar } from 'lucide-react';
import { PROJECTS_DATA, CTF_ACHIEVEMENTS_DATA } from '../data';

interface HomeSectionProps {
  setActiveTab: (tab: string) => void;
  openTerminal: () => void;
}

export default function HomeSection({ setActiveTab, openTerminal }: HomeSectionProps) {
  const [typedActivity, setTypedActivity] = useState('');
  const [activityIndex, setActivityIndex] = useState(0);
  const activities = [
    'Hunting vulnerabilities on HackerOne...',
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
    <div className="flex-1 bg-[#131313] bg-grid-pattern text-[#e2e2e2] px-6 py-12 md:px-12 md:py-24 max-w-7xl mx-auto w-full flex flex-col gap-24" id="home-section">
      
      {/* Hero Section */}
      <div className="flex flex-col items-center text-center gap-8 max-w-3xl mx-auto" id="hero-block">
        
        {/* Avatar Ring Structure */}
        <div className="relative group" id="hero-avatar">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-white/10 to-white/30 blur opacity-30 group-hover:opacity-70 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative flex flex-col items-center">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border border-white/40 p-1 bg-black overflow-hidden flex items-center justify-center">
              <img 
                src={avatarUrl} 
                alt="DARKDUCHIHA Profile" 
                referrerPolicy="no-referrer"
                className="w-full h-full rounded-full object-cover grayscale contrast-125 brightness-90 filter transition-transform duration-500 hover:scale-105"
                id="avatar-image"
              />
            </div>
            
            {/* Clinical technical badge under avatar */}
            <div className="absolute -bottom-3 bg-white text-black text-[9px] md:text-[10px] font-mono font-bold tracking-widest px-3 py-1 border border-black shadow-lg select-none" id="avatar-badge">
              SL.PROV.SEC
            </div>
          </div>
        </div>

        {/* Hero Title & Bio */}
        <div className="flex flex-col gap-4 mt-4" id="hero-text-block">
          <h1 className="font-sans text-3xl sm:text-5xl md:text-[64px] font-bold text-white tracking-tight leading-tight select-text" id="hero-heading">
            Not chasing titles.<br />
            <span className="text-[#808080]">Chasing understanding.</span>
          </h1>
          
          <p className="font-sans text-xs sm:text-sm md:text-base text-[#808080] max-w-2xl mx-auto leading-relaxed mt-2" id="hero-subtext">
            Cybersecurity undergrad from Sri Lanka. I grind CTFs, break things to learn how they work, and write about it. Currently exploring bug bounty — not for the money, for the hunt.
          </p>
        </div>

        {/* Hero Actions (GitHub & LinkedIn) */}
        <div className="flex items-center justify-center gap-4 mt-2 font-mono text-xs" id="hero-actions">
          <a 
            href="https://github.com/darkduchiha" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white px-6 py-3 bg-white text-black hover:bg-transparent hover:text-white transition-all flex items-center gap-2 tracking-widest uppercase font-bold"
            id="hero-github-btn"
          >
            <Github size={14} />
            <span>GITHUB</span>
          </a>
          <a 
            href="https://linkedin.com/in/kavirunethsara" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="border border-white/20 px-6 py-3 text-white hover:border-white hover:bg-white/5 transition-all flex items-center gap-2 tracking-widest uppercase"
            id="hero-linkedin-btn"
          >
            <Linkedin size={14} />
            <span>LINKEDIN</span>
          </a>
        </div>
      </div>

      {/* Tech Stack Section */}
      <div className="flex flex-col gap-8" id="tech-stack-section">
        <div className="flex items-center gap-3 border-b border-[#222222] pb-2" id="tech-stack-header">
          <span className="font-mono text-xs text-[#808080] tracking-widest">_TECH_STACK</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="tech-stack-grid">
          
          {/* Languages Card */}
          <div className="border border-[#222222] bg-[#111111] p-6 flex flex-col gap-6" id="tech-card-languages">
            <div className="flex justify-between items-center text-xs font-mono text-[#808080]" id="tech-card-header-1">
              <Code size={16} className="text-white" />
              <span>[01]</span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-white mb-4 tracking-wide">LANGUAGES</h3>
              <ul className="space-y-2 font-mono text-xs text-[#808080] list-none" id="languages-list">
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Python</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Java</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>JavaScript</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Cybersecurity Card */}
          <div className="border border-[#222222] bg-[#111111] p-6 flex flex-col gap-6" id="tech-card-security">
            <div className="flex justify-between items-center text-xs font-mono text-[#808080]" id="tech-card-header-2">
              <Shield size={16} className="text-white" />
              <span>[02]</span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-white mb-4 tracking-wide">CYBERSECURITY</h3>
              <ul className="space-y-2 font-mono text-xs text-[#808080] list-none" id="cyber-list">
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Web Exploitation</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Pentesting</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Bug Bounty</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Tools Card */}
          <div className="border border-[#222222] bg-[#111111] p-6 flex flex-col gap-6" id="tech-card-tools">
            <div className="flex justify-between items-center text-xs font-mono text-[#808080]" id="tech-card-header-3">
              <Wrench size={16} className="text-white" />
              <span>[03]</span>
            </div>
            <div>
              <h3 className="font-sans font-bold text-lg text-white mb-4 tracking-wide">TOOLS</h3>
              <ul className="space-y-2 font-mono text-xs text-[#808080] list-none" id="tools-list">
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Burp Suite</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Nmap</span>
                </li>
                <li className="flex items-center gap-2 hover:text-white transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-white"></span>
                  <span>Metasploit</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>

      {/* CTF Achievements & Terminal Quick Activity Screen */}
      <div className="flex flex-col gap-8" id="ctf-section">
        <div className="flex items-center gap-3 border-b border-[#222222] pb-2" id="ctf-header">
          <span className="font-mono text-xs text-[#808080] tracking-widest">_CTF_ACHIEVEMENTS</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="ctf-grid">
          
          {/* Left Column: Achievements Info */}
          <div className="lg:col-span-7 flex flex-col gap-8" id="ctf-info">
            
            {/* TryHackMe achievement block */}
            <div className="flex gap-4 border-l-2 border-white pl-6 py-2 hover:bg-white/[0.02] transition-colors" id="ctf-card-thm">
              <div className="flex-1">
                <span className="font-mono text-[10px] text-[#808080] tracking-wider block mb-1">TOP RANKING</span>
                <h4 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight" id="thm-title">
                  TryHackMe — top 2% globally
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#808080] mt-2 leading-relaxed" id="thm-desc">
                  Advanced offensive security rooms and red teaming labs completed with consistent top-tier placement.
                </p>
              </div>
            </div>

            {/* PicoCTF achievement block */}
            <div className="flex gap-4 border-l-2 border-white pl-6 py-2 hover:bg-white/[0.02] transition-colors" id="ctf-card-pico">
              <div className="flex-1">
                <span className="font-mono text-[10px] text-[#808080] tracking-wider block mb-1">CHALLENGE SOLVER</span>
                <h4 className="font-sans font-bold text-xl md:text-2xl text-white tracking-tight" id="pico-title">
                  PicoCTF — 81+ challenges
                </h4>
                <p className="font-sans text-xs sm:text-sm text-[#808080] mt-2 leading-relaxed" id="pico-desc">
                  Focusing on Binary Exploitation and Cryptography fundamentals in high-pressure competition environments.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Streak & Status Dashboard */}
          <div className="lg:col-span-5 border border-[#222222] bg-[#111111] p-6 flex flex-col gap-8 justify-between relative" id="ctf-dashboard-card">
            
            {/* Top row: Header & Online status */}
            <div className="flex justify-between items-center border-b border-[#222222]/60 pb-4" id="ctf-dashboard-header">
              <span className="font-mono text-[10px] text-[#808080] tracking-widest flex items-center gap-1">
                <Calendar size={12} />
                <span>LEARNING STREAK</span>
              </span>
              <span className="font-mono text-[10px] text-white flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-ping"></span>
                <span className="tracking-widest">ACT_STATE: ONLINE</span>
              </span>
            </div>

            {/* Streak vertical block grid matching layout */}
            <div className="flex flex-col gap-3" id="streak-block">
              <div className="flex items-end justify-between h-20 px-2" id="streak-bar-grid">
                {streakDays.map((day, i) => (
                  <div 
                    key={day.name} 
                    className="flex flex-col items-center gap-2 flex-1"
                    onMouseEnter={() => setHoveredStreak(day.desc)}
                    onMouseLeave={() => setHoveredStreak(null)}
                    id={`streak-day-${day.name.toLowerCase()}`}
                  >
                    {/* Visual box. Highly active = Pure white, inactive = Dark Gray */}
                    <div className={`w-full h-12 border ${
                      day.active 
                        ? 'bg-white border-white' 
                        : 'bg-transparent border-[#222222] hover:border-[#444444]'
                    } transition-colors cursor-pointer`} />
                    <span className="font-mono text-[9px] text-[#808080]">{day.name}</span>
                  </div>
                ))}
              </div>

              {/* Dynamic tooltip area for hover details */}
              <div className="h-6 bg-white/[0.02] border border-[#222222] px-3 flex items-center" id="streak-tooltip">
                <span className="font-mono text-[9px] text-gray-500 truncate">
                  {hoveredStreak ? `[LOG] ${hoveredStreak}` : '[HINT] Hover over days to view learning server telemetry'}
                </span>
              </div>
            </div>

            {/* Middle Section: Typing current activity */}
            <div className="flex flex-col gap-2 border-t border-[#222222]/60 pt-4" id="current-activity-block">
              <span className="font-mono text-[9px] text-[#808080] tracking-widest flex items-center gap-1">
                <Activity size={10} />
                <span>CURRENT_ACTIVITY</span>
              </span>
              <div 
                onClick={openTerminal} 
                className="font-mono text-xs text-white hover:text-green-400 transition-colors cursor-pointer flex items-center gap-1.5 bg-black/40 p-2 border border-white/5"
                id="activity-terminal-box"
              >
                <span>{typedActivity}</span>
                <span className="w-1.5 h-3 bg-white animate-blink"></span>
              </div>
            </div>

            {/* Bottom Row: Uptime */}
            <div className="flex justify-between items-center border-t border-[#222222]/60 pt-4" id="uptime-block">
              <span className="font-mono text-[9px] text-[#808080] tracking-widest">UPTIME</span>
              <span className="font-sans font-bold text-lg text-white" id="uptime-val">99.9%</span>
            </div>

          </div>

        </div>
      </div>

    </div>
  );
}
