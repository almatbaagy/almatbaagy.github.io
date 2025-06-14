import React from 'react';
import { Database, BarChart3, Calculator, Code, PieChart, TrendingUp } from 'lucide-react';

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  color: string;
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    { name: "Excel", level: 95, icon: <Calculator className="w-5 h-5" />, color: "bg-green-500" },
    { name: "Tableau", level: 90, icon: <BarChart3 className="w-5 h-5" />, color: "bg-blue-500" },
    { name: "SQL", level: 85, icon: <Database className="w-5 h-5" />, color: "bg-purple-500" },
    { name: "Python", level: 80, icon: <Code className="w-5 h-5" />, color: "bg-yellow-500" },
    { name: "KNIME", level: 88, icon: <PieChart className="w-5 h-5" />, color: "bg-orange-500" },
    { name: "Data Visualization", level: 92, icon: <TrendingUp className="w-5 h-5" />, color: "bg-teal-500" }
  ];

  const categories = [
    {
      title: "Analytics Tools",
      items: ["Excel", "Tableau","Power BI", "KNIME", "Python"],
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: "Business Skills",
      items: ["Financial Modeling","Marketing Strategies", "Supply Chain Optimization", "Business Planning", "Strategic Analysis"],
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: "Technical Skills",
      items: ["SQL", "Data Visualization", "Statistical Analysis"],
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Tools & Skills
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Proficient in modern analytics tools and business intelligence platforms
          </p>
        </div>

        {/* Skill Proficiency Bars */}
        {/* <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Technical Proficiency
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <div className="p-2 bg-white rounded-lg shadow-sm">
                      {skill.icon}
                    </div>
                    <span className="font-semibold text-gray-900">{skill.name}</span>
                  </div>
                  <span className="text-gray-600 font-medium">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className={`${skill.color} h-3 rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Skill Categories */}
        <div className="grid md:grid-cols-3 gap-8">
          {categories.map((category, index) => (
            <div key={index} className="text-center">
              <div className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center shadow-lg`}>
                <BarChart3 className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;