import { Plus, Briefcase } from 'lucide-react'

const ExperienceForm = ({ data, onChange }) => {
   const addExperience = () => {
      const newExperience = {
         company: '',
         position: '',
         start_date: '',
         end_date: '',
         description: '',
         is_current: false,
      }
      onChange([...data, newExperience])
   }

   const removeExperience = (index) => {
      const updated = data.filter((_, i) => i !== index)
      onChange(updated)
   }

   const updateExperience = (index, field, value) => {
      const updated = [...data]
      updated[index] = { ...updated[index], [field]: value }
      onChange(updated)
   }

   return (
      <div className="space-y-6">
         <div className="flex items-center justify-between">
            <div>
               <h3
                  className="
                        flex items-center gap-2 
                        text-lg font-semibold
                        text-gray-900
                     "
               >
                  Experiência Profissional
               </h3>
               <p className="text-sm text-gray-500">
                  Adicione sua experiência profissional
               </p>
            </div>

            <button
               onClick={addExperience}
               className="
                    flex items-center gap-2 
                    px-3 py-1 text-sm rounded
                    hover:bg-purple-200
                    bg-purple-100 text-purple-700
                    transition-colors
                 "
            >
               <Plus className="size-4" />
               Adicione sua experiência
            </button>
         </div>

         {data.length === 0 ? (
             <div className="text-center py-8 text-gray-500">
                <Briefcase className="w-12 h-12 mx-auto mb-3 text-gray-300"/>
                <p>Sem experiência de trabalho ainda</p>
                <p className="text-sm">Clique "Adicione sua experiência" para começar.</p>
             </div>
         ) : (
             <div className="space-y-4">
                {data.map((experience, index) => (
                   <div
                      className="
                         p-4 border border-gray-200
                         rounded-lg space-y-3
                      "
                   > 
                     <div className="flex justify-between items-start">
                         <h4>Experiência #(index + 1)</h4>
                         <button 
                           onClick={() => removeExperience(index)}
                           className="text-red-500 hover:text-red-700 transition-colors"
                         >
                             <Trash2 className="size-4"/> 
                         </button>
                     </div> 

                     <div className="grid md:grid-cols-2 gap-3">
                        <input 
                           value={experience.company || ""}
                           onChange={(e) => updateExperience(index, "company", e.target.value)}
                           type="text"
                           placeholder="Nome da Empresa"
                           className="px-3 py-2 text-sm rounded-lg"
                        /> 

                         <input 
                           value={experience.position || ""}
                           onChange={(e) => updateExperience(index, "position", e.target.value)}
                           type="text"
                           placeholder="Nome da Função de Traabalho"
                           className="px-3 py-2 text-sm rounded-lg"
                        /> 

                        <input 
                           value={experience.start_date || ""}
                           onChange={(e) => updateExperience(index, "start_date", e.target.value)}
                           type="mounth"
                           className="px-3 py-2 text-sm rounded-lg"
                        /> 
                     </div>
                   </div>
                ))} 
             <div>
         )}
      </div>
   )
}

export default ExperienceForm
