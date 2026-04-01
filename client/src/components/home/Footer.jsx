import { Github, Linkedin } from "lucide-react"

const Footer = () => {
    return (
        <>
            <footer className="flex flex-col md:flex-row flex-wrap justify-center lg:justify-between overflow-hidden gap-10 md:gap-20 py-16 px-6 md:px-16 lg:px-24 xl:px-32 text-[13px] text-gray-500 bg-black">
                <div className="flex flex-col md:flex-row items-center gap-10 md:gap-[60px] xl:gap-[140px]">
                    <a href="#">
                        <img
                            src="/Logo_cores_inv.jpg"
                            alt="logo"
                            className="h-18 w-auto"
                        />
                    </a>

                    <div className="flex gap-10">
                        <div>
                            <p className="text-slate-100 font-semibold">
                                Produto
                            </p>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="hover:text-sky-800 transition"
                                    >
                                        Inicio
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="#features"
                                        className="hover:text-sky-800 transition"
                                    >
                                        Utilidade
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-slate-100 font-semibold">
                                Contato
                            </p>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/eujoao-maciel"
                                        className="hover:text-sky-800 transition"
                                    >
                                        GitHub
                                    </a>
                                </li>

                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/joão-maciel-644357259/"
                                        className="hover:text-sky-800 transition"
                                    >
                                        Linkedin
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-slate-100 font-semibold">Sobre</p>

                            <ul className="mt-2 space-y-2">
                                <li>
                                    <a
                                        href="https://github.com/eujoao-maciel/CurriculoGen"
                                        className="hover:text-sky-800 transition"
                                    >
                                        Docs
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col max-md:items-center max-md:text-center gap-2 items-end">
                    <p className="max-w-60">
                        Plataforma de criação de currículos profissionais.
                    </p>

                    <div className="flex items-center gap-4 mt-3">
                        <a
                            href="https://www.linkedin.com/in/joão-maciel-644357259/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Linkedin className="size-5 hover:text-gray-400" />
                        </a>

                        <a
                            href="https://github.com/eujoao-maciel"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <Github className="size-5 hover:text-gray-400" />
                        </a>
                    </div>

                    <span className="mt-3 text-center">
                        © 2026 CurriculoGen
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
