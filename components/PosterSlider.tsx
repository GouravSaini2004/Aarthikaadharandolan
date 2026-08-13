"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const posters = [
  "/images/Poster-1.jpg",
  "/images/Poster-2.jpg",
  "/images/Poster-3.jpg",
  "/images/Poster-5.jpg",
  "/images/Poster-6.jpg",
  "/images/Poster-7.jpg",
  "/images/Poster-8.jpg",
  "/images/Poster-9.jpg",
];

export default function PosterSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % posters.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const previousSlide = () => {
    setCurrent(
      (prev) => (prev - 1 + posters.length) % posters.length
    );
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % posters.length);
  };

  return (
    <div className="relative mx-auto w-full max-w-[520px]">
      <div className="absolute -inset-5 rounded-[3rem] bg-[var(--gold)]/10 blur-2xl" />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-2 shadow-2xl backdrop-blur">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem]">

          {/* Posters */}
          {posters.map((src, index) => (
            <Image
              key={src}
              src={src}
              alt={`आर्थिक आधार पर आरक्षण आंदोलन पोस्टर ${index + 1}`}
              fill
              priority={index === 0}
              className={`object-cover transition-opacity duration-700 ${
                current === index
                  ? "opacity-100"
                  : "opacity-0"
              }`}
              sizes="(max-width: 1024px) 90vw, 520px"
            />
          ))}

          {/* Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--navy)]/85 via-transparent to-transparent" />

          {/* Text */}
          <div className="absolute bottom-0 left-0 right-0 p-7">
            <div className="text-xs font-bold uppercase tracking-[.2em] text-[var(--gold)]">
              Public Dialogue • 2026
            </div>

            <div className="mt-2 text-2xl font-black text-white">
              शिक्षा • रोजगार • अवसर
            </div>
          </div>

          {/* Previous button */}
          <button
            type="button"
            onClick={previousSlide}
            aria-label="Previous poster"
            className="absolute left-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronLeft size={22} />
          </button>

          {/* Next button */}
          <button
            type="button"
            onClick={nextSlide}
            aria-label="Next poster"
            className="absolute right-4 top-1/2 grid h-10 w-10 -translate-y-1/2 place-items-center rounded-full bg-black/35 text-white backdrop-blur transition hover:bg-black/60"
          >
            <ChevronRight size={22} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5">
            {posters.map((_, index) => (
              <button
                key={index}
                type="button"
                aria-label={`Show poster ${index + 1}`}
                onClick={() => setCurrent(index)}
                className={`h-1.5 rounded-full transition-all ${
                  current === index
                    ? "w-6 bg-[var(--gold)]"
                    : "w-1.5 bg-white/60"
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}

