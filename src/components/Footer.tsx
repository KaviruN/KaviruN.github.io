interface FooterProps {
  setActiveTab: (tab: string) => void;
}

export default function Footer({ setActiveTab }: FooterProps) {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="app-footer" id="app-footer">
      <div>
        <span>© {currentYear} KAVIRU NETHSARA // DARKDUCHIHA</span>
      </div>
      <div className="footer-links">
        <a 
          href="https://github.com/KaviruN" 
          target="_blank" 
          rel="noopener noreferrer" 
          id="footer-github"
        >
          GITHUB
        </a>
        <a 
          href="https://linkedin.com/in/kaviru-n" 
          target="_blank" 
          rel="noopener noreferrer" 
          id="footer-linkedin"
        >
          LINKEDIN
        </a>
        <a 
          href="mailto:kavirunethsara1@outlook.com" 
          id="footer-email"
        >
          EMAIL
        </a>
      </div>
    </footer>
  );
}
