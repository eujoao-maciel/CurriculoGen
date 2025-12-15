import { useState } from "react"

const Login = () => {
    const query = new URLSearchParams(window.location.search)
    const urlState = query.get("state")

    const [state, setState] = useState(urlState || "login")

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = async (e) => {
        e.preventDefault()
    }

    const handleChange = (e) => {
        const { name, value } = e.target

        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-50">
            <form
                onSubmit={handleSubmit}
                className="sm:w-[350px] w-full text-center border border-gray-300/60 rounded-2xl px-8 bg-white"
            >
                <h1 className="text-gray-900 text-3xl mt-10 font-medium">
                    {state === "login" ? "Login" : "Cadastrar"}
                </h1>

                <p className="text-gray-500 text-sm mt-2">
                    Realize o {state} para continuar
                </p>

                {state !== "login" && (
                    <div className="flex items-center mt-6 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#6B7280"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-user-round-icon lucide-user-round"
                        >
                            <circle cx="12" cy="8" r="5" />
                            <path d="M20 21a8 8 0 0 0-16 0" />
                        </svg>

                        <input
                            type="text"
                            name="name"
                            placeholder="Nome"
                            className="border-none outline-none ring-0"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                    </div>
                )}

                <div className="flex items-center w-full mt-4 bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-mail-icon lucide-mail"
                    >
                        <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7" />
                        <rect x="2" y="4" width="20" height="16" rx="2" />
                    </svg>

                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="border-none outline-none ring-0"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="flex items-center mt-4 w-full bg-white border border-gray-300/80 h-12 rounded-full overflow-hidden pl-6 gap-2">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#6B7280"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-lock-icon lucide-lock"
                    >
                        <rect
                            width="18"
                            height="11"
                            x="3"
                            y="11"
                            rx="2"
                            ry="2"
                        />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                    </svg>

                    <input
                        type="password"
                        name="password"
                        placeholder="Senha"
                        className="border-none outline-none ring-0"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="mt-4 text-left text-purple-700">
                    <button className="text-sm" type="reset">
                        Esqueceu a senha?
                    </button>
                </div>

                <button
                    type="submit"
                    className="mt-2 w-full h-11 rounded-full text-white bg-purple-600 hover:opacity-90 transition-opacity"
                >
                    {state === "login" ? "Login" : "Criar conta"}
                </button>

                <p
                    onClick={() =>
                        setState((prev) =>
                            prev === "login" ? "cadastro" : "login",
                        )
                    }
                    className="text-gray-500 text-sm mt-3 mb-11"
                >
                    {state === "login"
                        ? "Não possui uma conta?"
                        : "Já possui uma conta?"}{" "}
                    <a href="#" className="text-purple-700 hover:underline">
                        clique aqui
                    </a>
                </p>
            </form>
        </div>
    )
}

export default Login
