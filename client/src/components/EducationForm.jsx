import { GraduationCap, Plus, Trash2 } from 'lucide-react'

const EducationForm = ({ data, onChange }) => {
   const addEducation = () => {
      const newEducation = {
         institution: '',
         degree: '',
         field: '',
         graduation_date: '',
      }
      onChange([...data, newEducation])
   }

   const removeEducation = (index) => {
      const updated = data.filter((_, i) => i !== index)
      onChange(updated)
   }

   const updateEducation = (index, field, value) => {
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
                  Formação Academica
               </h3>
               <p className="text-sm text-gray-500">
                  Adicione sua escolaridade
               </p>
            </div>

            <button
               onClick={addEducation}
               className="
                    flex items-center gap-2 
                    px-3 py-1 text-sm rounded
                    hover:bg-sky-100
                    bg-sky-50 text-sky-600
                    transition-colors
                 "
            >
               <Plus className="size-4" />
               Adicionar
            </button>
         </div>

         {data.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
               <GraduationCap className="w-12 h-12 mx-auto mb-3 text-gray-300" />
               <p>Campo de escolaridade vazio.</p>
               <p className="text-sm">Clique "Adicionar" para começar</p>
            </div>
         ) : (
            <div className="space-y-4">
               {data.map((education, index) => (
                  <div
                     key={index}
                     className="
                         p-4 border border-gray-200
                         rounded-lg space-y-3
                      "
                  >
                     <div className="flex justify-between items-start">
                        <h4>Formação academica {index + 1}</h4>
                        <button
                           onClick={() => removeEducation(index)}
                           className="text-red-500 hover:text-red-700 transition-colors"
                        >
                           <Trash2 className="size-4" />
                        </button>
                     </div>

                     <div className="grid md:grid-cols-2 gap-3">
                        <input
                           value={education.institution || ''}
                           onChange={(e) =>
                              updateEducation(
                                 index,
                                 'institution',
                                 e.target.value
                              )
                           }
                           type="text"
                           placeholder="Nome da Instituição"
                           className="px-3 py-2 text-sm"
                        />

                        <input
                           value={education.degree || ''}
                           onChange={(e) =>
                              updateEducation(index, 'degree', e.target.value)
                           }
                           type="text"
                           placeholder="Ano da Formação"
                           className="px-3 py-2 text-sm"
                        />

                        <input
                           value={education.field || ''}
                           onChange={(e) =>
                              updateEducation(index, 'field', e.target.value)
                           }
                           type="text"
                           className="px-3 py-2 text-sm"
                           placeholder="Area de Estudo"
                        />
                     </div>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default EducationForm
