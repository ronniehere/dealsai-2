
import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      role: "Life Coach",
      company: "Mindful Growth Coaching",
      content: "Closers AI transformed my coaching business completely. I went from struggling to find clients to having a 6-month waiting list. Their lead generation system is pure gold.",
      rating: 5,
      revenue: "+300% revenue increase"
    },
    {
      name: "Marcus Rodriguez",
      role: "Fitness Entrepreneur",
      company: "Elite Fitness Solutions",
      content: "The closing techniques they taught me are incredible. I'm now converting 85% of my consultation calls into high-ticket clients. Best investment I've ever made.",
      rating: 5,
      revenue: "$250K in 90 days"
    },
    {
      name: "Jennifer Park",
      role: "Business Consultant",
      company: "Strategic Growth Partners",
      content: "Their B2B lead generation system helped us scale from $50K to $500K annual revenue in just 8 months. The ROI speaks for itself.",
      rating: 5,
      revenue: "10x revenue growth"
    }
  ];

  return (
    <section id="testimonials-section" className="bg-gray-850 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Success <span className="text-blue-400">Stories</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400/50 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-400 mb-4" />
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-400 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6">
                  <div className="mb-3">
                    <h4 className="text-white font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-300">{testimonial.role}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="bg-blue-600/20 px-3 py-2 rounded-lg border border-blue-400/30">
                    <p className="text-blue-300 font-semibold text-sm">{testimonial.revenue}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
