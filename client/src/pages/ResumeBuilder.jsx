import { useState, useEffect } from "react"
import { useParams, Link } from "react-router-dom"
import {
    ArrowLeftIcon,
    User,
    FileText,
    Briefcase,
    GraduationCap,
    FolderIcon,
    Sparkles,
} from "lucide-react"

const ResumeBuider = () => {
    const { resumeId } = useParams()

    const [resumeData, setResumeData] = useState({
        _id: "",
        title: "",
        personal_info: {},
        professional_summary: "",
        experience: [],
        education: [],
        project: [],
        skills: [],
        tamplate: "classic",
        accent_color: "#3B82F6",
        public: false,
    })

    const dummyResumeData = [
        {
            _id: "1",
            title: "Frontend Developer Resume",
            name: "João",
            skills: ["React", "JS"],
        },
        {
            _id: "2",
            title: "Backend Developer Resume",
            name: "Maria",
            skills: ["Node", "SQL"],
        },
    ]

    const [activeSectionIndex, setActiveSectionIndex] = useState(2)
    const [removeBackground, setRemoveBackground] = useState(false)

    const sections = [
        { id: "personal", name: "Personal Info", icon: User },
        { id: "summay", name: "Summary", icon: FileText },
        { id: "experience", name: "Experience", icon: Briefcase },
        { id: "education", name: "Education", icon: GraduationCap },
        { id: "projects", name: "Projects", icon: FolderIcon },
        { id: "skills", name: "Skills", icon: Sparkles },
    ]

    const activeSection = sections[activeSectionIndex]

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
          max-w-7xl
          mx-auto
          px-4
          py-4
      "
            >
                <Link
                    to={"/app"}
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

            <div className="max-w-7xl mx-auto px-4 pb-8">
                <div className="grid lg:grid-cols-12 gap-8">
                    {/* Left Panel - Form*/}
                    <div
                        className="
                        relative
                        lg:col-span-5
                        rounded-lg
                        overflow-hidden
                        
                    "
                    >
                        <div
                            className="
                            bg-white
                            rounded-lg
                            shadow-sm
                            border
                            border-gray-200
                       "
                        >
                            <hr
                                className="
                              absolute 
                              top-0
                              left-0
                              right-0
                              border-2
                          "
                            />
                            <hr
                                className="
                              absolute
                              top-0
                              left-0
                              h-1
                              bg-gradient-to-r from-purple-500 to-purple-600
                              border-none
                              transition-all
                              duration-1000
                              "
                                style={{
                                    width: `${(activeSectionIndex * 100) / (sections.length - 1)}%`
                                }}
                            />
                        </div>
                    </div>

                    {/* Right Panel - Preview*/}
                    <div></div>
                </div>
            </div>
        </div>
    )
}

export default ResumeBuider
