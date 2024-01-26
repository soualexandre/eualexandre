import Image from "next/image";
import Profile from '@/assets/icons/alexandre.jpeg'
import styles from './resumo.module.css';

export default function Resumo() {
    return (
        <div className={`${styles.container} py-10`}>
            <div className={`${styles.containerImage} max-w-2xl`}>
                <Image src={Profile} alt="Imagem de perfil" width={500} height={500} className="max-w-2xl" />
            </div>
            <div className="text-justify  px-4 sm:px-4 lg:px-4 md:px-4 text-white">
                <h1 className={`${styles.title} text-3xl sm:text-5xl font-bold pb-4`}>Sobre mim</h1>
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
    );
}