import CvSidebar from "./components/CvSidebar";
import CvMain from "./components/CvMain";

export default function Home() {
  return (
    <div className="w-full min-h-screen flex justify-center items-start py-4 md:py-8 bg-gray-100">
      <div className="w-full max-w-[210mm] mx-auto flex flex-col md:flex-row shadow-lg bg-white aspect-[210/297] max-h-[297mm]">
        <CvSidebar />
        <CvMain />
      </div>
    </div>
  );
}
