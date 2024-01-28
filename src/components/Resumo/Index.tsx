import Image from "next/image";
import Profile from '@/assets/icons/alexandre.jpeg'
import styles from './resumo.module.css';
import myPhotoGray from '@/assets/images/alexandre_cinza.jpg'
import myPhotoBlue from '@/assets/images/alexandre_azul.jpg'
import { useInView } from 'react-intersection-observer';
import { Transition, Variants, motion } from "framer-motion";

export default function Resumo() {

    const [ref, inView] = useInView(); 


    const animateVariants: Variants = {
        hidden: { y: -20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
    };

    const transition: Transition = {
        ease: 'easeInOut',
        duration: 2,
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            variants={animateVariants}
            transition={transition}
        >
            <div className="flex justify-center text-1xl py -4 ">
                <h1 className="text-white text-3cl mx-auto font-medium">Sobre mim</h1>
            </div>
            <div className={`${styles.container} py-10`}>
                <div className={`${styles.containerImage} max-w-2xl`}>
                    <Image src={myPhotoGray} alt="Imagem de perfil" width={500} height={500} className="max-w-2xl" />
                </div>
                <div className="flex flex-col">
                    <div className="text-justify  px-4 sm:px-4   text-white">
                        <h1 className={`${styles.title} text-3xl sm:text-5xl font-bold pb-4`}>Estudos</h1>
                        <p>
                            Minha jornada no curso de Sistemas de Informação foi marcada por dedicação e amor pela programação. Desde sempre,
                            fui apaixonado por essa área, o que se refletiu em minha constante aplicação nos estudos. Participar ativamente de
                            projetos de extensão ampliou minha visão prática, mas o ápice foi vencer uma competição estadual de ideias e programação.
                        </p>
                        <p className="pt-2">
                            Essas experiências moldaram não apenas minhas habilidades técnicas, mas também minha ética de trabalho. Com humildade,
                            reconheço que essa trajetória foi crucial para minha formação como profissional de Sistemas de Informação. A autoridade
                            que conquistei não reside apenas nos títulos, mas na disposição constante para aprender e aplicar conhecimentos,
                            refletindo em uma carreira sólida.
                        </p>
                    </div>
                    <div className="text-justify  py-10 px-4 sm:px-4 lg:px-4 md:px-4 text-white">
                        <h1 className={`${styles.title} text-3xl sm:text-5xl font-bold pb-4`}>Carreira</h1>
                        <p>
                            Desenvolvedor Python, PHP e JavaScript, com 2 anos de experiência.
                            Profundo conhecimento em frameworks como Laravel, Express Node, jQuery,
                            Next Js, VueJS, React, React Native aliado a habilidades sólidas em MySQL
                            para gerenciamento eficiente de bancos de dados. Experiente em
                            metodologias ágeis, especialmente Scrum, para garantir entregas eficientes
                            e colaboração eficaz. Profissional comprometido com a excelência técnica
                            e constantemente atualizado com as últimas tendências. Familiarizado com
                            o controle de versão Git para garantir um desenvolvimento colaborativo e
                            organizado
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
}