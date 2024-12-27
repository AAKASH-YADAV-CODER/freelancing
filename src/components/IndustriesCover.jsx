import React from "react";
import {
  FaLaptop,
  FaDna,
  FaMoneyBillWave,
  FaHeartbeat,
  FaTruck,
  FaBriefcase,
  FaCogs,
  FaBullhorn,
} from "react-icons/fa";

const industries = [
  {
    name: "Tech & IT",
    icon: <FaLaptop />,
    description:
      "Explore roles in software development, cybersecurity, and IT services.",
    companies: ["TechCorp", "InnoTech", "CodeWorks"],
    color: "bg-blue-500",
  },
  {
    name: "Biotechnology",
    icon: <FaDna />,
    description:
      "Work in cutting-edge genetic research and biopharma innovation.",
    companies: ["BioGen", "GenomeX", "PharmaLife"],
    color: "bg-green-500",
  },
  {
    name: "Finance & Accounts",
    icon: <FaMoneyBillWave />,
    description:
      "Dive into financial analysis, accounting, and investment banking.",
    companies: ["FinPlus", "MoneyTree", "LedgerPro"],
    color: "bg-yellow-500",
  },
  {
    name: "Healthcare & Pharmaceuticals",
    icon: <FaHeartbeat />,
    description:
      "Contribute to improving lives through medical and pharma roles.",
    companies: ["MediCare", "HealthPro", "PharmaGen"],
    color: "bg-red-500",
  },
  {
    name: "Logistics & Supply Chain",
    icon: <FaTruck />,
    description:
      "Optimize operations in logistics, transport, and supply chain management.",
    companies: ["LogiTech", "FastMove", "ChainLink"],
    color: "bg-orange-500",
  },
  {
    name: "Management & Service Sectors",
    icon: <FaBriefcase />,
    description: "Pursue leadership roles in diverse service industries.",
    companies: ["ManagePro", "Service360", "BizLeaders"],
    color: "bg-purple-500",
  },
  {
    name: "Manufacturing",
    icon: <FaCogs />,
    description:
      "Be part of production and innovation in manufacturing industries.",
    companies: ["Industro", "GearWorks", "ManuTech"],
    color: "bg-gray-500",
  },
  {
    name: "Media & Communication",
    icon: <FaBullhorn />,
    description: "Engage in creative roles across media and public relations.",
    companies: ["MediaHub", "CommSphere", "BroadCastPro"],
    color: "bg-pink-500",
  },
];

const IndustriesCover = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center py-10">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        Industries Covered
      </h1>
      <p className="text-lg text-gray-600 mb-10">
        Explore opportunities across 8 dynamic industries:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 max-w-7xl">
        {industries.map((industry, index) => (
          <div
            key={index}
            className={`relative group p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 ${industry.color} text-white`}
          >
            <div className="flex flex-col items-center">
              <div className="text-4xl mb-4">{industry.icon}</div>
              <h2 className="text-xl font-semibold">{industry.name}</h2>
            </div>
            <div className="absolute inset-0 bg-gray-900 rounded-lg  text-white opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-center items-center p-4">
              <p className="text-center mb-4">{industry.description}</p>
              <ul className="text-sm">
                {industry.companies.map((company, i) => (
                  <li key={i}>&bull; {company}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesCover;
