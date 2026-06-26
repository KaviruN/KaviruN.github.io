interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="border-t border-[#222222] bg-[#131313] px-6 py-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] md:text-xs font-mono text-[#808080]" id="app-footer">
      <div>
        <span>© {currentYear} KAVIRU NETHSARA // DARKDUCHIHA</span>
      </div>
      <div className="flex gap-6 tracking-widest">
        <a 
          href="https://github.com/darkduchiha" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white transition-colors uppercase"
          id="footer-github"
        >
          GITHUB
        </a>
        <a 
          href="https://linkedin.com/in/kavirunethsara" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="hover:text-white transition-colors uppercase"
          id="footer-linkedin"
        >
          LINKEDIN
        </a>
        <a 
          href="mailto:kaviruyt@gmail.com" 
          className="hover:text-white transition-colors uppercase"
          id="footer-email"
        >
          EMAIL
        </a>
      </div>
    </footer>
  );
}
