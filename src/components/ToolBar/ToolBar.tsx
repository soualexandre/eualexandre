
import Gmail from "@/assets/icons/Gmail";
import Image from 'next/image';
import LinkedinBlack from "@/assets/icons/LinkedinBlack";
import Github from "@/assets/icons/github-mark-white.png"

export default function ToolBar() {
    return (
        <div className="py-10 gap-6">
            <a href="/Document/curriculo_alexandre.pdf" download="curriculo_alexandre.pdf" className="bg-gray-500  border-gray-200 py-3 rounded relative">
                <button className="bg-white py-2 px-4 text-gray-800 font-bold rounded inline-flex items-center transition-transform transform-gpu hover:translate-x-2    hover:-translate-y-1">
                    <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Baixar Currículo</span>
                </button>
            </a>
        </div>
    );
}