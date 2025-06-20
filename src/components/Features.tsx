
import { CheckCircle, DollarSign, Clock, Users } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8 text-yellow-500" />,
      title: "Proven ROI Systems",
      description: "Our clients typically see 3-5x ROI within 90 days of implementation"
    },
    {
      icon: <Clock className="w-8 h-8 text-yellow-500" />,
      title: "Rapid Implementation",
      description: "Get your new sales systems up and running in as little as 2 weeks"
    },
    {
      icon: <Users className="w-8 h-8 text-yellow-500" />,
      title: "24/7 Support",
      description: "Dedicated support team available around the clock for your success"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-500" />,
      title: "Results Guaranteed",
      description: "We stand behind our work with performance guarantees and success metrics"
    }
  ];

  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Why Choose <span className="text-yellow-500">Closers AI</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We don't just teach theory. We implement proven systems that generate real results for real businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center group">
              <div className="mb-6 flex justify-center">
                <div className="p-4 bg-yellow-500/10 rounded-full group-hover:bg-yellow-500/20 transition-colors duration-300">
                  {feature.icon}
                </div>
              </div>
              <h3 className="text-white text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
