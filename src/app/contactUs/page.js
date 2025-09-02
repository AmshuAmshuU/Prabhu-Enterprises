import Image from "next/image";
import backgroundImage from "../assets/images/contactUs/BackGroundImage.png";

export default function ContactUs() {
  return (
    <section className="relative h-[400px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 text-center">
        <h1 className="text-5xl font-bold text-white">Contact Us</h1>
        <p className="mt-2 text-lg text-gray-200">
          Home / <span className="text-yellow-400">Contact Us</span>
        </p>
      </div>
    </section>
  );
}
