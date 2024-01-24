"use client"
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
import Resumo from "@/components/Resumo/Index";
import Projects from "@/components/Projects/Index";
import { FaChevronDown } from "react-icons/fa";
import { scrollTo } from "@/utils/scroolTo";


export default function Home() {
  const itemHeaderClick = (item: any) => {
    scrollTo(item);
};
  return (
    <main className="mx-auto">
      <div className="mx-auto max-w-7xl h-screen">
        <Header />
        <div className="p-4  gap-10">
          <div className="flex">
            <Sidebar />
            <div className="flex w-full items-center justify-center">
              <Content />
            </div>
          </div>
          <a className="mx-auto h-screen lg:my-10 " onClick={() => itemHeaderClick("sobre")}>
            <FaChevronDown className="text-2xl mx-auto transform transition-transform hover:scale-150" />
          </a>
        </div>
      </div>
      <div>
        <Resumo />
      </div>
      <Projects />
    </main>
  );
}
