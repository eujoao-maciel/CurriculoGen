const Footer = () => {
    return (
        <>
            <footer className="flex flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
                <div className="flex flex-wrap items-start gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="#">
                        <img
                            src="/Logo_cores_inv.jpg"
                            alt="logo"
                            className="h-18 w-auto"
                        />
                    </a>

                    <div>
                        <p className="text-slate-100 font-semibold">Produto</p>

                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Inicio
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Suporte
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Planos
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Afiliação
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-slate-100 font-semibold">Recursos</p>

                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Empresa
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Blogs
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Comunidade
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Sobre
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <p className="text-slate-100 font-semibold">
                            Legalidade
                        </p>

                        <ul className="mt-2 space-y-2">
                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Privacidade
                                </a>
                            </li>

                            <li>
                                <a
                                    href="/"
                                    className="hover:text-purple-800 transition"
                                >
                                    Termos
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">
                       Currículos profissionais, impulsionados por inteligência artificial.
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                        <a
                            href="https://www.linkedin.com/in/jo%C3%A3o-maciel-644357259/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-linkedin size-5 hover:text-purple-800"
                                aria-hidden="true"
                            >
                                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>

                                <rect width="4" height="12" x="2" y="9"></rect>

                                <circle cx="4" cy="4" r="2"></circle>
                            </svg>
                        </a>
                    </div>

                    <span className="mt-3 text-center">
                        © 2025 CurriculoGen
                    </span>
                </div>
            </footer>
            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
        </>
    )
}

export default Footer
