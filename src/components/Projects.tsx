import React from 'react';
import { ExternalLink, Github, Calculator, Globe, BarChart3 } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  gradient: string;
  borderColor: string;
  image?: string;  // Optional image field
  github?: string; // Optional GitHub link
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      title: "E-Wheels Business Analysis",
      description: "Structured financial model for E-Wheels, a startup focused on electric Tuktuk conversions.",
      details: "Includes cost structure, revenue modeling, profit margin analysis, and financial forecasts using Excel.",
      icon: <Calculator className="w-8 h-8" />,
      gradient: "from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      image: "/images/ewheels.png", // Example image
      github: "https://github.com/almatbaagy/Ewheels-Business-Analysis"
    },
    {
      title: "Global Temperature Analysis with KNIME",
      description: "Used KNIME to clean, analyze, and visualize global climate trends across 270+ years.",
      details: "Output includes country classification, deviation from global averages, and trend plots.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-orange-100 to-pink-200",
      borderColor: "border-blue-200",
      image: "/images/knime.png", // Example image
      github: "https://github.com/almatbaagy/knime-global-temperature-analysis"
    },
    {
      title: "Pampers Supply Chain Case Study",
      description: "Securing raw material for product launch and factory production optimization with AI and Machine Learning Strategies.",
      details: "Used Excel, Powerpoint and Business Strategy Frameworks.",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-100 to-violet-200",
      borderColor: "border-blue-200",
      image: "/images/pampers.png", // Example image
      github: "https://github.com/almatbaagy/pampers-supply-case-study-"
    },
    {
      title: "Startup Financial Dashboard & Projections",
      description: "Used to analyze and forecast startup business performance.",
      details: " Includes a Power BI dashboard and Excel sheet for financial projections.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-blue-100 to-cyan-200",
      borderColor: "border-purple-200",
      image: "/images/dashboard.png", // Example image
      github: "https://github.com/almatbaagy/Startup-Financial-Dashboard-Projections"
    },
    {
      title: "HR Absenteeism Insights",
      description: "Used to analyzes employee absenteeism to help HR teams identify key metrics, model bonus eligibility and support data-driven decisions.",
      details: " Tools: sql and Power BI.",
      icon: <BarChart3 className="w-8 h-8" />,
      gradient: "from-orange-100 to-yellow-100",
      borderColor: "border-purple-200",
      image: "/images/hr.png", // Example image
      github: "https://github.com/almatbaagy/HR-Absenteeism-Insights"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Showcasing real-world applications of data analysis and business intelligence
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${project.gradient} p-6 rounded-xl border ${project.borderColor} hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group relative`}
            >
              <div className="flex items-center space-x-3 mb-4">
                <h3 className="text-lg font-semibold text-gray-900">{project.title}</h3>
              </div>

              {/* Image that dims on hover */}
              <div className="mb-4 relative overflow-hidden rounded-lg">
                <img
                  src={project.image} // Add image src here
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg opacity-100 group-hover:opacity-30 transition-opacity duration-300 z-0"
                />
              </div>

              {/* Text that appears in front of the image */}
              <div className="absolute inset-0 z-10 flex flex-col justify-center items-center opacity-0 group-hover:opacity-100 visibility-hidden group-hover:visible transition-all duration-300">
                <p className="text-black-700 font-semibold mb-3 leading-relaxed text-center">{project.description}</p>
                <p className="text-gray-600 font-semibold text-sm mb-6 text-center">{project.details}</p>
              </div>

              {/* GitHub Repo Link */}
              <div className="flex items-center justify-between">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 z-10"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub Repo</span>
                </a>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 transition-colors duration-200" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">Want to see more of my work?</p>
          <a
            href={'https://github.com/almatbaagy'}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 z-10"
          >
            <button className="inline-flex items-center space-x-2 bg-gray-900 hover:bg-gray-800 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105">
              <Github className="w-5 h-5" />
              <span>View All Projects</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
