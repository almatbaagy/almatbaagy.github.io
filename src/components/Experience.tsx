const experiences = [
  {
    role: "Marketing Strategist",
    company: "Mashreq for Energy Systems",
    date: "Sep 2024 – Jan 2025",
    details: [
      "Developed market research, competitive analysis reports and pricing strategies to optimize product-market fit",
      "Developed marketing campaigns, improving customer segmentation and increasing engagement ",
      "Managed company branding, creating content, filming and producing promotional reels",
    ],
  },
  {
    role: "2nd Place Winner – P&G Case Study",
    company: "P&G Winter Summit 2024",
    date: "Nov 2024",
    details: [
      "Analyzed and optimized Pampers' diaper supply chain, solving critical raw material shortages and production capacity constraints for product launch",
      "Redesigned factory operating profiles, increasing production output during peak demand months",
      "Presented findings to P&G executives, earning 2nd place among 14+ competing teams",
    ],
  },
  {
    role: "Team Leader - Shell Eco-marathon",
    company: "Menofia Racing Team",
    date: "Aug 2024 – Mar 2025",
    details: [
      "Led the team to design, optimize, and manufacture prototype EV with Agile-inspired workflows",
      "Secured and managed 850K EGP budget, allocating resources across R&D, manufacturing, and logistics",
      "Coordinated international logistics: visas, car shipping, and accommodation",
    ],
  },
  {
    role: "Vice President & Business Planning Head - Formula Student UK",
    company: "Menofia Racing Team",
    date: "Aug 2024 – Mar 2025",
    details: [
      "Led strategic planning and secured $6,000+ in sponsorships through investor pitches",
      "Recruited 100+ members across 3 campaigns and improved team performance with tracking systems",
      "Organized 'The Next Generation' event: For training 80+ junior engineers in EVs and business modeling",
      "Launched two startup plans (E-Wheels, MAEV Tech) with full go-to-market, financial, and competitive analysis, Winning 1st Place – EVER V 2024 Business Plan Pitch",
      "Developed detailed cost reports and bill of materials for Formula Student UK 2023",
      "Created manufacturing scaling plan covering (Materials selection, procurement strategy, Labor optimization, cycle time analysis, Capital investment, ROI, Risk assessment)",
    ],
  },
];

export default function Experience() {
  return (
    <section className="py-16 px-4 bg-gray-50" id="experience">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <div key={i} className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-2">
                <div>
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-sm text-gray-500">{exp.company}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.date}</span>
              </div>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                {exp.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
