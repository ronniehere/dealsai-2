
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 p-6">
      <div className="flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          closers.ai
        </Link>
        <div className="flex gap-4">
          <Link to="/blog">
            <Button variant="outline" className="text-black border-white hover:bg-white hover:text-black">
              Blog
            </Button>
          </Link>
          <Link to="/admin/login">
            <Button variant="ghost" className="text-white hover:bg-white/10">
              Admin
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
