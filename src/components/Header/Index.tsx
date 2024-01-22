

export default function Header() {
    return (
        <div className="my-4 flex text-white justify-between items-center w-full p-4">
            <div className="text-bold">AS</div>
            <div className="itmns flex gap-4">
                <div>
                    Início
                </div>
                <div>
                    Sobre mim
                </div>
                <div>
                    Projetos
                </div>
            </div>

            <div>
                <div className="p-4 rounded-full bg-white"></div>
            </div>
        </div>
    );
}