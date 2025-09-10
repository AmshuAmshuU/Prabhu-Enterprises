// components/CTASection.jsx

import Image from "next/image";
import bgImg from "../../assets/Images/aboutUs/aboutcta.png"; // Adjust the path accordingly

const CTASection = () => {
  return (
    <section className="relative overflow-hidden mx-auto my-12 w-full px-4 sm:px-6 lg:px-8 max-w-[1173px] rounded-[16px]">
      <div className="relative w-full rounded-[16px] overflow-hidden bg-black/40">
        {/* Background Image */}
        <Image
          src={bgImg}
          alt="CTA Background"
          fill
          className="object-cover rounded-[16px]"
          priority
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-12 text-white py-12 sm:py-16 md:py-20">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-[28px] font-extrabold mb-3 sm:mb-4 max-w-2xl">
            Request a Customized Solution for Your Business!
          </h2>
          <p className="text-sm sm:text-base md:text-lg mb-4 sm:mb-6 max-w-2xl">
            Every business is unique. Request a tailored solution crafted specifically for your organization’s challenges and goals.
          </p>
          <button className="bg-yellow-400 text-black font-semibold px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-yellow-500 transition text-sm sm:text-base">
            CONTACT US
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
