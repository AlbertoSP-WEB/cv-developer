"use client";

import { useState } from "react";

export default function CvSidebar() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <header className="w-full p-6 print:p-4 flex flex-col items-center gap-3 print:gap-2 bg-slate-800 text-center">
      <div
        className="relative w-48 h-48 print:w-20 print:h-20 cursor-pointer group"
        onClick={() => setIsPhotoOpen(true)}
      >
        <img
          className="w-48 h-48 print:w-20 print:h-20 rounded-full object-cover border-4 border-white/20 group-hover:opacity-90 transition-opacity"
          src="/profile.jpg"
          alt="Retrato profesional de un joven desarrollador"
        />
      </div>
      <h1 className="font-bold text-white text-[26px] print:text-[20px]">
        Alberto Sánchez Plaza
      </h1>
      <p className="text-slate-400 text-[13px] print:text-[12px]">
        Desarrollador Web Full Stack
      </p>
      <p className="text-slate-300 text-[15px] print:text-[12px]">
        <a href="mailto:albertosanchezalicante@gmail.com" className="underline">
          albertosanchezalicante@gmail.com
        </a>{" "}
        ·{" "}
        <a href="tel:+34642351460" className="underline">
          +34 642 351 460
        </a>{" "}
        · Alicante, Remoto
      </p>
      <p className="text-slate-300 text-[15px] print:text-[12px]">
        <a
          href="https://www.linkedin.com/in/albertosánchezplaza"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-300 font-semibold underline"
        >
          linkedin.com/in/albertosánchezplaza
        </a>
      </p>

      {isPhotoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          onClick={() => setIsPhotoOpen(false)}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white text-3xl leading-none hover:text-slate-300 cursor-pointer"
            aria-label="Cerrar"
            onClick={() => setIsPhotoOpen(false)}
          >
            &times;
          </button>
          <img
            className="max-w-full max-h-full rounded-lg object-contain"
            src="/profile.jpg"
            alt="Retrato profesional de un joven desarrollador (ampliado)"
          />
        </div>
      )}
    </header>
  );
}
