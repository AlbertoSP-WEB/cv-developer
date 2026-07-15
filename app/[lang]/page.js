import { notFound } from "next/navigation";
import CvSidebar from "../components/CvSidebar";
import CvMain from "../components/CvMain";
import { getDictionary, hasLocale } from "../dictionaries";

export default async function Home({ params }) {
  const { lang } = await params;
  if (!hasLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="w-full min-h-screen print:min-h-0 flex flex-col bg-white mx-auto max-w-212.5 print:max-w-none print:mx-0">
      <CvSidebar dict={dict} />
      <CvMain dict={dict} />
    </div>
  );
}
