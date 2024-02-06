import Eproc from "@/assets/images/eproc.jpeg"
import Image from "next/image"


export default function Projects() {
    const dataProjects = [
        {
            "project_name": "Eproc",
            "image": "/projects/eproc.png" 
        },
        {
            "project_name": "Bazza Carga - Cliente",
            "image": "/projects/eproc.png" 
        },
        {
            "project_name": "Bazza Carga - Motorista",
            "image": "/projects/eproc.png" 
        },
        {
            "project_name": "Tapetes São Carlos B2B",
            "image": "/projects/eproc.png" 
        },
        {
            "project_name": "Tapetes São Carlos B2B",
            "image": "/projects/eproc.png" 
        }

    ]
    return (
        <div className="text-white mx-auto max-w-7xl">
            <div className="pt-20 pb-10 ">
                <h1 className="text-2xl font-bold">Projetos</h1>
            </div>
            <div className="flex gap-4 md:gap-14 flex-wrap justify-center md:justify-normal">
                {dataProjects.map((project) => (
                    <div key={project.project_name} className="flex-grow max-w-sm rounded overflow-hidden shadow-lg bg-gray-900">
                        <div className="px-6 py-4">
                            <div>
                                <h1>{project.project_name}</h1>
                            </div>
                            <div className="px-6 py-4">
                                <Image src={project.image} alt="Sistema Eproc" />
                            </div>
                        </div>
                        <div className="px-6 pt-4 pb-2 text-center bg-gray-600">
                            Share
                        </div>
                    </div>
                ))}
            </div>
        </div>

    )
}