import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeftIcon } from 'lucide-react'

const ResumeBuider = () => {
   const { resumeId } = useParams()

   const [resumeData, setResumeData] = useState({
      _id: '',
      title: '',
      personal_info: {},
      professional_summary: '',
      experience: [],
      education: [],
      project: [],
      skills: [],
      tamplate: 'classic',
      accent_color: '#3B82F6',
      public: false,
   })

   const dummyResumeData = [
      {
         _id: '1',
         title: 'Frontend Developer Resume',
         name: 'João',
         skills: ['React', 'JS'],
      },
      {
         _id: '2',
         title: 'Backend Developer Resume',
         name: 'Maria',
         skills: ['Node', 'SQL'],
      },
   ]

   useEffect(() => {
      const loadExistingResume = () => {
         const resume = dummyResumeData.find(
            (resume) => resume._id === resumeId
         )

         if (resume) {
            setResumeData(resume)
            document.title = resume.title
         }
      }

      loadExistingResume()
   }, [])

   return (
      <div>
         <div
            className="
          max-w-7x1
          mx-auto
          px-4
          py-4
      "
         >
            <Link
              to={'/app'}
              className="
               flex
               gap-2
               items-center
               text-slate-500
               hover:text-slate-700
               transition-all
            "
            >
               <ArrowLeftIcon className="size-4" /> Voltar
            </Link>
         </div>
      </div>
   )
}

export default ResumeBuider
