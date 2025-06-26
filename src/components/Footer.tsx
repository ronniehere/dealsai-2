import { Mail, MapPin, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/company/dealsai', '_blank');
  };

  const handleTwitterClick = () => {
    window.open('https://twitter.com/deals_ai', '_blank');
  };

  const handleEmailClick = () => {
    window.location.href = 'mailto:hello@deals.ai';
  };

  return (
    <footer className="bg-black py-16 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              DealsAI
            </h3>
            <p className="text-gray-400 mb-6 max-w-md">
              The premier sales consulting firm helping businesses, coaches, and entrepreneurs 
              scale their revenue through proven lead generation and closing systems.
            </p>
            <div className="flex space-x-4">
              <div 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                onClick={handleLinkedInClick}
              >
                <Linkedin className="w-5 h-5 text-white" />
              </div>
              <div 
                className="p-2 bg-gray-800 rounded-lg hover:bg-blue-600 transition-colors cursor-pointer"
                onClick={handleTwitterClick}
              >
                <Twitter className="w-5 h-5 text-white" />
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-blue-400 cursor-pointer">Lead Generation</li>
              <li className="hover:text-blue-400 cursor-pointer">Sales Training</li>
              <li className="hover:text-blue-400 cursor-pointer">Closing Systems</li>
              <li className="hover:text-blue-400 cursor-pointer">CRM Setup</li>
              <li className="hover:text-blue-400 cursor-pointer">Sales Funnels</li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center cursor-pointer hover:text-blue-400" onClick={handleEmailClick}>
                <Mail className="w-4 h-4 mr-3 text-blue-400" />
                hello@deals.ai
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-500 mb-4">
            © 2024 DealsAI. All rights reserved. | Privacy Policy | Terms of Service
          </p>
          <Link to="/admin/login" className="text-gray-600 hover:text-gray-400 text-sm">
            Admin
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
