import { Plane, Twitter, Linkedin, Instagram, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Plane className="text-primary h-6 w-6" />
              <span className="text-xl font-semibold text-gray-900">Aviator</span>
            </Link>
            <p className="text-gray-600 text-sm mb-4">
              Your AI co-pilot for navigating career growth and landing your dream job.
            </p>
            <div className="flex space-x-4">
              <SocialLink icon={<Twitter size={18} />} href="#" />
              <SocialLink icon={<Linkedin size={18} />} href="#" />
              <SocialLink icon={<Instagram size={18} />} href="#" />
              <SocialLink icon={<Github size={18} />} href="#" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Features</FooterLink>
              <FooterLink href="#">Pricing</FooterLink>
              <FooterLink href="#">Testimonials</FooterLink>
              <FooterLink href="#">Beta Program</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#">Career Blog</FooterLink>
              <FooterLink href="#">Skill Library</FooterLink>
              <FooterLink href="#">Job Trends</FooterLink>
              <FooterLink href="#">Learning Paths</FooterLink>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#">About Us</FooterLink>
              <FooterLink href="#">Careers</FooterLink>
              <FooterLink href="#">Contact</FooterLink>
              <FooterLink href="#">Privacy Policy</FooterLink>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Aviator AI. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <span className="text-sm text-gray-500">Terms</span>
            <span className="text-sm text-gray-500">Privacy</span>
            <span className="text-sm text-gray-500">Cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

interface SocialLinkProps {
  icon: React.ReactNode;
  href: string;
}

const SocialLink = ({ icon, href }: SocialLinkProps) => {
  return (
    <a 
      href={href} 
      className="text-gray-400 hover:text-primary transition-colors duration-150"
      aria-label="Social media"
    >
      {icon}
    </a>
  );
};

interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <li>
      <a 
        href={href} 
        className="text-gray-600 hover:text-primary transition-colors duration-150"
      >
        {children}
      </a>
    </li>
  );
};

export default Footer;