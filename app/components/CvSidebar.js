export default function CvSidebar() {
  return (
    <aside className="w-full md:w-[80mm] p-6 flex flex-col items-center gap-4 shrink-0 bg-slate-800">
      <img
        className="w-24 h-24 rounded-full object-cover border-4 border-white/20"
        src="https://images.pexels.com/photos/31428193/pexels-photo-31428193.jpeg?auto=compress&cs=tinysrgb&w=400"
        alt="Retrato profesional de un joven desarrollador"
      />
      <h1 className="text-center font-bold text-white text-[26px]">
        Carlos García López
      </h1>
      <p className="text-center text-slate-400 text-[13px]">
        Desarrollador Web Full Stack
      </p>

      <div className="w-full border-t border-white/20 pt-4 mt-2">
        <h2 className="text-white text-[11px] font-bold uppercase tracking-wider mb-3">
          Contacto
        </h2>
        <p className="text-slate-300 text-[15px] mb-1">carlos@email.com</p>
        <p className="text-slate-300 text-[15px] mb-1">+34 612 345 678</p>
        <p className="text-slate-300 text-[15px] mb-1">Valencia, España</p>
        <p className="text-slate-300 text-[15px]">github.com/carlosgarcia</p>
      </div>

      <div className="w-full border-t border-white/20 pt-4">
        <h2 className="text-white text-[11px] font-bold uppercase tracking-wider mb-3">
          Habilidades
        </h2>
        <p className="text-slate-300 text-[15px] mb-1">HTML5 / CSS3 / Tailwind</p>
        <p className="text-slate-300 text-[15px] mb-1">JavaScript / TypeScript</p>
        <p className="text-slate-300 text-[15px] mb-1">React / Next.js</p>
        <p className="text-slate-300 text-[15px] mb-1">Node.js / Express</p>
        <p className="text-slate-300 text-[15px] mb-1">PostgreSQL / MongoDB</p>
        <p className="text-slate-300 text-[15px]">Git / Docker / CI/CD</p>
      </div>

      <div className="w-full border-t border-white/20 pt-4">
        <h2 className="text-white text-[11px] font-bold uppercase tracking-wider mb-3">
          Idiomas
        </h2>
        <p className="text-slate-300 text-[15px] mb-1">Español — Nativo</p>
        <p className="text-slate-300 text-[15px]">Inglés — B2</p>
      </div>
    </aside>
  );
}
