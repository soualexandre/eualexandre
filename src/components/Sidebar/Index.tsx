
import Gmail from "@/assets/icons/Gmail";
import Linkedin from "@/assets/icons/Linkedin";
import LinkedinBlack from "@/assets/icons/LinkedinBlack";
import Github from "@/assets/icons/github";

export default function Sidebar() {
    return (
        <div className="flex flex-col justify-center items-center pt-40 gap-6">
            <div>
                <Github />
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