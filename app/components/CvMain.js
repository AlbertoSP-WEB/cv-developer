export default function CvMain() {
  return (
    <main className="flex-1 p-6 md:p-8 bg-white">
      <section className="mb-8">
        <h2 className="text-slate-800 text-[12px] font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-1 mb-3">
          Perfil
        </h2>
        <p className="text-slate-700 text-[15px] leading-relaxed">
          Desarrollador web con 4 años de experiencia construyendo aplicaciones modernas, escalables y centradas en el usuario. Especializado en React y Node.js con fuerte enfoque en rendimiento y buenas prácticas.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-slate-800 text-[12px] font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-1 mb-4">
          Experiencia
        </h2>
        <div className="mb-5">
          <h3 className="text-slate-900 font-bold text-[16px]">Desarrollador Full Stack</h3>
          <p className="text-slate-500 text-[15px] mb-1">TechStartup S.L. — 2022 – Presente</p>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Desarrollo de plataforma SaaS con React, Node.js y PostgreSQL. Implementación de API REST, tests automatizados y despliegue con Docker.
          </p>
        </div>
        <div className="mb-5">
          <h3 className="text-slate-900 font-bold text-[16px]">Desarrollador Frontend</h3>
          <p className="text-slate-500 text-[15px] mb-1">Agencia Digital XYZ — 2020 – 2022</p>
          <p className="text-slate-600 text-[15px] leading-relaxed">
            Maquetación responsive, integración de APIs, optimización de rendimiento web y colaboración con equipos de diseño UX/UI.
          </p>
        </div>
      </section>

      <section>
        <h2 className="text-slate-800 text-[12px] font-bold uppercase tracking-wider border-b-2 border-slate-800 pb-1 mb-4">
          Educación
        </h2>
        <div>
          <h3 className="text-slate-900 font-bold text-[16px]">Grado en Ingeniería Informática</h3>
          <p className="text-slate-500 text-[15px]">Universitat Politècnica de València — 2016 – 2020</p>
        </div>
      </section>
    </main>
  );
}
