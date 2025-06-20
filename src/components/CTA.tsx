
import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Calendar } from "lucide-react";

const CTA = () => {
  const handleBookStrategyCall = () => {
    // Open Calendly or booking system
    window.open('https://calendly.com/closersai/strategy-call', '_blank');
  };

  const handleCallNow = () => {
    // Open phone dialer
    window.location.href = 'tel:+15551232563';
  };

  return (
    <section id="cta-section" className="bg-gradient-to-br from-blue-600 to-blue-800 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to 10X Your Sales?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Stop leaving money on the table. Let's build a sales system that works 24/7 
          to generate leads and close deals for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-white hover:bg-gray-100 text-blue-600 font-semibold px-8 py-4 text-lg"
            onClick={handleBookStrategyCall}
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Strategy Call
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-white text-white hover:bg-white/10 px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now: (555) 123-CLOSE
          </Button>
        </div>

        <div className="bg-white/10 backdrop-blur rounded-lg p-6 max-w-2xl mx-auto border border-white/20">
          <p className="text-white font-medium mb-2">🔥 Limited Time Offer</p>
          <p className="text-blue-100">
            Book your strategy call this week and get a FREE lead generation audit 
            (normally $1,997) plus our exclusive "7-Figure Closing Scripts" guide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
