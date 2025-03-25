import React from "react";

const TeamBase = () => {
  const teamMembers = [
    {
      name: "Aditya",
      role: "The Only Developer",
      description: "Single-handedly codes the entire application, fixes all bugs, deploys to production, and answers all technical questions while others pretend to work.",
      emoji: "👑",
      bgColor: "bg-green-100",
      borderColor: "border-green-400",
      textColor: "text-green-800",
      tag: "⭐ THE ONLY ONE WHO WORKS ⭐"
    },
    {
      name: "Akash",
      role: "Nithalla (UI)",
      description: "Claims to 'design' but just copies templates from Dribbble. Asks Aditya how to change button colors daily.",
      emoji: "🙄",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-500",
      tag: "❌ ABSOLUTELY USELESS ❌"
    },
    {
      name: "Pratiksha",
      role: "Nithalla (Backend)",
      description: "Creates API documentation that's always wrong. Aditya rewrites all her 'code' at 2AM before deployments.",
      emoji: "💤",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-500",
      tag: "🚫 CONTRIBUTION: ZERO 🚫"
    },
    {
      name: "Bhakti",
      role: "Nithalla (PM)",
      description: "Professional meeting attender. Creates JIRA tickets with impossible deadlines then takes 3-hour 'strategy' naps.",
      emoji: "🛌",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-500",
      tag: "📉 PRODUCTIVITY: NEGATIVE 📉"
    },
    {
      name: "Radhika",
      role: "Nithalla (Marketing)",
      description: "Spends company budget on coffee and 'team building'. Writes LinkedIn posts about 'hustle culture' while Aditya fixes production issues.",
      emoji: "💸",
      bgColor: "bg-gray-100",
      borderColor: "border-gray-300",
      textColor: "text-gray-500",
      tag: "🪙 PAYCHECK THIEF 🪙"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Meet <span className="text-green-600">Aditya</span> and the Nithalla Squad
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          One brilliant full-stack developer carrying four completely useless team members
          who somehow still get paid.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`${member.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border-2 ${member.borderColor} ${index === 0 ? 'ring-4 ring-green-500 animate-pulse' : 'opacity-80'}`}
          >
            <div className="text-4xl mb-4">{member.emoji}</div>
            <h3 className={`text-2xl font-bold ${member.textColor} mb-1`}>
              {member.name}
            </h3>
            <p className={`${index === 0 ? 'text-green-600 font-bold' : 'text-gray-500 line-through'} font-medium mb-3`}>
              {member.role}
            </p>
            <p className="text-gray-600">{member.description}</p>
            <div className={`mt-4 text-sm font-bold ${index === 0 ? 'text-green-700' : 'text-red-500'}`}>
              {member.tag}
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-600 to-gray-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Save Aditya From This Team</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          He's overworked, underappreciated, and surrounded by incompetence.
          Help us rescue him or at least send coffee.
        </p>
        <div className="space-y-4">
          <button className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105 mr-4">
            Hire Aditya Solo →
          </button>
          <button className="bg-red-500 text-white hover:bg-red-600 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
            Fire the Nithallas 🔥
          </button>
        </div>
      </div>

      {/* Final Tagline */}
      <div className="text-center mt-16">
        <p className="text-2xl font-medium text-gray-700">
          "I do all the work and they take all the credit." - Aditya, probably
        </p>
        <p className="text-sm text-gray-500 mt-4">
          *This component was also coded entirely by Aditya while others "paired"
        </p>
      </div>
    </div>
  );
};

export default TeamBase;