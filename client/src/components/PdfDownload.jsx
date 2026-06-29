import { useEffect } from "react"
import { usePDF } from "@react-pdf/renderer"
import { ClassicTemplatePdf } from "./templates/pdf/ClassicTemplatePdf.jsx"
import ModernTemplatePdf from "./templates/pdf/ModernTemplatePdf"
import MinimalTemplatePdf from "./templates/pdf/MinimalTemplatePdf"
import MinimalImageTemplatePdf from "./templates/pdf/MinimalImageTemplatePdf"
import { Download } from "lucide-react"

const PdfDownload = ({ data, template, accentColor }) => {
    const getTemplatePdf = () => {
        switch (template) {
            case "modern":
                return (
                    <ModernTemplatePdf data={data} accentColor={accentColor} />
                )
            case "minimal":
                return (
                    <MinimalTemplatePdf data={data} accentColor={accentColor} />
                )
            case "minimal-image":
                return (
                    <MinimalImageTemplatePdf
                        data={data}
                        accentColor={accentColor}
                    />
                )
            default:
                return (
                    <ClassicTemplatePdf data={data} accentColor={accentColor} />
                )
        }
    }

    const [instance, updateInstance] = usePDF({
        document: getTemplatePdf(),
    })

    console.log(instance)

    useEffect(() => {
        updateInstance(getTemplatePdf())
    }, [template, accentColor, data])

    if (instance.loading) {
        return (
            <button
                disabled
                className="px-4 py-2 -my-2 bg-gray-300 text-gray-600 rounded"
            >
                Gerando PDF...
            </button>
        )
    }

    if (instance.error) {
        return (
            <button
                disabled
                className="px-4 py-2 -my-2 bg-red-200 text-red-600 rounded"
            >
                Erro ao gerar PDF
            </button>
        )
    }

    return (
        <a
            href={instance.url}
            download={`curriculo.pdf`}
            className="inline-flex items-center gap-2 px-4 py-2 -my-2 bg-blue-600 hover:bg-blue-700 text-white rounded transition"
        >
            <Download size={18} />
            Baixar PDF
        </a>
    )
}

export default PdfDownload
