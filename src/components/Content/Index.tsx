import Image from "next/image";
import Profile from "@/assets/icons/alexandre.jpeg"
import styles from './profile.module.css';

export default function Content() {
    return (
        <div className="flex my-16">
            <div className="lg:mx-8 pt-20 text-bolder text-gray-200 w-2xl color-white text-8xl font-black w-full sm:w-1/2 md:w-1/3 lg:w-full">
                <div>Alexandre Souza</div>
                <div className="text-gray-400 text-5xl">Desenvolvedor Full Stack</div>
            </div>
            <div className="pt-12">
                <div className={`${styles.guitarPick}`} >
                    <div className={styles.photoContainer}>
                        <Image src={Profile} width={300} height={300} alt="Profile" className={styles.photo} />
                    </div>
                </div>
            </div>
        </div>
    );
}