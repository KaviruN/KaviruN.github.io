import { useState } from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleTerminal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, toggleTerminal }: NavbarProps) {
  return (
    <nav className="border-b border-[#222222] bg-[#131313] sticky top-0 z-50 px-6 py-4 md:px-12 flex justify-between items-center" id="app-navbar">
      {/* Brand logo left */}
      <div 
        onClick={() => setActiveTab('home')} 
        className="font-mono text-sm tracking-wider text-white font-bold cursor-pointer select-none hover:opacity-80 transition-opacity flex items-center gap-2"
        id="navbar-logo"
      >
        <span>DARKDUCHIHA</span>
        <span className="w-2 h-4 bg-white animate-blink inline-block"></span>
      </div>

      {/* Nav Menu items right */}
      <div className="flex items-center gap-6 md:gap-10 font-mono text-xs text-[#808080]" id="navbar-menu">
        <button
          onClick={() => setActiveTab('home')}
          className={`hover:text-white uppercase tracking-widest transition-colors relative py-1 ${activeTab === 'home' ? 'text-white font-medium' : ''}`}
          id="nav-link-home"
        >
          HOME
          {activeTab === 'home' && (
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('projects')}
          className={`hover:text-white uppercase tracking-widest transition-colors relative py-1 ${activeTab === 'projects' ? 'text-white font-medium' : ''}`}
          id="nav-link-projects"
        >
          PROJECTS
          {activeTab === 'projects' && (
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-white"></span>
          )}
        </button>
        <button
          onClick={() => setActiveTab('resume')}
          className={`border border-white/20 px-4 py-2 hover:border-white hover:text-white uppercase tracking-widest transition-all ${
            activeTab === 'resume' ? 'border-white text-white bg-white/5' : ''
          }`}
          id="nav-link-resume"
        >
          RESUME
        </button>
        <button
          onClick={toggleTerminal}
          className="p-2 border border-[#222222] hover:border-white hover:text-white transition-colors bg-[#111111] text-[#808080] title='Open Terminal'"
          id="nav-link-terminal-toggle"
        >
          <Terminal size={14} />
        </button>
      </div>
    </nav>
  );
}
