
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
    <section id="cta-section" className="bg-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
          Ready to 10X Your Sales?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Stop leaving money on the table. Let's build a sales system that works 24/7 
          to generate leads and close deals for your business.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-black hover:bg-gray-800 text-white font-semibold px-8 py-4 text-lg"
            onClick={handleBookStrategyCall}
          >
            <Calendar className="mr-2 w-5 h-5" />
            Book Strategy Call
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-black text-black hover:bg-black/10 px-8 py-4 text-lg"
            onClick={handleCallNow}
          >
            <Phone className="mr-2 w-5 h-5" />
            Call Now: (555) 123-CLOSE
          </Button>
        </div>

        <div className="bg-black/10 rounded-lg p-6 max-w-2xl mx-auto">
          <p className="text-black font-medium mb-2">🔥 Limited Time Offer</p>
          <p className="text-gray-600">
            Book your strategy call this week and get a FREE lead generation audit 
            (normally $1,997) plus our exclusive "7-Figure Closing Scripts" guide.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
