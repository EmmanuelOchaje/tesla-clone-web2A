import { useState } from "react";
import power from "../../public/assets/feature1.jpg";
import model3 from "../../public/assets/feature2.jpg";
import modelz from "../../public/assets/feature3.jpg";
import modely from "../../public/assets/feature4.jpg";
import modelt from "../../public/assets/feature5.jpg";

const vehicles = [
  {
    title: "Model 3",
    img: model3,
  },
  {
    title: "Model Y",
    img: modelt,
  },
  {
    title: "Model S",
    img: modely,
  },
  {
    title: "Model X",
    img: modelz,
  },
  {
    title: "Cybertruck",
    img: power,
  },
];

export default function Features() {
  const [current, setCurrent] = useState(0);
  const maxIndex = vehicles.length - 2;

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  return (
    <section className="bg-white py-8 overflow-hidden">
      {/* Slider track */}
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 50}%)` }}
        >
          {vehicles.map((v) => (
            <div
              key={v.title}
              className="min-w-[65%] mx-3 rounded-xl px-1 relative h-110 overflow-hidden"
            >
              {/* Background image */}
              <img
                src={v.img}
                alt={v.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Category badge - top left */}
              {/* Bottom content */}
              <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-20 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                <h3 className="text-white text-[32px] mb-4 font-semibold leading-tight">
                  {v.title}
                </h3>
                <div className="flex gap-3">
                  <button className="bg-[#3e6ae1] text-white text-xs font-medium py-2 px-6 rounded hover:bg-[#2f5ac9]">
                    Order Now
                  </button>
                  <button className="bg-white text-black text-xs font-medium py-2 px-6 rounded ">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right arrow */}
        {current < maxIndex && (
          <button
            onClick={next}
            className="absolute right-3 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 border border-[#e0e0e0] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
            aria-label="Next"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#171a20"
              strokeWidth="2"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        )}

        {/* Left arrow */}
        {current > 0 && (
          <button
            onClick={prev}
            className="absolute left-3 top-1/2 -translate-y-1/2 z-20 bg-white hover:bg-gray-100 border border-[#e0e0e0] rounded-full w-10 h-10 flex items-center justify-center shadow-md transition-all"
            aria-label="Previous"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#171a20"
              strokeWidth="2"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
        )}
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {Array.from({ length: maxIndex + 1 }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              i === current ? "bg-[#171a20]" : "bg-[#171a20]/30"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
