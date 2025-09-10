import Image from "next/image";
import backgroundImage from "../../app/assets/images/services/backGround.png";

export default function HeroSection() {
  return (
    <section className="relative h-[300px] flex items-center justify-center">
      <Image
        src={backgroundImage}
        alt="Services background"
        fill
        className="object-cover brightness-50"
        priority
      />
      <div className="relative z-10 text-center">
        <h1 className="text-4xl font-bold text-white mb-2">Our Services</h1>
        <p className="text-sm text-gray-200">
          Home / <span className="text-white">Services</span>
        </p>
      </div>
    </section>
  );
}
