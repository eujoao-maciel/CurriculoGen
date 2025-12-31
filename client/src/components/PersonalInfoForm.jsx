import { User } from 'lucide-react'

const PersonalInfoForm = ({
   data,
   onChange,
   removeBackground,
   setRemoveBackground,
}) => {
   const handleChange = (field, value) => {
      onChange({ ...data, [field]: value })
   }

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
            "
         >
            Comece com suas informações básicas
         </p>

         <div className="flex items-center gap-2">
            <label>
               {data.image ? (
                  <img
                     src={
                        typeof data.image === 'string'
                           ? data.image
                           : URL.createObjectURL()
                     }
                     alt="user-image"
                     className="
                     w-16 h-16 rounded-full object-cover
                     mt-5 ring ring-slate-300 hover:opacity-80
                  "
                  />
               ) : (
                  <div>
                     <User className="size-10 p-2.5 border rounded-full" />
                     Carregar imagem de usuário
                  </div>
               )}

               <input
                  onChange={(e) => handleChange('image', e.target.files[0])}
                  type="file"
                  accept="image/jpeg, image/png"
               />
            </label>

            {typeof data.image === 'object' && (
               <div
                  className="
                     flex flex-col gap-1
                     pl-4 text-sm
                  "
               >
                  <p>Remover Fundo</p>
                  <>Aqui</>
               </div>
            )}
         </div>
      </div>
   )
}

export default PersonalInfoForm
