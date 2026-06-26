import { useState } from 'react';
import { Award, Briefcase, GraduationCap, Mail, Phone, MapPin, Printer, Shield, ChevronDown, ChevronUp } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data';

export default function ResumeSection() {
  const [expandedRole, setExpandedRole] = useState<string | null>(EXPERIENCE_DATA[0].role);

  const toggleRole = (roleName: string) => {
    if (expandedRole === roleName) {
      setExpandedRole(null);
    } else {
      setExpandedRole(roleName);
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const certs = [
    {
      name: 'Web Application Red Teaming',
      issuer: 'TryHackMe',
      status: 'In Progress'
    },
    {
      name: 'Web Application Pentesting',
      issuer: 'TryHackMe',
      status: 'Completed — June 2026'
    },
    {
      name: 'Jr Penetration Tester',
      issuer: 'TryHackMe',
      status: 'Completed — November 2025'
    },
    {
      name: 'Web Fundamentals',
      issuer: 'TryHackMe',
      status: 'Completed — March 2026'
    },
    {
      name: 'Cyber Security 101',
      issuer: 'TryHackMe',
      status: 'Completed — June 2025'
    },
    {
      name: 'Pre Security',
      issuer: 'TryHackMe',
      status: 'Completed'
    }
  ];

  return (
    <div className="resume-section bg-grid-pattern" id="resume-section">

      {/* Print / Export Action Bar */}
      <div className="resume-action-bar print:hidden" id="print-action-bar">
        <div className="resume-action-title-box">
          <span className="section-label">_CURRICULUM_VITAE</span>
          <h2 className="projects-heading">Technical Resume</h2>
        </div>

        <button
          onClick={handlePrint}
          className="btn-print-cv"
          id="print-cv-btn"
        >
          <Printer size={14} />
          <span>PRINT / EXPORT PDF</span>
        </button>
      </div>

      {/* Printable Resume Container */}
      <div className="resume-body" id="resume-body">

        {/* Header Block */}
        <div className="resume-head-card" id="resume-head-card">
          <div className="resume-name-title-box">
            <h1 className="resume-name">KAVIRU NETHSARA</h1>
            <span className="resume-subtitle">Cybersecurity Specialist // DevSecOps Intern</span>
            <p className="resume-brief-desc">
              Passionate offensive security researcher specializing in web penetration testing, automated API vulnerability assessments, and cryptography challenge engineering.
            </p>
          </div>

          {/* Contact coordinates */}
          <div className="resume-contacts-box" id="resume-contacts">
            <div className="resume-contact-item">
              <Mail size={12} className="resume-contact-icon" />
              <a href="mailto:kaviruyt@gmail.com">kaviruyt@gmail.com</a>
            </div>
            <div className="resume-contact-item">
              <MapPin size={12} className="resume-contact-icon" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="resume-contact-item">
              <Shield size={12} className="resume-contact-icon" />
              <span className="resume-contact-bold">SL.PROV.SEC</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="resume-block-category" id="resume-experience">
          <div className="resume-category-header" id="exp-header">
            <Briefcase size={14} className="resume-category-icon" />
            <h3 className="resume-category-title">Professional Experience</h3>
          </div>

          <div className="resume-timeline-list" id="exp-timeline-list">
            {EXPERIENCE_DATA.map((job) => {
              const isExpanded = expandedRole === job.role;
              return (
                <div
                  key={job.role}
                  className="resume-timeline-job"
                  id={`resume-job-${job.role.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                >
                  {/* Collapsible Header on screen, plain text on print */}
                  <div
                    onClick={() => toggleRole(job.role)}
                    className="job-collapsible-header"
                    id={`job-header-${job.role.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                  >
                    <div>
                      <h4 className="job-role-title">{job.role}</h4>
                      <span className="job-org-label">{job.organization}</span>
                    </div>
                    <div className="job-meta-side">
                      <span className="job-period-tag">{job.period}</span>
                      <span className="job-chevron-icon print:hidden">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points (Always visible on print, toggled on screen) */}
                  <div className={`job-details-expand-box ${isExpanded ? '' : 'hidden'}`} id="job-bullets">
                    <p className="job-desc-italic">{job.description}</p>
                    <ul className="job-bullets-list" id="job-bullets-list">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx}>{bullet}</li>
                      ))}
                    </ul>
                    <div className="job-tech-stack-chips print:hidden" id="job-tech-list">
                      {job.techStack.map(tech => (
                        <span key={tech} className="job-tech-chip">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-block-category" id="resume-education">
          <div className="resume-category-header" id="edu-header">
            <GraduationCap size={14} className="resume-category-icon" />
            <h3 className="resume-category-title">Education</h3>
          </div>

          <div className="resume-timeline-list" id="edu-list">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.degree} className="education-card" id="edu-card">
                <div className="education-header-row">
                  <div>
                    <h4 className="edu-degree-title">{edu.degree}</h4>
                    <span className="edu-school-label">{edu.institution}</span>
                  </div>
                  <span className="edu-period-tag">{edu.period}</span>
                </div>
                <p className="edu-desc">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="resume-block-category" id="resume-certs">
          <div className="resume-category-header" id="certs-header">
            <Award size={14} className="resume-category-icon" />
            <h3 className="resume-category-title">Credentials & Certifications</h3>
          </div>

          <div className="certs-grid" id="certs-grid">
            {certs.map(c => (
              <div key={c.name} className="cert-card" id="cert-item-card">
                <div>
                  <h4 className="cert-name-label">{c.name}</h4>
                  <span className="cert-issuer-label">{c.issuer}</span>
                </div>
                <span className="cert-status-tag">
                  {c.status.toUpperCase()}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

    </div>
  );
}
