import { renderRichText } from "../lib/richText";

const h2Class =
  "text-slate-900 text-[15px] font-extrabold uppercase tracking-wider border-b-2 border-slate-800 pb-1 mb-4";
const h3Class = "text-slate-900 font-bold text-[16px]";
const metaClass = "text-slate-600 text-[15px]";
const dateClass = "text-slate-500 text-[15px] mb-1";
const bodyClass = "text-slate-600 text-[15px] leading-relaxed";
const linkClass = "text-blue-700 font-semibold underline";

export default function CvMain({ dict }) {
  const { profile, experience, projects, education, skills, languages } = dict.sections;

  return (
    <main className="flex-1 p-6 md:p-8 print:p-8 bg-white">
      <section className="mb-8 print:mb-8">
        <h2 className="text-slate-900 text-[15px] font-extrabold uppercase tracking-wider border-b-2 border-slate-800 pb-1 mb-3">
          {profile.heading}
        </h2>
        <p className="text-slate-700 text-[15px] leading-relaxed">
          {renderRichText(profile.body)}{" "}
          <strong className="font-bold">{profile.highlight}</strong>
        </p>
      </section>

      <section className="mb-8 print:mb-8">
        <h2 className={h2Class}>{experience.heading}</h2>
        {experience.items.map((item, i) => (
          <div
            key={item.title + i}
            className={i < experience.items.length - 1 ? "mb-5 print:mb-5" : undefined}
          >
            <h3 className={h3Class}>{item.title}</h3>
            <p className={metaClass}>{item.company}</p>
            <p className={dateClass}>{item.dates}</p>
            {item.description && <p className={bodyClass}>{renderRichText(item.description)}</p>}
          </div>
        ))}
      </section>

      <section className="mb-8 print:mb-8">
        <h2 className={h2Class}>{projects.heading}</h2>
        {projects.items.map((item, i) => (
          <div
            key={item.name + i}
            className={i < projects.items.length - 1 ? "mb-6 print:mb-6" : undefined}
          >
            <h3 className={h3Class}>
              {item.name}
              {item.url ? (
                <>
                  {" "}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={linkClass}
                  >
                    {item.label}
                  </a>
                </>
              ) : (
                item.label && <span className={metaClass}> — {item.label}</span>
              )}
            </h3>
            <p className={bodyClass}>{renderRichText(item.description)}</p>
          </div>
        ))}
      </section>

      <section className="mb-8 print:mb-8">
        <h2 className={h2Class}>{education.heading}</h2>
        {education.items.map((item, i) => (
          <div key={item.title + i}>
            <h3 className={h3Class}>{item.title}</h3>
            <p className={dateClass}>{item.dates}</p>
            <p className={bodyClass}>{item.description}</p>
          </div>
        ))}
      </section>

      <section className="mb-8 print:mb-8">
        <h2 className={h2Class}>{skills.heading}</h2>
        <p className="text-slate-700 text-[15px] leading-relaxed">{skills.text}</p>
      </section>

      <section>
        <h2 className={h2Class}>{languages.heading}</h2>
        <p className="text-slate-700 text-[15px]">{languages.text}</p>
      </section>
    </main>
  );
}
