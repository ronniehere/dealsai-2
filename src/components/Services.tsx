
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Zap, MessageCircle, BarChart3, Brain, Rocket } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: <Users className="w-12 h-12 text-blue-400" />,
      title: "Life & Business Coaches",
      description: "Transform your coaching practice with proven lead generation strategies and closing techniques that convert prospects into premium clients.",
      benefits: ["Social media lead funnels", "High-ticket closing scripts", "Client retention systems"]
    },
    {
      icon: <Zap className="w-12 h-12 text-blue-400" />,
      title: "Fitness Professionals",
      description: "Scale your fitness business beyond one-on-one training with automated lead systems and consultation-to-sale conversion processes.",
      benefits: ["Online program sales", "Membership conversions", "Referral systems"]
    },
    {
      icon: <MessageCircle className="w-12 h-12 text-blue-400" />,
      title: "Online Service Businesses",
      description: "Multiply your service business revenue with scalable lead generation and systematic sales processes that work 24/7.",
      benefits: ["Automated lead qualification", "Service package optimization", "Recurring revenue models"]
    },
    {
      icon: <BarChart3 className="w-12 h-12 text-blue-400" />,
      title: "B2B Sales Teams",
      description: "Empower your sales team with advanced closing techniques and lead generation systems that consistently hit quotas.",
      benefits: ["Team training programs", "Sales funnel optimization", "CRM integration"]
    },
    {
      icon: <Brain className="w-12 h-12 text-blue-400" />,
      title: "Consultants & Agencies",
      description: "Position yourself as the go-to expert in your niche with our proven client acquisition and retention strategies.",
      benefits: ["Authority building", "Premium pricing strategies", "Client acquisition funnels"]
    },
    {
      icon: <Rocket className="w-12 h-12 text-blue-400" />,
      title: "Startups & Entrepreneurs",
      description: "Fast-track your business growth with scalable sales systems and lead generation strategies that fuel rapid expansion.",
      benefits: ["Growth hacking techniques", "Investor pitch optimization", "Market penetration strategies"]
    }
  ];

  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Who We <span className="text-blue-400">Serve</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            From coaches to consultants, we've helped businesses across industries 
            transform their sales processes and scale their revenue.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-gray-800 border-gray-700 hover:border-blue-400/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl">
              <CardHeader className="text-center pb-4">
                <div className="mx-auto mb-4">{service.icon}</div>
                <CardTitle className="text-white text-xl mb-3">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-6 text-center">{service.description}</p>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-gray-300 text-sm flex items-center">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
