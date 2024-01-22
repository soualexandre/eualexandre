import Image from "next/image";
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
import ToolBar from "@/components/ToolBar/ToolBar";
export default function Home() {

  return (
    <main className="mx-auto  max-w-7xl ">
      <Header />
      <div className="p-4 flex gap-10">
        <Sidebar />
        <div className="mt-4xl w-full">
          <Content />
        </div>
      </div>
      <div>
        <ToolBar />
      </div>
    </main>
  );
}
