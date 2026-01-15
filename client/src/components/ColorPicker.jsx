import { useState } from 'react'
import { Palette, Check } from 'lucide-react'

const ColorPicker = ({ selectedColor, onChange }) => {
   const colors = [
      { name: 'Azul', value: '#3B82F6' },
      { name: 'Indigo', value: '#6366F1' },
      { name: 'Roxo', value: '#8B5CF6' },
      { name: 'Verde', value: '#10B981' },
      { name: 'Vermelho', value: '#EF4444' },
      { name: 'Laranja', value: '#F97316' },
      { name: 'Verde-azulado', value: '#14B8A6' },
      { name: 'Rosa', value: '#EC4899' },
      { name: 'Cinza', value: '#6B7280' },
      { name: 'Preto', value: '#030303' },
   ]

   const [isOpen, setIsOpen] = useState(false)

   return (
      <div className="relative">
         <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex items-center gap-1 text-sm
              text-blue-600 bg-gradient-to-br
              from-blue-50 to-blue-100
              ring-blue-300 hover:ring
              transition-all px-1 py-2 
              reounded-lg
            "
         >
            <Palette size={16} /> <span className="max-sm:hidden">Realce</span>
         </button>

         {isOpen && (
            <div
               className="
                  grid grid-cols-4 w-60
                  gap-2 absolute top-full
                  left-0 right-0 p-3 mt-2
                  z-10 bg-white rounded-md
                  border border-gray-200
                  shadow-sm
               "
            >
               {colors.map((color) => (
                  <div
                     className="relative cursor-pointer group flex flex-col"
                     key={color.value}
                     onClick={() => {
                        onChange(color.value)
                        setIsOpen(false)
                     }}
                  >
                     <div
                        className="
                           w-12 h-12 rounded-full border-2
                           border-transparent transition-colors
                           group-hover:border-black/25
                         "
                        style={{ backgroundColor: color.value }}
                     ></div>

                     {selectedColor === color.value && (
                        <div
                           className="
                            absolute top-0 left-0
                            right-0 bottom-4.5
                            flex items-center 
                            justify-center
                          "
                        >
                           <Check className="size-5 text-white" />
                        </div>
                     )}

                     <p className="text-xs text-center mt-1 text-gray-600">
                        {color.name}
                     </p>
                  </div>
               ))}
            </div>
         )}
      </div>
   )
}

export default ColorPicker
