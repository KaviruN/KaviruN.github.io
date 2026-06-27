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
    { input: '', output: 'DARKDUCHIHA [Version 1.0.4]\nType "help" to view available terminal commands.\n', type: 'system' }
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
DARKDUCHIHA // Kaviru Nethsara
----------------------------
Cybersecurity Undergrad.
Currently exploring Bug Bounty hunting (HackerOne/Bugcrowd) and active CTF challenges.
Specializing in: API security auditing, automation tools and evasion research.
        `;
        break;
      case 'skills':
        reply = `
LANGUAGES:     Python, Java, JavaScript, Bash, Go
CYBERSECURITY: Web Exploitation, Pentesting, Bug Bounty,  Reverse Engineering
TOOLS:         Burp Suite, Nmap, Wireshark, Ghidra, GDB, Docker
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
          if (flagAttempt === 'flag{MDAwMDAwMA}' || flagAttempt === '{MDAwMDAwMA}' || flagAttempt === 'MDAwMDAwMA') {
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
      className={`terminal-panel ${isMaximized ? 'maximized' : ''} ${sudoUnlocked ? 'sudo-unlocked' : ''}`}
      id="terminal-panel"
    >
      {/* Terminal Title Bar */}
      <div className={`terminal-title-bar ${sudoUnlocked ? 'sudo-unlocked' : ''}`}>
        <div className="terminal-title-left">
          <TerminalIcon size={14} className="terminal-title-icon" />
          <span className="terminal-title-text">
            {sudoUnlocked ? 'ROOT_SHELL: darkduchiha@terminal' : 'USER_SHELL: guest@darkduchiha'}
          </span>
          {sudoUnlocked && (
            <span className="terminal-sudo-tag">
              ROOT
            </span>
          )}
        </div>

        <div className="terminal-title-actions">
          <button
            onClick={() => setIsMaximized(!isMaximized)}
            className="terminal-action-btn"
            title={isMaximized ? 'Minimize Window' : 'Maximize Window'}
            id="terminal-btn-maximize"
          >
            {isMaximized ? <Minimize2 size={13} /> : <Maximize2 size={13} />}
          </button>
          <button
            onClick={onClose}
            className="terminal-action-btn terminal-action-btn-close"
            title="Close Terminal"
            id="terminal-btn-close"
          >
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Terminal Content Buffer */}
      <div
        className="terminal-buffer"
        onClick={() => inputRef.current?.focus()}
        id="terminal-buffer"
      >
        {history.map((item, idx) => (
          <div key={idx} className={`terminal-history-item ${item.type}`}>
            {item.input && (
              <div className="terminal-prompt-row">
                <span className="terminal-prompt-prefix">
                  {sudoUnlocked ? 'root@darkduchiha:~#' : 'guest@darkduchiha:~$'}
                </span>
                <span className="terminal-prompt-input-echo">{item.input}</span>
              </div>
            )}
            <div className="terminal-output-text">
              {item.output}
            </div>
          </div>
        ))}
        <div ref={terminalEndRef} />
      </div>

      {/* Terminal Input Line */}
      <div className={`terminal-input-line ${sudoUnlocked ? 'sudo-unlocked' : ''}`}>
        <span className="terminal-input-prefix">
          {sudoUnlocked ? 'root@darkduchiha:~#' : 'guest@darkduchiha:~$'}
        </span>
        <input
          ref={inputRef}
          type="text"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyDown={handleKeyDown}
          className="terminal-input-field"
          placeholder='Type command (e.g. "help", "skills", "flag")...'
          id="terminal-input"
          autoComplete="off"
          autoCapitalize="off"
        />
        <div className="terminal-enter-hint hidden md:flex">
          <span>ENTER</span>
          <CornerDownLeft size={10} />
        </div>
      </div>
    </div>
  );
}
