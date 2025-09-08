// app/components/ServiceHeader.js
import Image from "next/image";
import bgImage from "../../assets/images/servicedeatils/banner.png"

export default function ServiceHeader() {
  return (
    <div className="relative bg-blue-600 text-white">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Service Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-blue-900/70" /> {/* Blue overlay */}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center py-20 px-6">
        <h1 className="text-4xl md:text-5xl font-bold">Service Details</h1>
        <p className="mt-4 text-sm md:text-base">
          <span className="text-gray-200">Home / Services /</span>{" "}
          <span className="text-blue-300 font-semibold">
            Strategic Planning Services
          </span>
        </p>
      </div>
    </div>
  );
}
