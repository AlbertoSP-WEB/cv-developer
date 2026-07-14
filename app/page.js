import CvSidebar from "./components/CvSidebar";
import CvMain from "./components/CvMain";

export default function Home() {
  return (
    <div className="w-full min-h-screen print:min-h-0 flex flex-col bg-white">
      <CvSidebar />
      <CvMain />
    </div>
  );
}
