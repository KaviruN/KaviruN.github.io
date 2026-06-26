import { useState, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, Github, AlertTriangle, ShieldCheck, Cpu } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS_DATA[0]);
  const [consoleOutput, setConsoleOutput] = useState<string[]>([]);
  const [isRunning, setIsRunning] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  // Restart terminal output if selected project changes
  useEffect(() => {
    setConsoleOutput([`guest@darkduchiha:~$ ${selectedProject.demoCommand}`]);
    setIsRunning(false);
    setCurrentLineIndex(0);
  }, [selectedProject]);

  // Run the step-by-step mock compilation/execution simulation
  const startDemoRun = () => {
    if (isRunning) return;
    setIsRunning(true);
    setConsoleOutput([`guest@darkduchiha:~$ ${selectedProject.demoCommand}`]);
    setCurrentLineIndex(0);
  };

  useEffect(() => {
    if (!isRunning) return;
    if (currentLineIndex >= selectedProject.simulatedOutput.length) {
      setIsRunning(false);
      return;
    }

    const timer = setTimeout(() => {
      setConsoleOutput(prev => [...prev, selectedProject.simulatedOutput[currentLineIndex]]);
      setCurrentLineIndex(prev => prev + 1);
    }, 600 + Math.random() * 400); // realistic variance in network responses

    return () => clearTimeout(timer);
  }, [isRunning, currentLineIndex, selectedProject]);

  return (
    <div className="flex-1 bg-[#131313] bg-grid-pattern text-[#e2e2e2] px-6 py-12 md:px-12 md:py-24 max-w-7xl mx-auto w-full flex flex-col gap-12" id="projects-section">
      
      {/* Section Header */}
      <div className="flex flex-col gap-2 border-b border-[#222222] pb-6" id="projects-header">
        <span className="font-mono text-xs text-[#808080] tracking-widest">_TOOL_REPOS_AND_SECURITY_RESEARCH</span>
        <h2 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight" id="projects-heading">
          Developed Instruments
        </h2>
        <p className="font-sans text-xs sm:text-sm text-[#808080] max-w-xl leading-relaxed mt-1" id="projects-subtext">
          Independent security auditing tools, command-and-control simulation blueprints, and active fuzzing packages created for automated testing.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="projects-grid">
        
        {/* Left Column: Projects Catalog List */}
        <div className="lg:col-span-5 flex flex-col gap-4" id="projects-list-col">
          <span className="font-mono text-[10px] text-[#808080] tracking-widest block mb-1">CATALOG</span>
          
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`border p-5 cursor-pointer transition-all ${
                selectedProject.id === proj.id
                  ? 'bg-white text-black border-white shadow-xl'
                  : 'bg-[#111111] text-[#e2e2e2] border-[#222222] hover:border-white/50'
              }`}
              id={`project-card-${proj.id}`}
            >
              <div className="flex justify-between items-start" id={`project-card-header-${proj.id}`}>
                <span className={`font-mono text-[9px] px-2 py-0.5 border ${
                  selectedProject.id === proj.id 
                    ? 'border-black text-black bg-black/5' 
                    : 'border-[#222222] text-[#808080]'
                }`} id={`project-tag-${proj.id}`}>
                  {proj.category.toUpperCase()}
                </span>
                <span className={`font-mono text-[10px] ${
                  selectedProject.id === proj.id ? 'text-black' : 'text-[#808080]'
                }`} id={`project-number-${proj.id}`}>
                  {`[${proj.languages[0].toUpperCase()}]`}
                </span>
              </div>
              
              <h3 className="font-sans font-bold text-lg mt-3 mb-1 tracking-wide" id={`project-title-${proj.id}`}>{proj.name}</h3>
              <p className={`font-sans text-xs leading-relaxed ${
                selectedProject.id === proj.id ? 'text-black/80 font-medium' : 'text-[#808080]'
              }`} id={`project-desc-${proj.id}`}>
                {proj.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Interactive Details Panel & Terminal Dry Run */}
        <div className="lg:col-span-7 border border-[#222222] bg-[#111111] p-6 flex flex-col gap-6" id="project-detail-panel">
          
          {/* Top Panel Actions & Title */}
          <div className="flex flex-col gap-4 border-b border-[#222222] pb-6" id="project-detail-header">
            <div className="flex flex-wrap justify-between items-center gap-4">
              <h3 className="font-sans font-bold text-2xl text-white tracking-wide" id="detail-title">{selectedProject.name}</h3>
              
              <div className="flex items-center gap-3 text-xs font-mono" id="detail-actions">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-[#222222] hover:border-white text-[#808080] hover:text-white px-3 py-1.5 flex items-center gap-1.5 transition-colors"
                    id="detail-github-link"
                  >
                    <Github size={12} />
                    <span>GITHUB</span>
                  </a>
                )}
                
                <button
                  onClick={startDemoRun}
                  disabled={isRunning}
                  className={`px-4 py-1.5 flex items-center gap-1.5 font-bold transition-all border ${
                    isRunning 
                      ? 'border-white/15 bg-white/5 text-gray-500 cursor-not-allowed' 
                      : 'border-white bg-white text-black hover:bg-transparent hover:text-white'
                  }`}
                  id="detail-run-demo-btn"
                >
                  <Play size={12} className={isRunning ? 'animate-pulse' : ''} />
                  <span>{isRunning ? 'EXECUTING...' : 'RUN DEMO'}</span>
                </button>
              </div>
            </div>

            <p className="font-sans text-xs sm:text-sm text-[#808080] leading-relaxed select-text" id="detail-long-desc">
              {selectedProject.longDescription}
            </p>

            {/* Metas/Tech used */}
            <div className="flex flex-wrap gap-2 pt-2" id="detail-tech-chips">
              {selectedProject.languages.map(lang => (
                <span key={lang} className="font-mono text-[10px] text-white border border-white/20 bg-white/5 px-2.5 py-0.5" id={`chip-${lang.toLowerCase()}`}>
                  #{lang.toUpperCase()}
                </span>
              ))}
              {selectedProject.tools.map(tool => (
                <span key={tool} className="font-mono text-[10px] text-gray-500 border border-[#222222] px-2.5 py-0.5" id={`chip-${tool.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                  {tool.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Interactive Console Screen */}
          <div className="flex flex-col gap-2" id="detail-console-container">
            <span className="font-mono text-[9px] text-[#808080] tracking-widest flex items-center gap-1">
              <TerminalIcon size={12} />
              <span>SIMULATED_VULNERABILITY_ASSESSMENT_TELEMETRY</span>
            </span>
            
            <div className="bg-[#0e0e0e] border border-[#222222] p-4 font-mono text-[11px] leading-relaxed h-[260px] overflow-y-auto select-text flex flex-col justify-between" id="detail-console-buffer">
              <div className="space-y-1.5" id="console-logs">
                {consoleOutput.map((line, i) => {
                  let textClass = 'text-gray-300';
                  if (line.includes('VULNERABILITY FOUND') || line.includes('[!] IDOR') || line.includes('[!] ALERT')) {
                    textClass = 'text-red-400 font-bold bg-red-950/20 px-1 border-l border-red-500';
                  } else if (line.includes('resolved:') || line.includes('[SUCCESS]') || line.includes('Bypass successful')) {
                    textClass = 'text-green-400';
                  } else if (line.includes('guest@darkduchiha:~$')) {
                    textClass = 'text-white font-semibold';
                  } else if (line.startsWith('[*]')) {
                    textClass = 'text-gray-400';
                  }
                  
                  return (
                    <div key={i} className={textClass} id={`console-log-line-${i}`}>
                      {line}
                    </div>
                  );
                })}
                {isRunning && (
                  <div className="flex items-center gap-1.5 text-gray-500" id="console-loading-indicator">
                    <span className="w-1.5 h-1.5 bg-white rounded-full animate-ping"></span>
                    <span className="text-[10px] italic">Awaiting secure node query response...</span>
                  </div>
                )}
              </div>
              
              {!isRunning && consoleOutput.length > 1 && (
                <div className="border-t border-[#222222]/60 pt-2 text-[10px] text-gray-500 flex justify-between items-center" id="console-bottom-status">
                  <span>[STATUS] COMPLETED</span>
                  <button 
                    onClick={() => setConsoleOutput([`guest@darkduchiha:~$ ${selectedProject.demoCommand}`])}
                    className="hover:text-white transition-colors uppercase font-mono text-[9px]"
                    id="console-clear-btn"
                  >
                    [CLEAR TERMINAL]
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
