import Image from "next/image";
import Profile from '@/assets/icons/alexandre.jpeg'


export default function Resumo() {
    return (
        <div className="w-full mx-0 py-40 bg-gray-900" id="sobre">
            <div className="mx-auto max-w-7xl flex gap-8">
                <div className="py-10 border-spacing-1 rounded bg-zinc-200 w-1/5">
                    <Image src={Profile} alt="" />
                </div>
                <div className="flex-1 text-justify text-white">
                    <h1 className="text-5xl pb-6">Sobre mim</h1>
                    Desenvolvedor Python, PHP e JavaScript, com 2 anos de experiência.
                    Profundo conhecimento em frameworks como Laravel, Express Node,
                    jQuery, Next Js, VueJS, React, React Native aliado a habilidades sólidas em
                    MySQL para gerenciamento eficiente de bancos de dados. Experiente em
                    metodologias ágeis, especialmente Scrum, para garantir entregas eficientes
                    e colaboração eficaz. Profissional comprometido com a excelência técnica
                    e constantemente atualizado com as últimas tendências. Familiarizado com
                    o controle de versão Git para garantir um desenvolvimento colaborativo e
                    organizado
                </div>
            </div>
        </div>
    );
}