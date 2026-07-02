import { useState } from 'react';
import { Terminal, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  toggleTerminal: () => void;
}

export default function Navbar({ activeTab, setActiveTab, toggleTerminal }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = (tab: string) => {
    setActiveTab(tab);
    setMobileOpen(false);
  };

  return (
    <nav className="navbar" id="app-navbar">
      {/* Brand logo left */}
      <div
        onClick={() => handleNav('home')}
        className="navbar-logo"
        id="navbar-logo"
      >
        <span>DARKDUCHIHA</span>
        <span className="navbar-logo-blink animate-blink"></span>
      </div>

      {/* Desktop Nav Menu */}
      <div className="navbar-menu navbar-menu-desktop" id="navbar-menu-desktop">
        <button
          onClick={() => handleNav('home')}
          className={`nav-link ${activeTab === 'home' ? 'active' : ''}`}
          id="nav-link-home"
        >
          HOME
          {activeTab === 'home' && (
            <span className="nav-link-underline"></span>
          )}
        </button>

        <button
          onClick={() => handleNav('projects')}
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
          onClick={() => handleNav('resume')}
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

      {/* Mobile: terminal + hamburger */}
      <div className="navbar-mobile-controls">
        <button
          onClick={toggleTerminal}
          className="nav-link-terminal-toggle"
          title="Open Terminal"
          id="nav-link-terminal-toggle-mobile"
        >
          <Terminal size={14} />
        </button>
        <button
          onClick={() => setMobileOpen((o) => !o)}
          className="nav-hamburger"
          id="nav-hamburger"
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="navbar-mobile-menu" id="navbar-mobile-menu">
          <button
            onClick={() => handleNav('home')}
            className={`mobile-nav-link ${activeTab === 'home' ? 'active' : ''}`}
            id="mobile-nav-home"
          >
            HOME
          </button>
          <button
            onClick={() => handleNav('projects')}
            className={`mobile-nav-link ${activeTab === 'projects' ? 'active' : ''}`}
            id="mobile-nav-projects"
          >
            PROJECTS
          </button>
          <a
            href="https://kavirun.github.io/blog/"
            target="_blank"
            rel="noopener noreferrer"
            className="mobile-nav-link"
            id="mobile-nav-blog"
            onClick={() => setMobileOpen(false)}
          >
            BLOG ↗
          </a>
          <button
            onClick={() => handleNav('resume')}
            className={`mobile-nav-link ${activeTab === 'resume' ? 'active' : ''}`}
            id="mobile-nav-resume"
          >
            RESUME
          </button>
        </div>
      )}
    </nav>
  );
}
