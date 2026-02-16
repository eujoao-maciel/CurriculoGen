import { useState } from "react"
import { FileText, LayoutTemplate, Download } from "lucide-react"
import Title from "./Title.jsx"

const FeatureItem = ({ Icon, title, description, active, onClick }) => {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-pressed={active}
            className={`group w-full max-w-md mx-auto flex items-start gap-4 p-6 rounded-xl border transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-sky-300
        ${active ? "bg-sky-100 border-sky-300" : "border-transparent hover:bg-sky-100 hover:border-sky-300"}`}
        >
            <Icon
                className={`w-6 h-6 transition-colors ${active ? "text-sky-700" : "text-slate-200"} group-hover:text-sky-700`}
            />

            <div className="text-left">
                <h3
                    className={`text-base font-semibold transition-colors ${active ? "text-sky-900" : "text-slate-200"} group-hover:text-sky-900`}
                >
                    {title}
                </h3>
                <p
                    className={`text-sm transition-colors ${active ? "text-sky-800" : "text-slate-300"} group-hover:text-sky-800`}
                >
                    {description}
                </p>
            </div>
        </button>
    )
}

const Features = () => {
    const [activeIndex, setActiveIndex] = useState(null)

    const items = [
        {
            Icon: FileText,
            title: "Preenchimento Guiado",
            description:
                "Informe seus dados passo a passo e deixe que a plataforma organize tudo da forma correta.",
        },
        {
            Icon: LayoutTemplate,
            title: "Modelos Profissionais",
            description:
                "Escolha entre layouts modernos e bem estruturados, pensados para processos seletivos reais.",
        },
        {
            Icon: Download,
            title: "Exportação Fácil",
            description:
                "Gere seu currículo pronto para envio ou impressão, sem complicações.",
        },
    ]

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
                    {items.map((it, idx) => (
                        <FeatureItem
                            key={idx}
                            Icon={it.Icon}
                            title={it.title}
                            description={it.description}
                            active={activeIndex === idx}
                            onClick={() =>
                                setActiveIndex(activeIndex === idx ? null : idx)
                            }
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Features
