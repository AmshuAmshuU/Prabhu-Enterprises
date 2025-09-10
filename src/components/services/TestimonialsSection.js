import Image from "next/image";

import ProfileIcon from "../../app/assets/icons/socialMedia/Services/profile.png";
import StarIcon from "../../app/assets/icons/socialMedia/Services/Star.png";
import EmptyStarIcon from "../../app/assets/icons/socialMedia/Services/emptyStar.png";

const testimonials = [
  {
    name: "Person 1",
    role: "Designation",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    image: ProfileIcon,
  },
  {
    name: "Person 2",
    role: "Designation",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: ProfileIcon,
  },
  {
    name: "Person 3",
    role: "Designation",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    image: ProfileIcon,
  },
];

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-indigo-600 font-medium mb-2">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-extrabold mb-12">
          What our customers are saying about us?
        </h2>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 flex flex-col items-start text-left"
            >
              {/* Profile */}
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{t.name}</h3>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Image
                    key={i}
                    src={i < t.rating ? StarIcon : EmptyStarIcon}
                    alt={i < t.rating ? "Star" : "Empty Star"}
                    width={20}
                    height={20}
                  />
                ))}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed">{t.feedback}</p>
            </div>
          ))}
        </div>

        {/* Slider dots */}
        <div className="flex justify-center gap-2 mt-8">
          <span className="w-3 h-3 rounded-full bg-gray-400"></span>
          <span className="w-3 h-3 rounded-full bg-gray-200"></span>
        </div>
      </div>
    </section>
  );
}
