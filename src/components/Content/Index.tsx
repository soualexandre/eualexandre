import Image from "next/image";
import Profile from "@/assets/icons/alexandre.jpeg"
import styles from './profile.module.css';
import ToolBar from "../ToolBar/ToolBar";

export default function Content() {
    return (
        <div className="flex my-16 md:my-2 sm:my-2">
            <div className="lg:mx-8 pt-20 text-bolder text-gray-200 w-2xl color-white font-black w-full sm:w-1/2 md:w-1/3 lg:w-full">
                <div className="text-7xl">Alexandre Souza</div>
                <div className="text-gray-400 text-6xl">Desenvolvedor Full Stack</div>
                <ToolBar />
            </div>
            <div className="hidden lg:flex py-10">
                <div className={`${styles.guitarPick}`} >
                    <div className={styles.photoContainer}>
                        <Image src={Profile} width={300} height={300} alt="Profile" className={styles.photo} />
                    </div>
                </div>
            </div>
        </div>
    );
}