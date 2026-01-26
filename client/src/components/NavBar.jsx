import { Link, useNavigate } from "react-router-dom"

const NavBar = () => {
    const user = { name: "nome teste" }
    const navigate = useNavigate()

    const logoutUser = () => {
        navigate("/")
    }

    return (
        <div className="shadow bg-gray-700">
            <nav className="flex items-center justify-between max-w-7xl mx-auto px-4 py-3.5 text-slate-800 transition-all">
                <Link to="/">
                   <p className="text-slate-100 font-semibold text-3xl">CurriculoGen</p>
                </Link>
                <div className="flex items-center text-slate-200 gap-4 text-sm">
                    <p className="max-sm:hidden">Olá, {user?.name}</p>
                    <button
                        onClick={logoutUser}
                        className="bg-gray-700 hover:bg-gray-600 border border-gray-300 px-7 py-1.5 rounded-full active:scale-95 transition-all"
                    >
                        Sair
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
