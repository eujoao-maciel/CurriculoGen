import { PlusIcon } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { api } from '../configs/api.js'
import toast from 'react-hot-toast'

import {
   FilePenLineIcon,
   PencilIcon,
   TrashIcon,
   XIcon,
} from 'lucide-react'

const Dashboard = () => {
   const colors = ['#9333ea', '#d97706', '#dc2626', '#0284c7', '#16a32a']

   const [allResumes, setAllResumes] = useState([])
   const [showCreateResume, setShowCreateResume] = useState(false)
   const [title, setTitle] = useState('')
   const [editResumeId, setEditResumeId] = useState('')

   const { user, token } = useSelector((state) => state.auth)
   const navigate = useNavigate()

   const loadAllResumes = async () => {
      try {
         const response = await fetch(`${api}/users/resumes`, {
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const data = await response.json()

         if (!response.ok) {
            throw new Error(data?.message)
         }

         setAllResumes(data.resumes)
      } catch (error) {
         toast.error(error.message)
      }
   }

   const createResume = async (e) => {
      e.preventDefault()

      try {
         const response = await fetch(`${api}/resume/create`, {
            method: 'POST',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({ title }),
         })

         const data = await response.json()

         if (!response.ok) throw new Error(data?.message)

         setAllResumes((prev) => [...prev, data.resume])
         setTitle('')
         setShowCreateResume(false)

         navigate(`/app/builder/${data.resume._id}`)
      } catch (error) {
         toast.error(error.message)
      }
   }

   const editTitle = async (e) => {
      e.preventDefault()

      try {
         const response = await fetch(`${api}/resume/update`, {
            method: 'PUT',
            headers: {
               'Content-Type': 'application/json',
               Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
               resumeId: editResumeId,
               resumeData: JSON.stringify({ title }),
            }),
         })

         const data = await response.json()

         if (!response.ok) throw new Error(data?.message)

         setAllResumes((prev) =>
            prev.map((resume) =>
               resume._id === editResumeId
                  ? { ...resume, title }
                  : resume
            )
         )

         setTitle('')
         setEditResumeId('')
         toast.success('Título atualizado')
      } catch (error) {
         toast.error(error.message)
      }
   }

   const deleteResume = async (resumeId) => {
      try {
         const confirmDelete = window.confirm(
            'Tem certeza que deseja excluir esse currículo?'
         )

         if (!confirmDelete) return

         const response = await fetch(`${api}/resume/delete/${resumeId}`, {
            method: 'DELETE',
            headers: {
               Authorization: `Bearer ${token}`,
            },
         })

         const data = await response.json()

         if (!response.ok) throw new Error(data?.message)

         setAllResumes((prev) =>
            prev.filter((resume) => resume._id !== resumeId)
         )

         toast.success('Currículo deletado')
      } catch (error) {
         toast.error(error.message)
      }
   }

   useEffect(() => {
      loadAllResumes()
   }, [])

   return (
      <div className="mx-auto max-w-7xl px-4 py-8">
         <p className="text-sm mb-6 text-gray-600 sm:hidden">
            Olá, {user?.name}
         </p>

         <div className="flex gap-4">
            <button
               onClick={() => setShowCreateResume(true)}
               className="group flex h-48 w-full sm:max-w-36 flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-slate-300 bg-white text-slate-600 hover:border-purple-500 hover:shadow-lg"
            >
               <PlusIcon className="size-10 text-white bg-purple-500 p-2 rounded-full" />
               <p className="text-sm group-hover:text-purple-600">
                  Criar Currículo
               </p>
            </button>
         </div>

         <hr className="my-6 border-slate-300" />

         <div className="grid grid-cols-2 gap-4 sm:flex">
            {allResumes.map((resume, index) => {
               const baseColor = colors[index % colors.length]

               return (
                  <button
                     key={resume._id}
                     onClick={() =>
                        navigate(`/app/builder/${resume._id}`)
                     }
                     className="[overflow-wrap:anywhere] p-2 relative h-48 w-full sm:max-w-36 rounded-lg flex flex-col items-center justify-center gap-2 border hover:shadow-lg"
                     style={{
                        background: `linear-gradient(135deg, ${baseColor}10, ${baseColor}40)`,
                        borderColor: baseColor + '40',
                     }}
                  >
                     <FilePenLineIcon style={{ color: baseColor }} />

                     <p style={{ color: baseColor }}>
                        {resume.title}
                     </p>

                     <div
                        onClick={(e) => e.stopPropagation()}
                        className="
                             absolute 
                             top-1
                             right-1
                             group-hover:flex
                             items-center
                             lg:hidden
                             flex
                          "
                     >
                        <TrashIcon
                           onClick={() => deleteResume(resume._id)}
                           className="
                                size-7
                                p-1.5
                                hover:bg-white/50
                                rounded
                                hover:text-slate-700
                                text-slate-500
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
                                text-slate-500
                                hover:text-slate-700
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
               className="fixed inset-0 flex items-center justify-center bg-black/70"
            >
               <div className="bg-white p-6 rounded-lg w-full max-w-sm">
                  <h2 className="text-lg font-bold mb-4">
                     Criar Currículo
                  </h2>

                  <input
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className="w-full border p-2 mb-4"
                     required
                  />

                  <button className="w-full bg-black text-white py-2 rounded">
                     Criar
                  </button>

                  <XIcon
                     onClick={() => setShowCreateResume(false)}
                     className="absolute top-4 right-4 cursor-pointer"
                  />
               </div>
            </form>
         )}

         {editResumeId && (
            <form
               onSubmit={editTitle}
               className="fixed inset-0 flex items-center justify-center bg-black/70"
            >
               <div className="bg-white p-6 rounded-lg w-full max-w-sm">
                  <h2 className="text-lg font-bold mb-4">
                     Editar título
                  </h2>

                  <input
                     value={title}
                     onChange={(e) => setTitle(e.target.value)}
                     className="w-full border p-2 mb-4"
                     required
                  />

                  <button className="w-full bg-indigo-600 text-white py-2 rounded">
                     Atualizar
                  </button>

                  <XIcon
                     onClick={() => setEditResumeId('')}
                     className="absolute top-4 right-4 cursor-pointer"
                  />
               </div>
            </form>
         )}
      </div>
   )
}

export default Dashboard
