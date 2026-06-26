import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { Terminal as TerminalIcon, X, Maximize2, Minimize2, CornerDownLeft } from 'lucide-react';
import { PROJECTS_DATA, EXPERIENCE_DATA, EDUCATION_DATA } from '../data';

interface TerminalOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistory {
  input: string;
  output: string;
  type: 'input' | 'system' | 'success' | 'error';
}

export default function TerminalOverlay({ isOpen, onClose }: TerminalOverlayProps) {
  const [isMaximized, setIsMaximized] = useState(false);
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistory[]>([
    { input: '', output: 'DARKDUCHIHA [Version 1.0.4] SEC_CORE_ONLINE\nType "help" to view available terminal commands.\n', type: 'system' }
  ]);
  const [sudoUnlocked, setSudoUnlocked] = useState(false);
  
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const args = trimmed.split(' ');
    const command = args[0];
    
    let reply = '';
    let replyType: 'input' | 'system' | 'success' | 'error' = 'system';

    if (trimmed === '') {
      setHistory(prev => [...prev, { input: '', output: '', type: 'input' }]);
      return;
    }

    switch (command) {
      case 'help':
        reply = `
Available commands:
  about       - Basic developer profile and research focus
  skills      - Technical capabilities, languages and frameworks
  projects    - Active tool repository and development highlights
  experience  - Professional cyber research and mentoring roles
  education   - Academic foundations and credentials
  flag        - [CTF] Active flag submission system. Submit a flag!
  sudo        - Request superuser privileges
  clear       - Clear the screen buffer
  close       - Shut down this terminal shell
        `;
        break;
      case 'about':
        reply = `
DARKDUCHIHA // Kavir Nethsara
----------------------------
Cybersecurity Undergrad based in Sri Lanka.
Currently exploring Bug Bounty hunting (HackerOne/Bugcrowd) and active CTF challenges.
Specializing in: API security auditing, automation tools and evasion research.
        `;
        break;
      case 'skills':
        reply = `
LANGUAGES:     Python, Java, JavaScript, Bash, Go
CYBERSECURITY: Web Exploitation, Pentesting, Bug Bounty, Malware Analysis, Reverse Engineering
TOOLS:         Burp Suite, Nmap, Metasploit, Wireshark, Ghidra, GDB, Docker
        `;
        replyType = 'success';
        break;
      case 'projects':
        reply = PROJECTS_DATA.map(p => `[+] ${p.name} (${p.category})\n    ${p.description}\n    GitHub: ${p.githubUrl || 'N/A'}`).join('\n\n');
        break;
      case 'experience':
        reply = EXPERIENCE_DATA.map(e => `[${e.period}] ${e.role} @ ${e.organization}\n    ${e.description}\n    - ${e.bullets.join('\n    - ')}`).join('\n\n');
        break;
      case 'education':
        reply = EDUCATION_DATA.map(ed => `[${ed.period}] ${ed.degree}\n    Institution: ${ed.institution}\n    Focus: ${ed.details}`).join('\n\n');
        break;
      case 'flag':
        if (args.length < 2) {
          reply = `
=== CTF FLAG SUBMISSION ===
Usage: flag <YOUR_FLAG_HERE>
Hint: There is a hidden flag somewhere in the web page code... Search carefully or inspect the DOM!
          `;
        } else {
          const flagAttempt = args[1];
          if (flagAttempt === 'flag{obsidian_protocols_activated_999}' || flagAttempt === '{obsidian_protocols_activated_999}' || flagAttempt === 'obsidian_protocols_activated_999') {
            setSudoUnlocked(true);
            reply = `
[SUCCESS] FLAG SUBMITTED CORRECTLY!
===================================
ACCESS GRANTED. SUDO STATUS ACTIVATED.
Obsidian Protocol Core unlocked. Theme overrides enabled.
Now typing prefix shows 'root@darkduchiha:~#'.
            `;
            replyType = 'success';
          } else {
            reply = `[ERROR] Invalid flag sequence. Keep hunting, security researcher.`;
            replyType = 'error';
          }
        }
        break;
      case 'sudo':
        if (sudoUnlocked) {
          reply = 'Superuser privileges already active.';
          replyType = 'success';
        } else {
          reply = 'Password required. Try submitting the CTF flag using "flag <flag_value>" to unlock!';
          replyType = 'error';
        }
        break;
      case 'clear':
        setHistory([]);
        setInputVal('');
        return;
      case 'close':
        onClose();
        setInputVal('');
        return;
      default:
        reply = `Command not found: "${command}". Type "help" to see valid commands.`;
        replyType = 'error';
    }

    setHistory(prev => [
      ...prev,
      { input: cmdStr, output: reply, type: replyType }
    ]);
    setInputVal('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputVal);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-0 left-0 w-full z-50 bg-[#0e0e0e] border-t-2 ${sudoUnlocked ? 'border-green-500' : 'border-white'} font-mono flex flex-col transition-all duration-300 ${
        isMaximized ? 'h-[90vh]' : 'h-[350px]'
      }`}
      id="terminal-panel"
    >
      {/* Terminal Title Bar */}
      <div className={`flex justify-between items-center px-4 py-2 ${sudoUnlocked ? 'bg-green-950/40 text-green-400 border-b border-green-800' : 'bg-[#131313] text-white border-b border-[#222222]'}`}>
        <div className="flex items-center gap-2 text-xs">
          <TerminalIcon size={14} className={sudoUnlocked ? 'text-green-500' : 'text-gray-400'} />
          <span className="font-semibold tracking-wider">
            {sudoUnlocked ? 'ROOT_SHELL: darkduchiha@terminal' : 'USER_SHELL: guest@darkduchiha'}
          </span>
          {sudoUnlocked && (
            <span className="text-[9px] bg-green-500 text-black px-1.5 py-0.5 uppercase font-bold animate-pulse">
              ROOT
            </span>
          )}
        </div>
        
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsMaximized(!isMaximized)} 
            className="text-gray-400 hover:text-white transition-colors"
            title={isMaximized ? 'Minimize Window' : 'Maximize Window'}
            id="terminal-btn-maximize"
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-red-500 transition-colors"
            title="Close Terminal"
            id="terminal-btn-close"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Content Buffer */}
      <div 
        className="flex-1 overflow-y-auto p-4 text-xs space-y-2 select-text" 
        onClick={() => inputRef.current?.focus()}
        id="terminal-buffer"
      >
        {history.map((item, idx) => (
          <div key={idx} className="whitespace-pre-line leading-relaxed">
            {item.input && (
              <div className="flex items-center gap-2">
                <span className={sudoUnlocked ? 'text-green-400' : 'text-white'}>
                  {sudoUnlocked ? 'root@darkduchiha:~#' : 'guest@darkduchiha:~$'}
                </span>
                <span className="text-[#e2e2e2]">{item.input}</span>
              </div>
            )}
            <div className={`mt-1 pl-2 ${
              item.type === 'error' ? 'text-red-400' : 
              item.type === 'success' ? (sudoUnlocked ? 'text-green-400' : 'text-white font-medium') : 
              sudoUnlocked ? 'text-green-300' : 'text-gray-300'
            }`}>
              {item.output}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className={`flex items-center gap-2 px-4 py-2 border-t ${sudoUnlocked ? 'bg-green-950/20 border-green-800' : 'bg-[#111111] border-[#222222]'}`}>
        <span className={`text-xs ${sudoUnlocked ? 'text-green-400' : 'text-white'}`}>
          {sudoUnlocked ? 'root@darkduchiha:~#' : 'guest@darkduchiha:~$'}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 bg-transparent text-xs text-white outline-none border-none caret-white focus:ring-0 p-0 font-mono"
          placeholder='Type command (e.g. "help", "skills", "flag")...'
          id="terminal-input"
          autoComplete="off"
          autoCapitalize="off"
        />
        <div className="text-[10px] text-gray-500 flex items-center gap-1 font-mono hidden md:flex">
          <span>ENTER</span>
          <CornerDownLeft size={10} />
        </div>
      </div>
    </div>
  );
}
