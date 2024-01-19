

export default function Header() {
    return (
        <div className="flex justify-between items-center w-full p-4">
            <div>Logo</div>
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
        </div>
    );
}