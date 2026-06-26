import { useState } from 'react';
import { Github } from 'lucide-react';
import { PROJECTS_DATA } from '../data';
import { Project } from '../types';

export default function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project>(PROJECTS_DATA[0]);

  return (
    <div className="projects-section bg-grid-pattern" id="projects-section">
      
      {/* Section Header */}
      <div className="projects-header" id="projects-header">
        <span className="section-label">_TOOL_REPOS_AND_SECURITY_RESEARCH</span>
        <h2 className="projects-heading" id="projects-heading">
          Developed Instruments
        </h2>
        <p className="projects-subtext" id="projects-subtext">
          Independent security auditing tools, command-and-control simulation blueprints, and active fuzzing packages created for automated testing.
        </p>
      </div>

      <div className="projects-grid" id="projects-grid">
        
        {/* Left Column: Projects Catalog List */}
        <div className="projects-list-col" id="projects-list-col">
          <span className="catalog-label">CATALOG</span>
          
          {PROJECTS_DATA.map((proj) => (
            <div
              key={proj.id}
              onClick={() => setSelectedProject(proj)}
              className={`project-card ${selectedProject.id === proj.id ? 'active' : ''}`}
              id={`project-card-${proj.id}`}
            >
              <div className="project-card-header" id={`project-card-header-${proj.id}`}>
                <span className="project-card-tag" id={`project-tag-${proj.id}`}>
                  {proj.category.toUpperCase()}
                </span>
                <span className="project-card-lang" id={`project-number-${proj.id}`}>
                  {`[${proj.languages[0].toUpperCase()}]`}
                </span>
              </div>
              
              <h3 className="project-card-title" id={`project-title-${proj.id}`}>{proj.name}</h3>
              <p className="project-card-desc" id={`project-desc-${proj.id}`}>
                {proj.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right Column: Project Details & Live Preview */}
        <div className="project-detail-panel" id="project-detail-panel">
          
          {/* Top Panel: Title & Actions */}
          <div className="detail-header-block" id="project-detail-header">
            <div className="detail-header-top-row">
              <h3 className="detail-title" id="detail-title">{selectedProject.name}</h3>
              
              <div className="detail-actions-row" id="detail-actions">
                {selectedProject.githubUrl && (
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="detail-github-btn"
                    id="detail-github-link"
                  >
                    <Github size={12} />
                    <span>GITHUB</span>
                  </a>
                )}
                
                <button

                  className="detail-exec-btn"
                  id="detail-run-demo-btn"
                >
                 <a href="http://demos.darkduchiha.com" target="_blank" rel="noopener noreferrer">DEMO</a> 
                </button>
              </div>
            </div>

            <p className="detail-long-desc" id="detail-long-desc">
              {selectedProject.longDescription}
            </p>

            {/* Tech chips */}
            <div className="detail-tech-chips-wrapper" id="detail-tech-chips">
              {selectedProject.languages.map(lang => (
                <span key={lang} className="chip-lang" id={`chip-${lang.toLowerCase()}`}>
                  #{lang.toUpperCase()}
                </span>
              ))}
              {selectedProject.tools.map(tool => (
                <span key={tool} className="chip-tool" id={`chip-${tool.toLowerCase().replace(/[^a-z0-9]/g, '')}`}>
                  {tool.toUpperCase()}
                </span>
              ))}
            </div>
          </div>

          {/* Live Preview */}
          <div className="live-preview" >
            <div className="iframe-wrapper">
              <iframe
                src={selectedProject.demoUrl}
                title={selectedProject.name}
                className="preview-iframe"
                sandbox="allow-scripts allow-same-origin"
              />
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}
