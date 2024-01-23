import Image from "next/image";
import Profile from "@/assets/icons/alexandre.jpeg"
import styles from './profile.module.css';
import ToolBar from "../ToolBar/ToolBar";

export default function Content() {
    return (
        <div className="flex flex-col sm:flex-row my-2 md:my-2 lg:my-16">
            <div className="flex justify-center items-center sm:hidden ">
                <div className={`${styles.guitarPick}`}>
                    <div className={styles.photoContainer}>
                        <Image src={Profile} width={150} height={150} alt="Profile" className={styles.photo} />
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/3 lg:w-full mx-2 md:mx-0 lg:mx-8 pt-20 text-bolder text-gray-200 color-white font-black">
                <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Alexandre Souza</div>
                <div className="text-gray-400 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">Desenvolvedor Full Stack</div>
                <ToolBar />
            </div>

            <div className="hidden lg:flex py-10">
                <div className={`${styles.guitarPick}`}>
                    <div className={styles.photoContainer}>
                        <Image src={Profile} width={300} height={300} alt="Profile" className={styles.photo} />
                    </div>
                </div>
            </div>
        </div>
    );
}