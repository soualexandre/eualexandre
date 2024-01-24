import Image from "next/image";
import Profile from '@/assets/icons/alexandre.jpeg'


export default function Resumo() {
    return (
        <div className="flex items-center justify-center w-full mx-0 py-10 bg-gray-900" id="sobre">
            <div className="max-w-7xl gap-8">
                <div className="py-4 sm:py-10">
                    <Image src={Profile} alt="" className="mx-auto max-w-1/5 h-auto" />
                </div>
                <div className="text-justify sm:justify-center text-white">
                    <h1 className="flex sm:justify-center text-3xl sm:text-5xl sm:px-4 pb-4 sm:p-6">Sobre mim</h1>
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

    );
}