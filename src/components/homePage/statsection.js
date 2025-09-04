"use client";

import CountUp from "react-countup";

const stats = [
  { id: 1, value: 500, suffix: "+", label: "Satisfied Customers" },
  { id: 2, value: 10, suffix: "+", label: "Years Experience" },
  { id: 3, value: 20, suffix: "+", label: "Branch Office" },
  { id: 4, value: 40, suffix: "+", label: "Projects Completed" },
];

export default function StatsSection() {
  return (
    <section className="bg-[#1c1c1c] w-full py-6">
      <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className={`text-white px-2 sm:px-4 py-4 ${
              index !== stats.length - 1 ? "border-r border-gray-700" : ""
            }`}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              <CountUp end={stat.value} duration={3} />
              {stat.suffix}
            </h3>
            <p className="text-gray-300 text-xs sm:text-sm md:text-base">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
