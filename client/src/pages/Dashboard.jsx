import { PlusIcon, UploadCloudIcon } from 'lucide-react'
import { useState } from 'react'
import {
   FilePenLineIcon,
   PencilIcon,
   TrashIcon,
   XIcon,
   UploadCloud,
} from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const Dashboard = () => {
   const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a32a']
   // const [allResumes, setAllResumes] = useState([])
   const [showCreateResume, setShowCreateResume] = useState(false)
   const [showUploadResume, setShowUploadResume] = useState(false)
   const [title, setTitle] = useState('')
   const [resume, setResume] = useState(null)
   const [editResumeId, setEditResumeId] = useState('')

   const navigate = useNavigate()

   const allResumes = [
      { _id: 1, title: 'curriculo 1', updatedAt: '01-01-2025' },
      { _id: 2, title: 'documento pdf', updatedAt: '02-02-2025' },
      { _id: 3, title: 'foto', updatedAt: '03-03-2025' },
      { _id: 4, title: 'aquivo', updatedAt: '04-04-2025' },
   ]

   const createResume = async (e) => {
      e.preventDefault()

      setShowCreateResume(false)

      navigate(`/app/builder/res123`)
   }

   const editTitle = async (e) => {
      e.preventDefault()
   }

   const deleteResume = async (resumeId) => {
      const confirm = window.confirm(
         'Tem certeza que deseja excluir esse arquivo?'
      )

      if (confirm) {
         setAllResumes((prev) =>
            prev.filter((resume) => resume._id !== resumeId)
         )
      }
   }

   const uploadResume = async (e) => {
      e.preventDefault()

      setShowCreateResume(false)

      navigate(`/app/builder/res123`)
   }

   return (
      <div>
         <div className="mx-auto max-w-7xl px-4 py-8">
            <p className="text-2x1 text-tranparent mb-6 bg-gradient-to-r from-slate-600 to-slate-700 bg-clip-text font-medium sm:hidden">
               Bem Vindo, teste nome
            </p>

            <div className="flex gap-4">
               <button
                  onClick={() => setShowCreateResume(true)}
                  className="group flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white text-slate-600 transition-all duration-300 hover:border-purple-500 hover:shadow-lg sm:max-w-36"
               >
                  <PlusIcon className="size-11 rounded-full bg-gradient-to-br from-purple-300 to-purple-500 p-2.5 text-white transition-all duration-300" />
                  <p className="text-sm transition-all duration-300 group-hover:text-purple-600">
                     Criar Currículo
                  </p>
               </button>

               <button
                  onClick={() => setShowUploadResume(true)}
                  className="group flex h-48 w-full cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white text-slate-600 transition-all duration-300 hover:border-indigo-500 hover:shadow-lg sm:max-w-36"
               >
                  <UploadCloudIcon className="size-11 rounded-full bg-gradient-to-br from-indigo-300 to-indigo-500 p-2.5 text-white transition-all duration-300" />
                  <p className="text-sm transition-all duration-300 group-hover:text-indigo-600">
                     Carregar Arquivo
                  </p>
               </button>
            </div>

            <hr className="my-6 border-slate-300 sm:w-[305px]" />

            <div className="grid grid-cols-2 flex-wrap gap-4 sm:flex">
               {allResumes.map((resume, index) => {
                  const baseColor = colors[index % colors.length]

                  return (
                     <button
                        onClick={() => navigate(`/app/builder/${resume._id}`)}
                        key={index}
                        className=" 
                          relative
                          w-full 
                          sm:max-w-36
                          h-48
                          flex
                          flex-col 
                          items-center
                          justify-center
                          rounded-lg
                          gap-2 
                          border 
                          group 
                          hover:shadow-lg
                          transition-all
                          duration-300
                          cursor-pointer
                        "
                        style={{
                           background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                           borderColor: baseColor + '40',
                        }}
                     >
                        <FilePenLineIcon
                           className=" 
                               size-7 
                               group-hover:scale-105                            
                               transition-all
                            "
                           style={{
                              color: baseColor,
                           }}
                        />

                        <p
                           className="
                             text-sm
                             group-hover:scale-105
                             transition-all
                             px-2
                             text-center
                          "
                           style={{
                              color: baseColor,
                           }}
                        >
                           {resume.title}
                        </p>

                        <p
                           className="
                             absolute
                             bottom-1
                             text-[11px]
                             text-slate-400
                             group-hover:text-slate-500 
                             transition-all
                             duration-300
                             px-2
                             text-center                        
                          "
                           style={{
                              color: baseColor + '90',
                           }}
                        >
                           Atualizado em{' '}
                           {new Date(resume.updatedAt).toLocaleDateString()}
                        </p>

                        <div
                           onClick={(e) => e.stopPropagation()}
                           className="
                             absolute 
                             top-1
                             right-1
                             group-hover:flex
                             items-center
                             hidden
                          "
                        >
                           <TrashIcon
                              onClick={() => {
                                 deleteResume(resume._id)
                              }}
                              className="
                                size-7
                                p-1.5
                                hover:bg-white/50
                                rounded
                                text-slate-700
                                transition-colors
                              "
                           />
                           <PencilIcon
                              onClick={() => {
                                 setEditResumeId(resume._id)
                                 setTitle(resume.title)
                              }}
                              className="
                                size-7
                                p-1.5
                                hover:bg-white/50
                                rounded
                                text-slate-700
                                transition-colors
                              "
                           />
                        </div>
                     </button>
                  )
               })}
            </div>

            {showCreateResume && (
               <form
                  onSubmit={createResume}
                  onClick={() => setShowCreateResume(false)}
                  className="
                 fixed
                 inset-0
                 bg-black/70
                 backdrop-blur
                 bg-opacity-50
                 z-10
                 flex
                 items-center
                 justify-center
              "
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="
                        relative 
                        bg-slate-50
                        border
                        shadow-md
                        rounded-lg 
                        w-full
                        max-w-sm
                        p-6
                     "
                  >
                     <h2
                        className="
                          text-xl
                          font-bold
                          mb-4
                          text-center
                       "
                     >
                        Criar um Currículo
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Digite o nome do currículo"
                        className="
                           w-full
                           px-4
                           py-2
                           mb-4
                           focus:border-purple-600
                           ring-purple-600
                        "
                        required
                     />

                     <button
                        className="
                        w-full
                        py-2
                        bg-purple-600
                        text-white
                        rounded
                        hover:bg-purple-700
                        transition-colors
                     "
                     >
                        Criar Currículo
                     </button>

                     <XIcon
                        onClick={() => {
                           setShowCreateResume(false)
                           setTitle('')
                        }}
                        className="
                        absolute
                        top-4
                        right-4
                        text-slate-400
                        hover:text-slate-600
                        cursor-pointer
                        transition-colors
                     "
                     />
                  </div>
               </form>
            )}

            {showUploadResume && (
               <form
                  onSubmit={uploadResume}
                  onClick={() => setShowCreateResume(false)}
                  className="
                 fixed
                 inset-0
                 bg-black/70
                 backdrop-blur
                 bg-opacity-50
                 z-10
                 flex
                 items-center
                 justify-center
              "
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="
                        relative 
                        bg-slate-50
                        border
                        shadow-md
                        rounded-lg 
                        w-full
                        max-w-sm
                        p-6
                     "
                  >
                     <h2
                        className="
                          text-xl
                          font-bold
                          mb-4
                          text-center
                       "
                     >
                        Atualização de Currículo
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        type="text"
                        placeholder="Digite o nome do currículo"
                        className="
                           w-full
                           px-4
                           py-2
                           mb-4
                           focus:border-purple-600
                           ring-purple-600
                        "
                        value={title}
                        required
                     />

                     <div>
                        <label
                           htmlFor="resume-input"
                           className="
                           block
                           text-sm
                           text-slate-700
                         "
                        >
                           Selecione o arquivo do currículo
                           <div
                              className="
                                flex flex-col items-center justify-center
                                gap-2 border group text-slate-400
                                border-slate-400 border-dashed
                                rounded-md p-4 py-10 my-4 
                                hover:border-purple-500 
                                hover:text-purple-700
                                cursor-pointer transition-colors
                              "
                           >
                              {resume ? (
                                 <p className="text-purple-700">
                                    {resume.name}
                                 </p>
                              ) : (
                                 <>
                                    <UploadCloud className="size=14 stroke-1" />
                                 </>
                              )}
                           </div>
                        </label>
                        <input
                           onChange={(e) => setResume(e.target.files[0])}
                           type="file"
                           id="resume-input"
                           accept=".pdf"
                           hidden
                        />
                     </div>

                     <button
                        className="
                        w-full
                        py-2
                        bg-purple-600
                        text-white
                        rounded
                        hover:bg-purple-700
                        transition-colors
                     "
                     >
                        Atualizar Currículo
                     </button>

                     <XIcon
                        onClick={() => {
                           setShowUploadResume(false)
                           setTitle('')
                        }}
                        className="
                        absolute
                        top-4
                        right-4
                        text-slate-400
                        hover:text-slate-600
                        cursor-pointer
                        transition-colors
                     "
                     />
                  </div>
               </form>
            )}

            {editResumeId && (
               <form
                  onSubmit={editTitle}
                  onClick={() => setEditResumeId('')}
                  className="
                 fixed
                 inset-0
                 bg-black/70
                 backdrop-blur
                 bg-opacity-50
                 z-10
                 flex
                 items-center
                 justify-center
              "
               >
                  <div
                     onClick={(e) => e.stopPropagation()}
                     className="
                        relative 
                        bg-slate-50
                        border
                        shadow-md
                        rounded-lg 
                        w-full
                        max-w-sm
                        p-6
                     "
                  >
                     <h2
                        className="
                          text-xl
                          font-bold
                          mb-4
                          text-center
                       "
                     >
                        Título do Currículo
                     </h2>
                     <input
                        onChange={(e) => setTitle(e.target.value)}
                        value={title}
                        type="text"
                        placeholder="Digite o nome do currículo"
                        className="
                           w-full
                           px-4
                           py-2
                           mb-4
                           focus:border-purple-600
                           ring-purple-600
                        "
                        required
                     />

                     <button
                        className="
                        w-full
                        py-2
                        bg-purple-600
                        text-white
                        rounded
                        hover:bg-purple-700
                        transition-colors
                     "
                     >
                        Atualizar
                     </button>

                     <XIcon
                        onClick={() => {
                           setEditResumeId('')
                           setTitle('')
                        }}
                        className="
                        absolute
                        top-4
                        right-4
                        text-slate-400
                        hover:text-slate-600
                        cursor-pointer
                        transition-colors
                     "
                     />
                  </div>
               </form>
            )}
         </div>
      </div>
   )
}

export default Dashboard
