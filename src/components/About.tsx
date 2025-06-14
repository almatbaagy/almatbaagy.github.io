import React from 'react';
import { Briefcase, GraduationCap, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          {/* <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Bridging the gap between engineering precision and business strategy
          </p> */}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Business Analyst with an engineering background and expertise in marketing, financial modeling, and business planning.
              Skilled in leading cross-functional teams, managing stakeholders, and driving data-driven strategic decisions.
            </p>

            {/* <p className="text-lg text-gray-700 leading-relaxed">
              With hands-on experience in financial modeling, supply chain optimization,
              and advanced analytics, I specialize in creating comprehensive dashboards
              and models that drive strategic decision-making across organizations.
            </p> */}

            {/* <div className="flex items-center space-x-3 text-blue-600">
              <Target className="w-6 h-6" />
              <span className="font-semibold text-lg">Mission: Data-Driven Excellence</span>
            </div> */}
          </div>

          {/* Highlight Cards */}
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
              <div className="flex items-center space-x-3 mb-3">
                <Briefcase className="w-6 h-6 text-blue-600" />
                <h3 className="text-xl font-semibold text-gray-900">Professional Focus</h3>
              </div>
              <p className="text-gray-700">
                Financial modeling, Marketing Analysis, supply chain optimization, and data analytics.
              </p>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200">
              <div className="flex items-center space-x-3 mb-3">
                <GraduationCap className="w-6 h-6 text-teal-600" />
                <h3 className="text-xl font-semibold text-gray-900">Background</h3>
              </div>
              <p className="text-gray-700">
                B.Sc. in Electrical & Computer Engineering, with leadership experience in student racing teams and a strong background in business planning and strategy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;