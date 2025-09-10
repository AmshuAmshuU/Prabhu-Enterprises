// components/TeamSection.jsx

import Image from "next/image";
import emp1 from "../../assets/Images/aboutUs/profile.png"; // Adjust paths as needed
import emp2 from "../../assets/Images/aboutUs/profile.png";
import emp3 from "../../assets/Images/aboutUs/profile.png";
import emp4 from "../../assets/Images/aboutUs/profile.png";
import emp5 from "../../assets/Images/aboutUs/profile.png";
import facebook from "../../assets/icons/facebook.png";
import twitter from "../../assets/icons/twitter.png";
import instagram from "../../assets/icons/instagram.png";
import linkedin from "../../assets/icons/linkedin.png";

const TeamSection = () => {
  const employees = [
    { id: 1, name: "Employee 1", designation: "Designation", img: emp1 },
    { id: 2, name: "Employee 2", designation: "Designation", img: emp2 },
    { id: 3, name: "Employee 3", designation: "Designation", img: emp3 },
    { id: 4, name: "Employee 4", designation: "Designation", img: emp4 },
    { id: 5, name: "Employee 5", designation: "Designation", img: emp5 },
  ];

  const socials = [facebook, twitter, instagram, linkedin];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-20">
      <div className="max-w-[1280px] mx-auto"> {/* Constrains width for ultra-wide screens */}

        {/* Row 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start justify-items-center">
          {/* Left Content */}
          <div className="w-full">
            <p className="text-sm text-gray-500">Our Team</p>
            <h2 className="text-2xl sm:text-3xl font-bold mt-2">
              Meet Our <span className="text-blue-600">Smart People.</span>
            </h2>
            <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
              Behind every successful project is a passionate and skilled team. Led by our founder, T.
              Jaya Prabhu, our workforce brings together expertise across engineering, design,
              logistics, events, marketing, and customer care — working as one to deliver seamless
              experiences.
            </p>
          </div>

          {/* Employee 1 & 2 */}
          {employees.slice(0, 2).map((emp) => (
            <div key={emp.id} className="text-center w-full max-w-full sm:max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image
                  src={emp.img}
                  alt={emp.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">{emp.name}</h3>
                  <p className="text-blue-600 text-sm">{emp.designation}</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, i) => (
                    <Image key={i} src={icon} alt="social" width={20} height={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12 justify-items-center">
          {employees.slice(2).map((emp) => (
            <div key={emp.id} className="text-center w-full max-w-full sm:max-w-[300px]">
              <div className="relative w-full pb-[100%]">
                <Image
                  src={emp.img}
                  alt={emp.name}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="text-left">
                  <h3 className="font-semibold">{emp.name}</h3>
                  <p className="text-blue-600 text-sm">{emp.designation}</p>
                </div>
                <div className="flex gap-3">
                  {socials.map((icon, i) => (
                    <Image key={i} src={icon} alt="social" width={20} height={20} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TeamSection;
