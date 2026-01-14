import BottomDock from "@/components/layout/BottomDock";
import Navbar from "@/components/layout/Navbar";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <>
      {/* <h1 className="flex-1 text-center bg-green-500">Bismillah</h1>; */}
      <Navbar />
      <Welcome />
      <BottomDock />
    </>
  );
}
