
import Gmail from "@/assets/icons/Gmail";
import Linkedin from "@/assets/icons/Linkedin";
import Image from 'next/image';
import LinkedinBlack from "@/assets/icons/LinkedinBlack";
import Github from "@/assets/icons/github-mark-white.png"
import Link from "next/link";

import { useInView } from 'react-intersection-observer';
import { Transition, Variants, motion } from "framer-motion";

export default function Sidebar() {

    const [ref, inView] = useInView();

    const animateVariants: Variants = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const transition: Transition = {
        ease: 'easeInOut',
        duration: 0.5,
    };
    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animateVariants}
            transition={transition}
            className="flex flex-col md:flex justify-center items-center pt-40 gap-6">
            <Link href="https://github.com/soualexandre" target="_blank" className="icon-container transform transition-transform hover:scale-150">
                <Image className="icon" src={Github} width={20} height={20} alt="github logo" />
            </Link>
            <Link href="mailto:alexandreifto2@gmail.com" target="_blank" className="icon-container transform transition-transform hover:scale-150">
                <Gmail />
            </Link>
            <Link href="https://www.linkedin.com/in/eualexandre/" target="_blank" className="icon-container transform transition-transform hover:scale-150">
                <LinkedinBlack />
            </Link>
            <div className="flex flex-1">
                <div
                    className="inline-block h-[180px] min-h-[1em] w-0.5 self-stretch bg-neutral-100 opacity-100 dark:opacity-50">
                </div>
            </div>
        </motion.div>
    );
}