import { useState } from "react"
import { FileText, LayoutTemplate, Download } from "lucide-react"

import Title from "./Title.jsx"

const Features = () => {
    const [isHover, setIsHover] = useState(false)

    return (
        <div
            id="features"
            className="flex flex-col items-center my-10 scroll-mt-12"
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
                        className="w-full max-w-2xl h-auto object-contain rounded-2xl transition-all duration-500"
                        src="/imgs/featureimageanime.jpeg"
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
                <div
                    className="w-full md:w-1/2 space-y-6"
                    onMouseEnter={() => setIsHover(true)}
                    onMouseLeave={() => setIsHover(false)}
                >
                    {/* Feature 1 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div
                            className={`p-6 flex gap-4 rounded-xl border transition-colors
              group-hover:bg-violet-100 group-hover:border-violet-300
              ${!isHover ? "bg-violet-100 border-violet-300" : "border-transparent"}`}
                        >
                            <FileText className="size-6 text-violet-600" />

                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">
                                    Preenchimento Guiado
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Informe seus dados passo a passo e deixe que
                                    a plataforma organize tudo da forma
                                    correta.{" "}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 2 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div className="p-6 flex gap-4 rounded-xl border border-transparent transition-colors group-hover:bg-green-100 group-hover:border-green-300">
                            <LayoutTemplate className="size-6 text-green-600" />

                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">
                                    Modelos Profissionais
                                </h3>
                                <p className="text-sm text-slate-600">
                                    Escolha entre layouts modernos e bem
                                    estruturados, pensados para processos
                                    seletivos reais.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Feature 3 */}
                    <div className="flex justify-center max-w-md mx-auto group cursor-pointer">
                        <div className="p-6 flex gap-4 rounded-xl border border-transparent transition-colors group-hover:bg-orange-100 group-hover:border-orange-300">
                            <Download className="size-6 text-orange-600" />
                            <div className="space-y-2">
                                <h3 className="text-base font-semibold text-slate-700">
                                    Exportação Fácil
                                </h3>
                                <p className="text-sm text-slate-600">
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
