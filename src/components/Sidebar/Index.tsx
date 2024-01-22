
import Gmail from "@/assets/icons/Gmail";
import Linkedin from "@/assets/icons/Linkedin";
import Image from 'next/image';
import LinkedinBlack from "@/assets/icons/LinkedinBlack";
// import Github from "@/assets/icons/github";
import Github from "@/assets/icons/github-mark-white.png"

export default function Sidebar() {
    return (
        <div className="flex flex-col  hidden md:flex justify-center items-center pt-40 gap-6">
            <div>
                <Image src={Github} width={30} height={30} alt="github logo"/>
            </div>
            <div>
                <Gmail />
            </div>
            <div>
                <LinkedinBlack />
            </div>
            <div className="flex flex-1">
                <div
                    className="inline-block h-[250px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50"></div>
            </div>
        </div>
    );
}