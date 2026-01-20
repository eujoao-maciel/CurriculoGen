import { Plus } from 'lucide-react'

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
                <p classN
             </div>
         ) : (
             <div>
             <div>
         )}
      </div>
   )
}
