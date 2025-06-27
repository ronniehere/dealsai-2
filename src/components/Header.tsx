
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const handleScheduleCall = () => {
    window.open('https://calendly.com/abe-sshift/15-minute-meeting-for-dealsai', '_blank');
  };

  return (
    <div className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          DealsAI
        </Link>
        <div className="flex gap-4">
          <Button 
            onClick={handleScheduleCall}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Schedule a Call
          </Button>
          <Link to="/blog">
            <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
              Blog
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
