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
    { name: 'OSCP (Offensive Security Certified Professional)', issuer: 'OffSec', status: 'In Training / Prep' },
    { name: 'eJPT (Junior Penetration Tester v2)', issuer: 'INE Security', status: 'Certified (Credential ID: 824109)' },
    { name: 'CompTIA Security+ (ce SY0-601)', issuer: 'CompTIA', status: 'Certified (Credential ID: SEC-99824)' }
  ];

  return (
    <div className="flex-1 bg-[#131313] bg-grid-pattern text-[#e2e2e2] px-6 py-12 md:px-12 md:py-24 max-w-4xl mx-auto w-full flex flex-col gap-12 print:bg-white print:text-black print:p-0 print:m-0 print:shadow-none" id="resume-section">
      
      {/* Printable CSS Injector (hides navigation/footer on print) */}
      <style>{`
        @media print {
          body {
            background-color: white !important;
            color: black !important;
          }
          #app-navbar, #app-footer, #terminal-panel, #terminal-link-box, #print-action-bar {
            display: none !important;
          }
          .print\\:border-black {
            border-color: #000000 !important;
          }
          .print\\:text-black {
            color: #000000 !important;
          }
          .print\\:text-gray-700 {
            color: #374151 !important;
          }
          .print\\:bg-transparent {
            background-color: transparent !important;
          }
        }
      `}</style>

      {/* Print / Export Action Bar */}
      <div className="flex justify-between items-center border-b border-[#222222] pb-6 print:hidden" id="print-action-bar">
        <div className="flex flex-col gap-1">
          <span className="font-mono text-xs text-[#808080] tracking-widest">_CURRICULUM_VITAE</span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl text-white tracking-tight">Technical Resume</h2>
        </div>
        
        <button
          onClick={handlePrint}
          className="border border-white px-4 py-2 bg-white text-black hover:bg-transparent hover:text-white transition-all font-mono text-xs flex items-center gap-2 font-bold uppercase"
          id="print-cv-btn"
        >
          <Printer size={14} />
          <span>PRINT / EXPORT PDF</span>
        </button>
      </div>

      {/* Printable Resume Container */}
      <div className="flex flex-col gap-10 print:gap-8" id="resume-body">
        
        {/* Header Block */}
        <div className="border border-[#222222] bg-[#111111] p-6 flex flex-col md:flex-row justify-between gap-6 print:border-black print:bg-transparent print:p-0 print:border-0" id="resume-head-card">
          <div className="flex flex-col gap-2">
            <h1 className="font-sans font-bold text-3xl text-white tracking-tight print:text-black">KAVIRU NETHSARA</h1>
            <span className="font-mono text-xs text-white tracking-wider uppercase print:text-black">Cybersecurity Specialist // DevSecOps Intern</span>
            <p className="font-sans text-xs text-[#808080] max-w-md leading-relaxed mt-1 print:text-gray-700">
              Passionate offensive security researcher specializing in web penetration testing, automated API vulnerability assessments, and cryptography challenge engineering.
            </p>
          </div>

          {/* Contact coordinates */}
          <div className="font-mono text-xs text-[#808080] flex flex-col gap-2 print:text-black justify-center" id="resume-contacts">
            <div className="flex items-center gap-2">
              <Mail size={12} className="text-white print:text-black" />
              <a href="mailto:kaviruyt@gmail.com" className="hover:text-white transition-colors print:text-black">kaviruyt@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              <MapPin size={12} className="text-white print:text-black" />
              <span>Colombo, Sri Lanka</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield size={12} className="text-white print:text-black" />
              <span className="font-bold">SL.PROV.SEC</span>
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="flex flex-col gap-4" id="resume-experience">
          <div className="flex items-center gap-2 border-b border-[#222222] pb-1 print:border-black" id="exp-header">
            <Briefcase size={14} className="text-white print:text-black" />
            <h3 className="font-sans font-bold text-sm text-white tracking-wider uppercase print:text-black">Professional Experience</h3>
          </div>

          <div className="flex flex-col gap-4" id="exp-timeline-list">
            {EXPERIENCE_DATA.map((job) => {
              const isExpanded = expandedRole === job.role;
              return (
                <div 
                  key={job.role}
                  className="border border-[#222222] bg-[#111111]/40 print:bg-transparent print:border-0 print:border-b print:border-gray-200 pb-4 last:border-0"
                  id={`resume-job-${job.role.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                >
                  {/* Collapsible Header on screen, plain text on print */}
                  <div 
                    onClick={() => toggleRole(job.role)}
                    className="flex justify-between items-start p-4 cursor-pointer hover:bg-white/[0.02] transition-colors print:cursor-default print:hover:bg-transparent print:p-0 print:py-2"
                    id={`job-header-${job.role.toLowerCase().replace(/[^a-z0-9]/g, '')}`}
                  >
                    <div>
                      <h4 className="font-sans font-bold text-base text-white print:text-black">{job.role}</h4>
                      <span className="font-mono text-xs text-[#808080] print:text-gray-700">{job.organization}</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-white bg-white/5 border border-white/15 px-2.5 py-0.5 print:text-black print:border-black print:bg-transparent">{job.period}</span>
                      <span className="text-[#808080] print:hidden">
                        {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                      </span>
                    </div>
                  </div>

                  {/* Bullet points (Always visible on print, toggled on screen) */}
                  <div className={`px-4 pb-4 font-sans text-xs text-[#808080] leading-relaxed flex flex-col gap-3 print:block print:p-0 print:text-gray-700 ${isExpanded ? 'block' : 'hidden md:block'}`} id="job-bullets">
                    <p className="font-sans italic">{job.description}</p>
                    <ul className="space-y-1.5 list-disc pl-4" id="job-bullets-list">
                      {job.bullets.map((bullet, idx) => (
                        <li key={idx} className="print:text-black">{bullet}</li>
                      ))}
                    </ul>
                    <div className="flex flex-wrap gap-2 pt-2 print:hidden" id="job-tech-list">
                      {job.techStack.map(tech => (
                        <span key={tech} className="font-mono text-[9px] border border-[#222222] px-2 py-0.5 text-white">
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
        <div className="flex flex-col gap-4" id="resume-education">
          <div className="flex items-center gap-2 border-b border-[#222222] pb-1 print:border-black" id="edu-header">
            <GraduationCap size={14} className="text-white print:text-black" />
            <h3 className="font-sans font-bold text-sm text-white tracking-wider uppercase print:text-black">Education</h3>
          </div>

          <div className="flex flex-col gap-4" id="edu-list">
            {EDUCATION_DATA.map((edu) => (
              <div key={edu.degree} className="border border-[#222222] bg-[#111111]/20 p-4 print:border-0 print:p-0 print:bg-transparent" id="edu-card">
                <div className="flex justify-between items-start gap-4">
                  <div>
                    <h4 className="font-sans font-bold text-base text-white print:text-black">{edu.degree}</h4>
                    <span className="font-mono text-xs text-[#808080] print:text-gray-700">{edu.institution}</span>
                  </div>
                  <span className="font-mono text-xs text-white bg-white/5 border border-white/10 px-2.5 py-0.5 print:text-black print:border-black print:bg-transparent shrink-0">{edu.period}</span>
                </div>
                <p className="font-sans text-xs text-[#808080] mt-3 leading-relaxed print:text-gray-700">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Block */}
        <div className="flex flex-col gap-4" id="resume-certs">
          <div className="flex items-center gap-2 border-b border-[#222222] pb-1 print:border-black" id="certs-header">
            <Award size={14} className="text-white print:text-black" />
            <h3 className="font-sans font-bold text-sm text-white tracking-wider uppercase print:text-black">Credentials & Certifications</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" id="certs-grid">
            {certs.map(c => (
              <div key={c.name} className="border border-[#222222] bg-[#111111] p-4 flex flex-col justify-between print:border-0 print:p-0 print:bg-transparent" id="cert-item-card">
                <div>
                  <h4 className="font-sans font-bold text-xs text-white print:text-black leading-snug">{c.name}</h4>
                  <span className="font-mono text-[9px] text-[#808080] print:text-gray-700 block mt-1">{c.issuer}</span>
                </div>
                <span className="font-mono text-[9px] text-white border border-white/20 bg-white/5 px-2 py-0.5 mt-4 self-start print:text-black print:border-black print:bg-transparent">
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
