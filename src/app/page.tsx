"use client"
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
import Resumo from "@/components/Resumo/Index";
import Projects from "@/components/Projects/Index";
import { FaChevronDown } from "react-icons/fa";
import { scrollTo } from "@/utils/scroolTo";
import { motion } from "framer-motion"

import store from '@/redux/store'
import { Provider } from "react-redux"

export default function Home() {
  const itemHeaderClick = (item: any) => {
    scrollTo(item);
  };

  
  return (
    <Provider store={store}>
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
            <div className="sm:pt-10 md:pt-40 lg:pt-40">
              <a className="mx-auto pt-20" onClick={() => itemHeaderClick("sobre")}>
                <FaChevronDown className="text-2xl text-white  mx-auto transform transition-transform hover:scale-150" />
              </a>
            </div>
          </div>
        </div>
        <div className="w-full mx-0 py-10 bg-gray-900" id="sobre">
          <div className="max-w-7xl mx-auto  flex justify-center">
            <Resumo />
          </div>
        </div>
        <div className="bg-gray-700" id="projects">
          <Projects />
        </div>
      </main>
    </Provider>
  );
}
