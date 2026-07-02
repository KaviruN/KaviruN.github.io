import { useState } from 'react';
import { Terminal } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleTerminal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, toggleTerminal }: NavbarProps) {
  return (
    <nav className="navbar" id="app-navbar">
      {/* Brand logo left */}
      <div
        onClick={() => setActiveTab('home')}
        className="navbar-logo"
        id="navbar-logo"
      >
        <span>DARKDUCHIHA</span>
        <span className="navbar-logo-blink animate-blink"></span>
      </div>

      {/* Nav Menu items right */}
      <div className="navbar-menu" id="navbar-menu">
        <button
          onClick={() => setActiveTab('home')}
          className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          id="nav-link-home"
        >
          HOME
          {activeTab === 'home' && (
            <span className="nav-link-underline"></span>
          )}
        </button>

        <button
          onClick={() => setActiveTab('projects')}
          className={`nav-link ${activeTab === 'projects' ? 'active' : ''}`}
          id="nav-link-projects"
        >
          PROJECTS
          {activeTab === 'projects' && (
            <span className="nav-link-underline"></span>
          )}
        </button>
        <button
          id="nav-link-blog"
          className="nav-link-blog"
        >
          <a href="https://kavirun.github.io/blog/" target="_blank" rel="noopener noreferrer">BLOG ↗</a>
        </button>
        <button
          onClick={() => setActiveTab('resume')}
          className={`nav-link-resume ${activeTab === 'resume' ? 'active' : ''}`}
          id="nav-link-resume"
        >
          RESUME
        </button>
        <button
          onClick={toggleTerminal}
          className="nav-link-terminal-toggle"
          title="Open Terminal"
          id="nav-link-terminal-toggle"
        >
          <Terminal size={14} />
        </button>
      </div>
    </nav>
  );
}
