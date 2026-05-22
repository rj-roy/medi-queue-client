import { Shield, BookOpen, Brain } from 'lucide-react';
import Image from 'next/image';

export default function WhyChoose() {
  const features = [
    {
      icon: Shield,
      title: "Elite Mentors",
      description: "Learn directly from board-certified specialists and top-tier clinical practitioners with decades of experience.",
      iconColor: "text-teal-700",
      iconBg: "bg-teal-100"
    },
    {
      icon: BookOpen,
      title: "Precision Curriculum",
      description: "Evidence-based learning modules designed to reduce cognitive load while maximizing knowledge retention.",
      iconColor: "text-[#8B3A3A]",
      iconBg: "bg-red-100"
    },
    {
      icon: Brain,
      title: "Cognitive Efficiency",
      description: "Our platform uses advanced spatial repetition and active recall methods tailored for medical students.",
      iconColor: "text-indigo-700",
      iconBg: "bg-indigo-100"
    }
  ];

  return (
    <section className="py-25 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Why Choose MediQueue
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Engineered for clinical precision, providing the tools and mentorship required 
            for elite medical professionals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="group p-8 bg-gray-50 rounded-xl border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300 cursor-pointer"
              >
                <div className={`w-14 h-14 ${feature.iconBg} rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed text-sm">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}