import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeSection from './components/HomeSection';
import ProjectsSection from './components/ProjectsSection';
import ResumeSection from './components/ResumeSection';
import TerminalOverlay from './components/TerminalOverlay';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('home');
  const [isTerminalOpen, setIsTerminalOpen] = useState<boolean>(false);

  // Keyboard shortcut to toggle terminal: backtick (`) or tilde (~) key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === '`' || e.key === '~') {
        e.preventDefault();
        setIsTerminalOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="min-h-screen bg-[#131313] text-[#e2e2e2] flex flex-col font-sans select-none relative" id="app-root">
      
      {/* Hidden Easter Egg Flag for CTF players */}
      {/* Flag is: flag{obsidian_protocols_activated_999} */}
      <div className="hidden" id="system-diagnostic-node" data-node-sec="flag{obsidian_protocols_activated_999}" />

      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} 
      />

      {/* Main View Container */}
      <main className="flex-1 flex flex-col" id="app-main">
        {activeTab === 'home' && (
          <HomeSection 
            setActiveTab={setActiveTab} 
            openTerminal={() => setIsTerminalOpen(true)} 
          />
        )}
        {activeTab === 'projects' && <ProjectsSection />}
        {activeTab === 'resume' && <ResumeSection />}
      </main>

      {/* Persistent Technical Banner for Quick Terminal Toggle */}
      <div className="bg-[#0c0c0c] border-t border-[#222222] py-2 px-6 flex justify-between items-center text-[10px] font-mono text-[#808080] select-none print:hidden" id="terminal-link-box">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
          <span>CONNECTION SECURE // 256-BIT SHA</span>
        </div>
        <button 
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="hover:text-white transition-colors cursor-pointer flex items-center gap-1.5"
          id="btn-terminal-footer-hint"
        >
          <span>[PRESS ` TO TOGGLE COMMAND TERMINAL]</span>
        </button>
      </div>

      {/* Footer Block */}
      <Footer setActiveTab={setActiveTab} />

      {/* Command Terminal Overlay Drawer */}
      <TerminalOverlay 
        isOpen={isTerminalOpen} 
        onClose={() => setIsTerminalOpen(false)} 
      />
    </div>
  );
}
