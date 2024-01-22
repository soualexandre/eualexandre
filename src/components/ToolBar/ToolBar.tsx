
import Gmail from "@/assets/icons/Gmail";
import Image from 'next/image';
import LinkedinBlack from "@/assets/icons/LinkedinBlack";
import Github from "@/assets/icons/github-mark-white.png"

export default function ToolBar() {
    return (
        <div className="flex flex-row justify-items-end  hiddeen md:flex justify-center items-center pt-16 gap-6">
            <a href="/Document/curriculo_alexandre.pdf" download="curriculo_alexandre.pdf">
                <button className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded inline-flex items-center">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>
                    <span>Baixar Currículo</span>
                </button>
            </a>
        </div>
    );
}