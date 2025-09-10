import Image from "next/image";
import CheckIcon from "../../app/assets/icons/socialMedia/Services/check.png";
import whychoose from "../../app/assets/images/services/whychoose.png";

const points = [
  "Proven Experience",
  "Quality Assurance",
  "End-to-End Solutions",
  "Skilled Team",
  "Transparent Pricing",
  "Nationwide Reach",
  "Modern Innovation",
  "Customer Support",
];

export default function WhyChooseUs() {
  return (
    <section className="px-6 py-16 md:px-20 lg:px-32 bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div>
          <p className="text-blue-600 font-medium mb-3">Why Choose Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built on trust, <span className="text-blue-600">driven by excellence.</span>
          </h2>
          <p className="text-gray-600 mb-8">
            At Prabhu Enterprises, we go beyond delivering services — we
            create experiences that inspire confidence. With expertise across
            industries and a customer-first approach, we ensure quality,
            transparency, and innovation in every project.
          </p>

          {/* Bullet Points */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {points.map((point, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-blue-600 text-white">
                  <Image src={CheckIcon} alt="Check" width={16} height={16} />
                </span>
                <p className="text-gray-800">{point}</p>
              </div>
            ))}
          </div>

          <button className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium px-6 py-2 rounded-md transition">
            READ MORE
          </button>
        </div>

        {/* Right Image */}
        <div className="relative w-full max-w-lg mx-auto">
          <div
            className="absolute -right-6 -top-6 w-[95%] h-[95%] rounded-xl bg-gradient-to-r from-blue-500 to-blue-700"
            aria-hidden="true"
          />
          <div className="relative rounded-xl overflow-hidden shadow-xl">
            <Image
              src={whychoose}
              alt="Office / interior image for why choose us"
              width={700}
              height={460}
              className="object-cover w-full h-auto block"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
