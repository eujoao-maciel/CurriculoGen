import { FileText, LayoutTemplate, Download } from "lucide-react"
import Title from "./Title.jsx"

const Features = () => {
    return (
        <div
            id="features"
            className="flex flex-col items-center my-10 scroll-mt-12 bg-gradient-to-b from-gray-600 via-gray-800 to-gray-600"
        >
            <Title
                title="Construa seu currículo"
                description="Nosso processo simplificado ajuda você a criar um currículo profissional em minutos."
            />

            {/* Container principal */}
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl gap-12 mt-10 px-4">
                {/* Imagem */}
                <div className="w-full md:w-1/2 flex justify-center">
                    <img
                        className="p-4 w-full max-w-2xl h-auto object-contain rounded-2xl transition-all duration-500"
                        src="/imgs/imagemilustrativafeature.jpg"
                        alt="Interface do gerador de currículos"
                        style={{
                            maskImage:
                                "radial-gradient(circle, black 60%, transparent 100%)",
                            WebkitMaskImage:
                                "radial-gradient(circle, black 60%, transparent 100%)",
                        }}
                    />
                </div>

                {/* Features */}
                <div className="w-full md:w-1/2 space-y-6">
                    {/* Feature 1 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div
                            className="
                                p-6 flex gap-4 rounded-xl 
                                group-hover:bg-sky-100 group-hover:border-sky-300
                                group-active:bg-sky-100 group-active:border-sky-300
                                transition-colors 
                            "
                        >
                            <FileText
                                className="
                                    size-6 text-slate-200
                                    group-hover:text-sky-700
                                    group-active:text-sky-700
                                    transition-colors
                                "
                            />

                            <div className="space-y-2">
                                <h3
                                    className="
                                        text-base font-semibold text-slate-200
                                        group-hover:text-sky-900
                                        group-active:text-sky-900
                                        transition-colors
                                    "
                                >
                                    Preenchimento Guiado
                                </h3>

                                <p
                                    className="
                                        text-sm text-slate-300
                                        group-hover:text-sky-800
                                        group-active:text-sky-800
                                        transition-colors
                                    "
                                >
                                    Informe seus dados passo a passo e deixe que
                                    a plataforma organize tudo da forma correta.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div
                            className="
                                p-6 flex gap-4 rounded-xl border border-transparent
                                group-hover:bg-sky-100 group-hover:border-sky-300
                                group-active:bg-sky-100 group-active:border-sky-300
                                transition-colors
                            "
                        >
                            <LayoutTemplate
                                className="
                                    size-6 text-slate-200
                                    group-hover:text-sky-700
                                    group-active:text-sky-700
                                    transition-colors
                                "
                            />

                            <div className="space-y-2">
                                <h3
                                    className="
                                        text-base font-semibold text-slate-200
                                        group-hover:text-sky-900
                                        group-active:text-sky-900
                                        transition-colors
                                    "
                                >
                                    Modelos Profissionais
                                </h3>

                                <p
                                    className="
                                        text-sm text-slate-300
                                        group-hover:text-sky-800
                                        group-active:text-sky-800
                                        transition-colors
                                    "
                                >
                                    Escolha entre layouts modernos e bem
                                    estruturados, pensados para processos
                                    seletivos reais.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div
                            className="
                                p-6 flex gap-4 rounded-xl border border-transparent
                                group-hover:bg-sky-100 group-hover:border-sky-300
                                group-active:bg-sky-100 group-active:border-sky-300
                                transition-colors
                            "
                        >
                            <Download
                                className="
                                    size-6 text-slate-200
                                    group-hover:text-sky-700
                                    group-active:text-sky-700
                                    transition-colors
                                "
                            />

                            <div className="space-y-2">
                                <h3
                                    className="
                                        text-base font-semibold text-slate-200
                                        group-hover:text-sky-900
                                        group-active:text-sky-900
                                        transition-colors
                                    "
                                >
                                    Exportação Fácil
                                </h3>

                                <p
                                    className="
                                        text-sm text-slate-300
                                        group-hover:text-sky-800
                                        group-active:text-sky-800
                                        transition-colors
                                    "
                                >
                                    Gere seu currículo pronto para envio ou
                                    impressão, sem complicações.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features
