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
    <div className="app-root" id="app-root">
      
      {/* Hidden Easter Egg Flag for CTF players */}
      <div className="hidden" id="system-diagnostic-node" data-node-sec="0000000" />

      {/* Navigation Header */}
      <Navbar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        toggleTerminal={() => setIsTerminalOpen(!isTerminalOpen)} 
      />

      {/* Main View Container */}
      <main className="app-main" id="app-main">
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
      <div className="terminal-link-box print:hidden" id="terminal-link-box">
        <div className="connection-status">
          <span className="status-dot"></span>
          <span>CONNECTION SECURE // 256-BIT SHA</span>
        </div>
        <button 
          onClick={() => setIsTerminalOpen(!isTerminalOpen)}
          className="btn-terminal-footer-hint"
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
