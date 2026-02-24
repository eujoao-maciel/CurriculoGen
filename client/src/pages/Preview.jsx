import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { dummyResumeData } from '../data/dummyResumeData.js'
import { ArrowLeftIcon } from 'lucide-react'

import Loader from '../components/Loader.jsx'
import ResumePreview from '../components/ResumePreview.jsx' 

const Preview = () => {
   const { resumeId } = useParams()

   const [isLoading, setIsLoading] = useState(true)
   const [resumeData, setResumeData] = useState(null)

   const loadResume = async () => {
      setResumeData(
         dummyResumeData.find((resume) => resume._id === resumeId || null)
      )
      setIsLoading(false)
   }

   useEffect(() => {
      loadResume()
   }, [resumeId])

   return resumeData ? (
      <div className="bg-slate-100">
         <div className="max-w-3xl mx-auto py-10">
            <ResumePreview
               data={resumeData}
               template={resumeData.template}
               accentColor={resumeData.accent_color}
               classes="py-4 bg-white"
            />
         </div>
      </div>
   ) : (
      <div>
         {isLoading ? (
            <Loader />
         ) : (
            <div
               className="flex flex-col
               items-center justify-center
               h-screen"
            >
               <p
                  className="text-center text-6xl
                  text-slate-400 font-medium"
               >
                  Currículo não encontrado
               </p>

               <a
                  className="mt-6 bg-green-500
                  hover:bg-green-600 text-white
                  rounded-full px-6 h-9 m-1 ring-1
                  ring-offset-1 ring-green-400
                  flex items-center transition-colors"
                  href="/"
               >
                  <ArrowLeftIcon className="mr-2 size-4" />
                  Voltar para home page
               </a>
            </div>
         )}
      </div>
   )
}

export default Preview 
