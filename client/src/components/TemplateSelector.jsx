import { useState, useRef, useEffect } from "react"
import { Layout, Check } from "lucide-react"

const TemplateSelector = ({ selectedTemplate, onChange }) => {
    const [isOpen, setIsOpen] = useState(false)
    const containerRef = useRef(null)

    const templates = [
        {
            id: "classic",
            name: "Classic",
            preview:
                "Um currículo em formato tradicional, com tipografia profissional e formatos padrões.",
        },
        {
            id: "modern",
            name: "Modern",
            preview:
                "Currículo feito com uso estratégico no uso de cores e escolha moderna de fontes.",
        },
        {
            id: "minimal-image",
            name: "Minimal Image",
            preview:
                "Design sofisticado com uma pequena foto e tipografia minimalista.",
        },
        {
            id: "minimal",
            name: "Minimal",
            preview:
                "Design minimalista focado em exibir suas informações de forma direta e simples.",
        },
    ]

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target)
            ) {
                setIsOpen(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside)

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div ref={containerRef} className="relative overflow-visible">
            <button
                onClick={() => setIsOpen((prev) => !prev)}
                className="
                    flex items-center gap-1
                    text-sm bg-gradient-to-br from-indigo-50
                    to-indigo-100 hover:ring
                    transition-all px-3 py-2 rounded-lg
                "
            >
                <Layout className="text-gray-900" size={14} />
                <span className="max-sm:hidden text-gray-900">
                    Modelo
                </span>
            </button>

            {isOpen && (
                <div
                    className="
                        absolute top-full left-0
                        mt-2 p-3 space-y-3
                        z-50 bg-white rounded-md
                        border border-gray-200
                        shadow-sm min-w-[18rem]
                    "
                >
                    {templates.map((template) => (
                        <div
                            key={template.id}
                            onClick={() => {
                                onChange(template.id)
                                setIsOpen(false)
                            }}
                            className={`
                                relative p-3 border rounded-md
                                cursor-pointer transition-all
                                ${
                                    selectedTemplate === template.id
                                        ? "border-gray-900 bg-sky-100"
                                        : "border-gray-300 bg-gray-100 hover:border-gray-400 hover:bg-gray-200"
                                }
                            `}
                        >
                            {selectedTemplate === template.id && (
                                <div className="absolute top-2 right-2">
                                    <div className="w-5 h-5 bg-black rounded-full flex items-center justify-center">
                                        <Check className="w-3 h-3 text-white" />
                                    </div>
                                </div>
                            )}

                            <h4 className="font-medium text-gray-800">
                                {template.name}
                            </h4>

                            <div
                                className="
                                    mt-2 p-2 bg-indigo-50
                                    rounded text-xs italic
                                    text-gray-500
                                "
                            >
                                {template.preview}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default TemplateSelector

