import CvSidebar from "./components/CvSidebar";
import CvMain from "./components/CvMain";

export default function Home() {
  return (
    <div className="w-full min-h-screen print:min-h-0 flex flex-col bg-white mx-auto max-w-212.5 print:max-w-none print:mx-0">
      <CvSidebar />
      <CvMain />
    </div>
  );
}
