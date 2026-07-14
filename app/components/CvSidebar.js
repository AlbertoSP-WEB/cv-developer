"use client";

import { useState } from "react";

export default function CvSidebar() {
  const [isPhotoOpen, setIsPhotoOpen] = useState(false);

  return (
    <header className="w-full p-6 print:p-1 flex flex-col items-center gap-1 print:gap-0.5 bg-slate-800 text-center">
      <div
        className="relative w-56 h-56 print:w-28 print:h-28 cursor-pointer group"
        onClick={() => setIsPhotoOpen(true)}
      >
        <img
          className="w-56 h-56 print:w-28 print:h-28 rounded-full object-cover border-4 border-white/20 group-hover:opacity-90 transition-opacity"
          src="/profile.jpg"
          alt="Retrato profesional de un joven desarrollador"
        />
        <div className="absolute bottom-1 right-1 flex items-center justify-center w-8 h-8 rounded-full bg-slate-900 border-2 border-white/70 shadow-md print:hidden">
          <svg
            className="w-4 h-4 text-white"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        </div>
      </div>
      <div className="flex flex-col items-center gap-1 print:gap-0">
        <h1 className="font-bold text-white text-[26px] print:text-[20px]">
          Alberto Sánchez Plaza
        </h1>
        <p className="text-slate-400 text-[13px] print:text-[12px]">
          Desarrollador Web Full Stack
        </p>
        <p className="inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-400/40 text-emerald-300 text-[12px] print:text-[11px] font-semibold">
          Incorporación inmediata
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
      </div>
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
