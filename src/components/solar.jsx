import { useState } from "react";
import power from "../../public/assets/solar1.jpg";
import model3 from "../../public/assets/solar2.jpg";
import modelz from "../../public/assets/solar3.jpg";
import modely from "../../public/assets/solar4.jpg";
import modelt from "../../public/assets/solar5.jpg";
import left from "../../public/assets/left.png";
import right from "../../public/assets/right.png";

const vehicles = [
  {
    title: "Solar Panels",
    img: model3,
  },
  {
    title: "Solar Roof",
    img: modelt,
  },
  {
    title: "Power Wall",
    img: modely,
  },
  {
    title: "Mega Pack",
    img: modelz,
  },
  {
    title: "Solar Roof",
    img: power,
  },
];

export default function Solar() {
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
            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-20 bg-white rounded w-10 h-10 flex items-center justify-center"
            aria-label="Next"
          >
            <img src={right} alt="" className="w-6 h-6" />
          </button>
        )}

        {/* Left arrow */}
        {current > 0 && (
          <button
            onClick={prev}
            className="absolute cursor-pointer left-3 top-1/2 -translate-y-1/2 z-20 bg-white rounded w-10 h-10 flex items-center justify-center"
            aria-label="Previous"
          >
            <img src={left} alt="" className="w-6 h-6" />
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
