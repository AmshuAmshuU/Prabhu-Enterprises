import Image from "next/image";

import employee1 from "../../app/assets/images/services/employee1.png";
import employee2 from "../../app/assets/images/services/employee2.png";
import employee3 from "../../app/assets/images/services/employee3.png";
import employee4 from "../../app/assets/images/services/employee4.png";
import employee5 from "../../app/assets/images/services/employee5.png";

import FacebookIcon from "../../app/assets/icons/socialMedia/Services/facebook.png";
import TwitterIcon from "../../app/assets/icons/socialMedia/Services/twitter.png";
import InstagramIcon from "../../app/assets/icons/socialMedia/Services/instagram.png";
import LinkedinIcon from "../../app/assets/icons/socialMedia/Services/linkedin.png";

const employees = [employee1, employee2, employee3, employee4, employee5];

export default function TeamSection() {
  return (
    <section className="py-16 px-6 md:px-12 lg:px-24 bg-gray-50">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Text Column */}
        <div>
          <p className="text-sm font-medium text-blue-600">Our Team</p>
          <h2 className="text-4xl font-bold mt-2">
            Meet Our <span className="text-blue-600">Smart People.</span>
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Behind every successful project is a passionate and skilled team.
            Led by our founder, T. Jaya Prabhu, our workforce brings together
            expertise across engineering, design, logistics, events,
            marketing, and customer care — working as one to deliver seamless
            experiences.
          </p>
        </div>

        {/* Employee Cards */}
        {employees.map((emp, idx) => (
          <div key={idx} className="text-center">
            <div className="rounded-lg overflow-hidden shadow-md mb-4">
              <Image
                src={emp}
                alt={`Employee ${idx + 1}`}
                width={380}
                height={260}
                className="object-cover w-full h-full"
              />
            </div>
            <h3 className="mt-2 font-semibold">{`Employee ${idx + 1}`}</h3>
            <p className="text-blue-600">Designation</p>
            <div className="flex justify-center gap-4 mt-2 text-gray-500">
              <a href="#"><Image src={FacebookIcon} alt="Facebook" width={20} height={20} /></a>
              <a href="#"><Image src={TwitterIcon} alt="Twitter" width={20} height={20} /></a>
              <a href="#"><Image src={InstagramIcon} alt="Instagram" width={20} height={20} /></a>
              <a href="#"><Image src={LinkedinIcon} alt="LinkedIn" width={20} height={20} /></a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
