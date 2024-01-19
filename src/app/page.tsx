import Image from "next/image";
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
export default function Home() {
  return (
    <main className="p-2">
      <Header />
      <div className="p-4 flex gap-10">
        <Sidebar />
        <Content/>
      </div>
    </main>
  );
}
