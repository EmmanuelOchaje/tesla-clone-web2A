import { useState, useRef } from "react";
import power from "../../public/assets/power.jpg";
import model3 from "../../public/assets/models.jpg";
import modelz from "../../public/assets/modelz.jpg";
import modely from "../../public/assets/modely.jpg";
import modelt from "../../public/assets/modelt.jpg";
import left from "../../public/assets/left.png";
import right from "../../public/assets/right.png";

const vehicles = [
  { title: "Model 3", category: "Sport Sedan", img: model3 },
  { title: "Model Y", category: "Midsize SUV", img: modelt },
  { title: "Model S", category: "Plaid Sedan", img: modely },
  { title: "Model X", category: "Plaid SUV", img: modelz },
  { title: "Cybertruck", category: "Pickup Truck", img: power },
];

export default function VehicleSlider() {
  const [current, setCurrent] = useState(0);
  const maxIndex = vehicles.length - 2;
  const touchStartX = useRef(null);

  const prev = () => setCurrent((c) => Math.max(c - 1, 0));
  const next = () => setCurrent((c) => Math.min(c + 1, maxIndex));

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) next();
    else if (diff < -50) prev();
    touchStartX.current = null;
  };

  return (
    <section className="bg-white py-8 overflow-hidden">
      <div className="relative">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 50}%)` }}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {vehicles.map((v) => (
            <div
              key={v.title}
              className="min-w-[65%] mx-3 rounded-xl px-1 relative h-110 overflow-hidden"
            >
              <img
                src={v.img}
                alt={v.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute top-4 left-5 z-10">
                <span className="text-white text-[13px] font-medium">
                  {v.category}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 z-10 px-5 pb-5 pt-20 bg-linear-to-t from-black/60 via-black/20 to-transparent">
                <h3 className="text-white text-[32px] font-semibold leading-tight mb-4">
                  {v.title}
                </h3>
                <div className="flex gap-3">
                  <button className="bg-[#3e6ae1] text-white text-xs font-medium py-2 px-6 rounded hover:bg-[#2f5ac9]">
                    Order Now
                  </button>
                  <button className="bg-white text-black text-xs font-medium py-2 px-6 rounded">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {current < maxIndex && (
          <button
            onClick={next}
            className="absolute cursor-pointer right-3 top-1/2 -translate-y-1/2 z-20 bg-white  rounded w-10 h-10 flex items-center justify-center"
            aria-label="Next"
          >
            <img src={right} alt="" className="w-6 h-6" />
          </button>
        )}

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
