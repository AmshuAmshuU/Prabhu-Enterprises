// components/VisionMissionValue.jsx

import Image from "next/image";
import visionImg from "../../assets/Images/aboutUs/ourvision.png";   // Adjust path
import missionImg from "../../assets/Images/aboutUs/ourmission.png"; // Adjust path
import valueImg from "../../assets/Images/aboutUs/ourvalue.png";    // Adjust path

const VisionMissionValue = () => {
  const cards = [
    {
      title: "Our Vision",
      text: "To become one of the top multi-service enterprises in India, recognized for premium service quality, customer trust, and innovative solutions.",
      img: visionImg,
      bg: "bg-indigo-100",
      reverse: false,
    },
    {
      title: "Our Mission",
      text: "To provide affordable, high-quality, and end-to-end solutions that improve lives, empower businesses, and create lasting value for our clients.",
      img: missionImg,
      bg: "bg-gray-100",
      reverse: true,
    },
    {
      title: "Our Value",
      text: "Integrity in every project\nInnovation that drives results\nTransparency with clients and partners\nExcellence as a standard, not an option",
      img: valueImg,
      bg: "bg-indigo-100",
      reverse: false,
    },
  ];

  return (
    <section className="py-16 flex flex-col items-center space-y-14">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${card.bg} relative w-full max-w-[1000px] rounded-[16px] shadow-lg overflow-hidden flex flex-col lg:flex-row ${card.reverse ? "lg:flex-row-reverse" : ""}`}
          style={{ height: "300px" }}
        >
          {/* Image Section */}
          <div className="relative w-full h-[200px] lg:w-[400px] lg:h-[200px] lg:mt-[50px] lg:ml-[50px] lg:mr-[50px] flex-shrink-0">
            <Image
              src={card.img}
              alt={card.title}
              fill
              className="object-contain lg:object-cover rounded-[16px]"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-6 py-6 lg:px-0">
            <div className="w-full lg:w-[400px]">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-gray-900 mb-2">
                {card.title}
              </h2>
              <p className="text-gray-800 whitespace-pre-line leading-relaxed text-sm sm:text-base max-w-[90%] mx-auto lg:mx-0">
                {card.text}
              </p>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default VisionMissionValue;
