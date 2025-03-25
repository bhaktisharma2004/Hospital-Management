import React from "react";

const TeamBase = () => {
  const teamMembers = [
    {
      name: "Aditya",
      role: "The Tech Architect",
      description: "The mastermind behind Medisphere's robust, scalable, and secure digital framework.",
      emoji: "💻",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Akash",
      role: "The UI/UX Innovator",
      description: "Designing an intuitive, sleek, and seamless experience for all users.",
      emoji: "🎨",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Pratiksha",
      role: "The Backend Engineer",
      description: "Ensuring smooth integrations, data security, and system efficiency.",
      emoji: "⚙️",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    },
    {
      name: "Bhakti",
      role: "The Workflow Optimizer",
      description: "Streamlining operations to make hospital management faster and error-free.",
      emoji: "🚀",
      bgColor: "bg-green-50",
      borderColor: "border-green-200"
    },
    {
      name: "Radhika",
      role: "The Growth Strategist",
      description: "Expanding Medisphere's reach to healthcare institutions worldwide.",
      emoji: "🌍",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      {/* Header Section */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Meet the Team Behind <span className="text-green-700">Medisphere</span>
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          The driving force behind Medisphere is a passionate team of innovators,
          developers, and strategists, dedicated to transforming healthcare management.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        {teamMembers.map((member, index) => (
          <div 
            key={index}
            className={`${member.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 border ${member.borderColor}`}
          >
            <div className="text-4xl mb-4">{member.emoji}</div>
            <h3 className="text-2xl font-bold text-gray-800 mb-1">
              {member.name}
            </h3>
            <p className="text-green-600 font-medium mb-3">{member.role}</p>
            <p className="text-gray-600">{member.description}</p>
          </div>
        ))}
      </div>

      {/* Call to Action Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-2xl p-8 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Join the Medisphere Revolution</h2>
        <p className="text-xl mb-6 max-w-3xl mx-auto">
          Say hello to hassle-free hospital management and embrace a smarter, faster,
          and more efficient way to run your healthcare facility.
        </p>
        <p className="text-2xl font-semibold mb-8">Ready to transform your hospital?</p>
        <button className="bg-white text-green-700 hover:bg-gray-100 px-8 py-3 rounded-full font-bold text-lg shadow-lg transition-all duration-300 transform hover:scale-105">
          Get Started with Medisphere Today →
        </button>
      </div>

      {/* Final Tagline */}
      <div className="text-center mt-16">
        <p className="text-2xl font-medium text-gray-700">
          Together, we are building the future of hospital management!
        </p>
      </div>
    </div>
  );
};

export default TeamBase;