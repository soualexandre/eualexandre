import Image from "next/image";
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
export default function Home() {
  return (
    <main className="p-4">
      <Header />
      <div className="p-4 flex gap-10">
        <Sidebar />
        <div className="mt-4xl">
          <Content />
        </div>
      </div>
    </main>
  );
}
