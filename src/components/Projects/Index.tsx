import Eproc from "@/assets/images/eproc.jpeg"
import Image from "next/image"

export default function Projects() {
    return (
        <div className="text-white mx-auto h-screen max-w-7xl">
            <div className="py-20">
                <div className="py-5" >
                    <h1 className="text-2xl font-bold">Projetos</h1>
                </div>
                <div className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
                    {/* <img className="w-full" src="/img/card-top.jpg" alt="Sunset in the mountains"> */}
                    <div className="px-6 py-4">
                        <div>
                        <h1>Sistema Eproc - Tribunal de Justiça do Tocantins </h1>
                        </div>
                        <div className="px-6 py-4">
                            <Image src={Eproc} alt="Sistema Eproc" />
                        </div>
                    </div>
                    <div className="px-6 pt-4 pb-2 text-center bg-gray-600">
                        Share
                    </div>
                </div>

            </div>
        </div>
    )
}