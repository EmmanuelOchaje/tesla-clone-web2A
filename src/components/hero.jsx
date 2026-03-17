import { useState, useEffect } from "react";
import model1 from "../../public/assets/model3.jpg";
import model3 from "../../public/assets/model-x.jpg";
import model4 from "../../public/assets/model-y.jpg";
import left from "../../public/assets/left.png";
import right from "../../public/assets/right.png";

const slides = [
  {
    title: "Model S",
    subtitle: "Starting at $74,990",
    badge: "0.99 Apr Available",
    img: model1,
  },
  {
    title: "Model X",
    subtitle: "Full Self-Driving (Supervised)",
    badge: "Available afor $99/mo",
    img: model3,
  },
  {
    title: "Model Y",
    subtitle: "0% APR Available",
    badge: "Free Supercharging Available",
    img: model4,
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(
      () => setCurrent((c) => (c + 1) % slides.length),
      5000,
    );
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);
  const slide = slides[current];

  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      {/* Full-screen background image */}
      <img
        key={current}
        src={slide.img}
        alt={slide.title}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ animation: "fadeSlide 0.7s ease forwards" }}
      />

      <div className="absolute inset-0 bg-linear-to-b from-black/20 via-transparent to-black/30" />

      {/* Title */}
      <div className="absolute top-20 left-0 right-0 text-center z-10 px-4">
        <h1 className="text-xl font md:text-4xl font-semibold text-white leading-tight">
          {slide.title}
        </h1>
        {slide.badge ? (
          <a
            href="#"
            className="text-white border-b pb-1 text-[15px] font-medium drop-shadow"
          >
            {slide.badge}
          </a>
        ) : (
          <p className="text-white text-[15px] font-medium drop-shadow">
            {slide.subtitle}
          </p>
        )}
        <div className="flex flex-wrap mt-5 gap-3 justify-center">
          <button className="bg-[#3e6ae1] text-white font-medium text-xs py-2 min-w-45 rounded hover:bg-[#2f5ac9] transition-colors">
            Order Now
          </button>
          <button className="bg-white text-[#171a20] font-medium text-xs py-2 min-w-45 rounded hover:bg-white transition-colors">
            Learn More
          </button>
        </div>
      </div>

      {/* Buttons  */}
      <div className="absolute bottom-10 left-0 right-0 flex flex-col items-center gap-4 z-10 px-4">
        {/* Dots */}
        <div className="flex justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-white" : "bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute cursor-pointer left-2 md:left-20 top-1/2 -translate-y-1/2 z-10 bg-white rounded p-2"
        aria-label="Previous"
      >
        <img src={left} alt="" className="w-4 h-4" />
      </button>
      <button
        onClick={next}
        className="absolute cursor-pointer right-2 md:left-20 top-1/2 -translate-y-1/2 z-10 bg-white rounded p-2"
        aria-label="Next"
      >
        <img src={right} alt="" className="w-4 h-4" />
      </button>
    </section>
  );
}
