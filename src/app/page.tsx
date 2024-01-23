import Image from "next/image";
import Header from "../components/Header/Index"
import Sidebar from "@/components/Sidebar/Index";
import Content from "@/components/Content/Index";
import ToolBar from "@/components/ToolBar/ToolBar";

import {motion} from 'framer-motion';

export default function Home() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };
  
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };
  return (
    <main className="mx-auto  max-w-7xl  ">
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
