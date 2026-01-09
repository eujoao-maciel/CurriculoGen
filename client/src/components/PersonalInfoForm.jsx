import {
   User,
   Mail,
   Phone,
   MapPin,
   BriefcaseBusiness,
   Linkedin,
   Globe,
} from 'lucide-react'

const PersonalInfoForm = ({
   data,
   onChange,
   removeBackground,
   setRemoveBackground,
}) => {
   const safeData = data ?? {}

   const handleChange = (field, value) => {
      onChange({ ...data, [field]: value })
   }

   const fields = [
      {
         key: 'full_name',
         label: 'Nome Completo',
         icon: User,
         type: 'text',
         required: true,
      },
      {
         key: 'email',
         label: 'Email',
         icon: Mail,
         type: 'email',
         required: true,
      },
      { key: 'phone', label: 'Número de Telefone', icon: Phone, type: 'tel' },
      { key: 'location', label: 'Endereço', icon: MapPin, type: 'text' },
      {
         key: 'profession',
         label: 'Emprego',
         icon: BriefcaseBusiness,
         type: 'text',
      },
      {
         key: 'linkedin',
         label: 'Perfil do Linkedin',
         icon: Linkedin,
         type: 'url',
      },
      { key: 'website', label: 'Website Pessoal', icon: Globe, type: 'url' },
   ]

   return (
      <div>
         <h3
            className="
            text-lg font-semibold text-gray-900
           "
         >
            Informações Pessoais
         </h3>
         <p
            className="
            text-sm text-gray-600
            mb-3
            "
         >
            Comece com suas informações básicas
         </p>

         <div className="flex items-center gap-2">
            <label>
               {safeData.image ? (
                  <img
                     src={
                        typeof safeData.image === 'string'
                           ? safeData.image
                           : URL.createObjectURL(safeData.image)
                     }
                     alt="user-image"
                     className="
                     w-16 h-16 rounded-full object-cover
                     mt-5 mb-2 ring ring-slate-300 hover:opacity-80
                  "
                  />
               ) : (
                  <div className="flex items-center gap-2 mb-2">
                     <User className="size-10 p-2.5 border rounded-full" />
                     Carregar imagem de usuário
                  </div>
               )}

               <input
                  className="mt-3 hidden"
                  onChange={(e) => handleChange('image', e.target.files[0])}
                  type="file"
                  accept="image/jpeg, image/png"
               />
            </label>

            {typeof safeData.image === 'object' && (
               <div
                  className="
                        flex flex-col gap-1
                        pl-4 text-sm
                        "
               >
                  <p>Remover Fundo</p>
                  <label
                     className="
                            relative inline-flex items-center
                            cursor-pointer text-gray-900 gap-3
                            "
                  >
                     <input
                        type="checkbox"
                        className="sr-only peer"
                        onChange={() => setRemoveBackground((prev) => !prev)}
                        checked={removeBackground}
                     />

                     <div
                        className="
                                w-9 h-5 bg-slate-300 
                                rounded-full peer
                                peer-checked:bg-green-600
                                transition-colors duration-200
                                "
                     ></div>

                     <span
                        className="dot absolute left-1 top-1 w-3 h-3
                                bg-white rounded-full transition-transform
                                duration-200 ease-in-out peer-checked:translate-x-4
                                "
                     ></span>
                  </label>
               </div>
            )}
         </div>

         {fields.map((field) => {
            const Icon = field.icon

            return (
               <div key={field.key} className="space-y-1 mt-5">
                  <label
                     className=" 
                            flex items-center
                            gap-2 text-sm
                            font-medium 
                            text-gray-600
                            "
                  >
                     <Icon className="size-4" />
                     {field.label}
                     {field.required && <span className="text-red-500">*</span>}
                  </label>
                  <input
                     type={field.type}
                     value={safeData[field.key] || ''}
                     onChange={(e) => handleChange(field.key, e.target.value)}
                     className="
                        mt-1 w-full px-3 py-2
                        border border-gray-300
                        rounded-lg focus:ring
                        focus:ring-purple-500
                        focus:border-purple-500
                        outline-none text-sm
                        transition-colors
                     "
                     placeholder={`Digite seu ${field.label.toLowerCase()}`}
                     required={field.required}
                  />
               </div>
            )
         })}
      </div>
   )
}

export default PersonalInfoForm
