
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
    <section id="testimonials-section" className="bg-gray-100 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Success <span className="text-blue-600">Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our clients say about their transformations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-gray-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Quote className="w-8 h-8 text-blue-500 mb-4" />
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">"{testimonial.content}"</p>
                  
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-blue-500 fill-current" />
                    ))}
                  </div>
                </div>
                
                <div className="border-t border-gray-200 pt-6">
                  <div className="mb-3">
                    <h4 className="text-gray-900 font-semibold text-lg">{testimonial.name}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                  <div className="bg-blue-50 px-3 py-2 rounded-lg border border-blue-200">
                    <p className="text-blue-700 font-semibold text-sm">{testimonial.revenue}</p>
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
