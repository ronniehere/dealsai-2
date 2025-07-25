
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, TrendingUp } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScaleBusinessClick = () => {
    // Scroll to CTA section for booking
    scrollToSection('cta-section');
  };

  const handleSuccessStoriesClick = () => {
    // Scroll to testimonials section
    scrollToSection('testimonials-section');
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-950 via-blue-950 to-black flex items-center justify-center px-4 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 bg-blue-600/10 border border-blue-400/20 rounded-full mb-6">
            <Target className="w-4 h-4 text-blue-400 mr-2" />
            <span className="text-blue-200 text-sm font-medium">Close More Deals. Generate More Leads.</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Turn Prospects Into
            <span className="text-blue-400"> Profit</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            We help businesses, coaches, and online service providers scale their lead generation and master the art of closing deals. 
            From first contact to signed contract.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button 
            size="lg" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 text-lg"
            onClick={handleScaleBusinessClick}
          >
            Scale Your Business Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-blue-400 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg"
            onClick={handleSuccessStoriesClick}
          >
            See Success Stories
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
            <div className="text-gray-400">Deals Closed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">95%</div>
            <div className="text-gray-400">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-400 mb-2">$10M+</div>
            <div className="text-gray-400">Revenue Generated</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
