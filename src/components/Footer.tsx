import { Heart } from "lucide-react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <p className="footer-text">
            © {new Date().getFullYear()} Dinesh S. All rights reserved.
          </p>
          
          <p className="footer-made-with">
            Built with <Heart className="footer-heart" /> using React & CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
