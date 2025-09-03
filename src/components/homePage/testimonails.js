"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { FaStar, FaRegStar } from "react-icons/fa";
import Image from "next/image";

// 👉 Import images directly from assets
import person1 from "../../assets/Images/profile.png";
import person2 from "../../assets/Images/profile.png";
import person3 from "../../assets/Images/profile.png";
import person4 from "../../assets/Images/profile.png";
import person5 from "../../assets/Images/profile.png";

const testimonials = [
  {
    id: 1,
    name: "Person 1",
    designation: "Designation",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4,
    image: person1,
  },
  {
    id: 2,
    name: "Person 2",
    designation: "Designation",
    feedback:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
    image: person2,
  },
  {
    id: 3,
    name: "Person 3",
    designation: "Designation",
    feedback:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4,
    image: person3,
  },
  {
    id: 4,
    name: "Person 4",
    designation: "Designation",
    feedback:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 3,
    image: person4,
  },
  {
    id: 5,
    name: "Person 5",
    designation: "Designation",
    feedback:
      "Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Nulla porttitor accumsan tincidunt.",
    rating: 5,
    image: person5,
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 sm:px-12 pt-16 pb-6">
      {/* Heading */}
      <div className="text-center mb-12">
        <p className="text-blue-600 font-medium">Testimonials</p>
        <h2 className="text-3xl md:text-4xl font-bold">
          What our customers are saying about us?
        </h2>
      </div>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        grabCursor={true} // 👉 makes it draggable
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-10" // reduced padding for dots
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id}>
            <div className="bg-white shadow-md rounded-lg p-6 flex flex-col gap-4 items-start">
              {/* Profile */}
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{t.name}</h4>
                  <p className="text-sm text-blue-600">{t.designation}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) =>
                  i < t.rating ? <FaStar key={i} /> : <FaRegStar key={i} />
                )}
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {t.feedback}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Extra styling for dots */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important; /* 👈 keeps dots inside swiper, no extra white space */
        }
        .swiper-pagination-bullet {
          background: #94a3b8 !important; /* Tailwind slate-400 */
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #facc15 !important; /* Tailwind yellow-400 */
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
