"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

// 👉 Import profile images
import person1 from "../../assets/Images/profile.png";
import person2 from "../../assets/Images/profile.png";
import person3 from "../../assets/Images/profile.png";
import person4 from "../../assets/Images/profile.png";
import person5 from "../../assets/Images/profile.png";

// 👉 Import star icons
import starFilled from "../../assets/icons/starticon.png";
import starOutline from "../../assets/icons/staricon2.png";

const testimonials = [
  {
    id: 1,
    name: "Person 1",
    designation: "Designation",
    feedback:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna.",
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
    <section className="px-6 sm:px-12 py-16">
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
        pagination={{ clickable: true }}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {testimonials.map((t) => (
          <SwiperSlide key={t.id} className="flex">
           <div className="bg-white shadow-md rounded-xl p-6 flex flex-col gap-4 h-[150px] flex-1">
              {/* Profile */}
              <div className="flex items-center gap-3">
                <Image
                  src={t.image}
                  alt={t.name}
                  width={50}
                  height={50}
                  className="rounded-full object-cover"
                />

                <div className="w-full">
                  {/* Name + Stars on same line */}
                  <div className="flex items-center justify-between w-full">
                    <h4 className="font-semibold">{t.name}</h4>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Image
                          key={i}
                          src={i < t.rating ? starFilled : starOutline}
                          alt="star"
                          width={16}
                          height={16}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Designation below */}
                  <p className="text-sm text-blue-600">{t.designation}</p>
                </div>
              </div>

              {/* Feedback */}
              <p className="text-gray-600 text-sm leading-relaxed overflow-hidden text-ellipsis line-clamp-5">
    {t.feedback}
  </p>
</div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom dots styling */}
      <style jsx global>{`
        .swiper-pagination {
          bottom: 0 !important;
          margin-top: 20px;
          position: relative;
        }
        .swiper-pagination-bullet {
          background: #94a3b8 !important; /* slate-400 */
          opacity: 0.6;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #111 !important;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </section>
  );
}
