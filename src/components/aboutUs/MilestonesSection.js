// components/MilestonesSection.js

import Image from "next/image";
import milestone1 from "../../assets/Images/aboutUs/mile1.png"; // Adjust the path as needed
import milestone2 from "../../assets/Images/aboutUs/mile2.png";
import milestone3 from "../../assets/Images/aboutUs/mile3.png";
import milestone4 from "../../assets/Images/aboutUs/mile4.png";

const milestones = [
  {
    id: 1,
    image: milestone1,
    title: "10+ years of proven industry experience",
  },
  {
    id: 2,
    image: milestone2,
    title: "500+ projects delivered successfully",
  },
  {
    id: 3,
    image: milestone3,
    title: "PAN India presence with local support",
  },
  {
    id: 4,
    image: milestone4,
    title: "Recognized ISO-certified company",
  },
];

function MilestonesSection() {
  return (
    <section className="px-6 sm:px-12 py-16 bg-white">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium">Achievements</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black">
          Milestones We’re Proud Of
        </h2>
        <p className="text-gray-600 mt-2">
          Delivering consistent excellence across India for over a decade.
        </p>
      </div>

      {/* Milestones Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-items-center">
        {milestones.map(function(m) {
          return (
            <div key={m.id} className="text-center w-full max-w-[500px]">
              <div className="relative h-[280px] w-full aspect-[5/2]">
                <Image
                  src={m.image}
                  alt={m.title}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>
              <p className="mt-4 font-semibold text-black text-center">
                {m.title}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default MilestonesSection;
