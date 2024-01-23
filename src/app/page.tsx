import Image from "next/image";
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
import ToolBar from "@/components/ToolBar/ToolBar";
import Resumo from "@/components/Resumo/Index";


export default function Home() {
  return (
    <main className="mx-auto">
      <div className="mx-auto max-w-7xl h-screen">
        <Header />
        <div className="p-4 flex gap-10">
          <Sidebar />
          <div className="w-full">
            <Content />
          </div>
        </div>
      </div>
      <div>
        <Resumo />
      </div>
    </main>
  );
}
