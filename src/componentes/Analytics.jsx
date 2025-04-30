import React, { useRef } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { ChevronDown, Plus } from "lucide-react";

const data = [
  { name: "Mar 1", visitors: 400 },
  { name: "Mar 5", visitors: 1200 },
  { name: "Mar 10", visitors: 800 },
  { name: "Mar 15", visitors: 500 },
  { name: "Mar 20", visitors: 1800 },
  { name: "Mar 25", visitors: 900 },
  { name: "Mar 30", visitors: 1500 },
];

function Analytics() {
  const demographicsRef = useRef(null);

  const handleDemographicsClick = () => {
    if (window.innerWidth < 1024 && demographicsRef.current) {
      // If mobile (< 1024px), smooth scroll to Demographics
      demographicsRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="space-y-8 mt-20">

      {/* Top Tabs */}
      <div className="flex items-center justify-between flex-wrap gap-4 border-b border-gray-700 pb-4">
        <div className="flex space-x-8">
          <button
            className="text-white font-semibold pb-2 border-b-2 border-white"
          >
            Overview
          </button>
          <button
            onClick={handleDemographicsClick}
            className="text-gray-400 hover:text-white pb-2"
          >
            Demographics
          </button>
        </div>
      </div>

      {/* Overview Section */}
      <div className="flex flex-col lg:flex-row gap-8">
        
        {/* Visitors Graph */}
        <div className="flex-1 bg-[#1E1E1E] rounded-lg p-6 space-y-4">
          {/* same Visitors Graph content */}
          <div className="flex flex-col sm:flex-row justify-between items-center sm:items-start">
            <div className="space-y-2">
              <p className="text-sm text-gray-400 flex items-center gap-2">
                Visitors
                <span className="flex items-center gap-1 bg-[#3A3A3A] px-2 py-1 rounded text-xs">
                  Last 30 days <ChevronDown size={14} />
                </span>
              </p>
              <p className="text-3xl font-bold">13.49K</p>
            </div>
            <div className="flex items-center gap-2 mt-4 sm:mt-0">
              <button className="bg-[#4A4A4A] hover:bg-[#5A5A5A] p-2 rounded">
                <Plus size={18} />
              </button>
              <p className="text-green-400 text-sm">+469% (897)</p>
            </div>
          </div>

          <div className="h-60 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data}>
                <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                <XAxis dataKey="name" stroke="#ccc" fontSize={12} />
                <YAxis stroke="#ccc" domain={[0, 2000]} fontSize={12} />
                <Tooltip contentStyle={{ backgroundColor: "#1E1E1E", borderColor: "#333" }} />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#4ade80"
                  strokeWidth={3}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Insights */}
        <div className="w-full lg:w-1/3 bg-[#1E1E1E] rounded-lg p-6 space-y-6">
          <h2 className="text-xl font-bold">Insights</h2>
          <div className="space-y-4">
            {[{ title: "Founders", value: "7.4K", change: "+0.00%" },
              { title: "Investors", value: "6.09K", change: "+0.00%" }].map((insight, idx) => (
              <div key={idx} className="space-y-1">
                <p className="text-sm text-gray-400">{insight.title}</p>
                <p className="text-2xl font-bold">{insight.value}</p>
                <p className="text-green-400 text-xs">{insight.change} (000)</p>
              </div>
            ))}
          </div>
          <div className="text-blue-400 text-sm hover:underline cursor-pointer mt-4">
            View detailed insights →
          </div>
        </div>
      </div>

      {/* Demographics Section */}
      <div ref={demographicsRef} className="bg-[#1E1E1E] rounded-lg p-6 space-y-6">
        <h2 className="text-xl font-bold mb-6">Demographics</h2>
        
        {/* Map + Country Percentages same as before */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Map */}
          <div className="w-full lg:w-1/2 relative h-72 bg-[#2A2A2A] rounded-lg overflow-hidden">
            <img
              src="https://www.shutterstock.com/image-vector/vector-world-map-square-pixels-260nw-363581420.jpg"
              alt="World Map"
              className="w-full h-full object-cover opacity-10"
            />
            {/* Map Dots */}
            <div className="absolute inset-0">
              {[{ top: "48%", left: "60%", color: "bg-blue-500" },
                { top: "35%", left: "20%", color: "bg-orange-400" },
                { top: "30%", left: "18%", color: "bg-red-400" },
                { top: "50%", left: "65%", color: "bg-cyan-400" }
              ].map((dot, idx) => (
                <React.Fragment key={idx}>
                  <div className={`absolute w-4 h-4 ${dot.color} rounded-full border-2 border-white animate-ping`}
                    style={{ top: dot.top, left: dot.left }} />
                  <div className={`absolute w-2 h-2 ${dot.color} rounded-full`}
                    style={{ top: dot.top, left: dot.left }} />
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Country Percentages */}
          <div className="w-full lg:w-1/2 space-y-6">
            {[{ name: "India", percent: 40, color: "bg-blue-500" },
              { name: "USA", percent: 25, color: "bg-orange-400" },
              { name: "Canada", percent: 10, color: "bg-red-400" },
              { name: "UAE", percent: 7, color: "bg-cyan-400" }
            ].map((country, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${country.color} rounded-full`} />
                    <p className="text-sm">{country.name}</p>
                  </div>
                  <p className="text-sm">{country.percent}%</p>
                </div>
                <div className="w-full bg-gray-700 h-2 rounded-full">
                  <div
                    className={`${country.color} h-2 rounded-full`}
                    style={{ width: `${country.percent}%` }}
                  />
                </div>
              </div>
            ))}
            <div className="text-blue-400 text-sm hover:underline cursor-pointer mt-4">
              View all countries →
            </div>
          </div>

        </div>
        {/* Color Legend */}
        <div className="flex flex-wrap gap-4 mb-6">
          {[{ name: "India", color: "bg-blue-500" },
            { name: "USA", color: "bg-orange-400" },
            { name: "Canada", color: "bg-red-400" },
            { name: "UAE", color: "bg-cyan-400" }
          ].map((item, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <div className={`w-4 h-4 ${item.color} rounded-full`} />
              <p className="text-sm text-gray-300">{item.name}</p>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
}

export default Analytics;
