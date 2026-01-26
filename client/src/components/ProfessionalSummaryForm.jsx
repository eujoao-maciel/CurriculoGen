import { Sparkles } from "lucide-react"

const ProfessionalSummaryForm = ({ data, onChange, setResumeData }) => {
    return (
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <h3
                        className="
                        flex items-center gap-2
                        text-lg font-semibold
                        text-gray-900
                    "
                    >
                        Resumo Profissional
                    </h3>
                    <p
                        className="
                        text-sm text-gray-500
                    "
                    >
                        Adicione seu resumo aqui
                    </p>
                </div>

                <button
                    className="
                        flex items-center gap=2
                        px-3 py-1 text-sm bg-sky-50
                        text-sky-600 rounded 
                        hover:bg-sky-100
                        transition-colors
                        disabled:opacity-50
                    "
                >
                    <Sparkles className="size-4" />
                    Aprimorar  
                </button>
            </div>
        
            <div className="mt-6">
               <textarea 
                   value={data || ""}
                   onChange={(e) => onChange(e.target.value)}
                   rows={7}
                   className="
                      w-full p-3 px-4 mt-2 border
                      text-sm border-gray-300
                      rounded-lg focus:ring
                      focus:ring-black
                      focus:border-black
                      outline-none resize-none
                      transition-colors 
                   " 
                   placeholder="Escreva um resumo profissional que destaque suas principais competências e objetivos de carreira..."
               />
               <p 
                 className="
                    text-sm text-gray-500
                    max-w-4/5 mx-auto
                    text-center
                 "
               >
                   Dica: Mantenha o texto curto (3-4 frases) e destaque seus resultados e competências mais importantes.
               </p>
            </div>
        </div>
    )
}

export default ProfessionalSummaryForm
