import { Mail, Phone, MapPin, Linkedin, Globe } from "lucide-react"

const ModernTemplate = ({ data, accentColor }) => {
    const formatDate = (dateStr) => {
        if (!dateStr) return ""
        const [year, month] = dateStr.split("-")
        return new Date(year, month - 1).toLocaleDateString("pt-BR", {
            year: "numeric",
            month: "short",
        })
    }

    return (
        <div className="max-w-4xl mx-auto bg-white text-gray-800">
            {/* Header */}
            <header
                className="p-8 text-white"
                style={{ backgroundColor: accentColor }}
            >
                <h1 className="text-2xl sm:text-4xl font-light mb-3">
                    {data.personal_info?.full_name || "Seu Nome"}
                </h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm ">
                    {data.personal_info?.email && (
                        <div className="flex items-center gap-2">
                            <Mail className="size-4" />
                            <span>{data.personal_info.email}</span>
                        </div>
                    )}
                    {data.personal_info?.phone && (
                        <div className="flex items-center gap-2">
                            <Phone className="size-4" />
                            <span>{data.personal_info.phone}</span>
                        </div>
                    )}
                    {data.personal_info?.location && (
                        <div className="flex items-center gap-2">
                            <MapPin className="size-4" />
                            <span>{data.personal_info.location}</span>
                        </div>
                    )}
                    {data.personal_info?.linkedin && (
                        <a
                            target="_blank"
                            href={data.personal_info?.linkedin}
                            className="hidden sm:flex items-center gap-2"
                        >
                            <Linkedin className="size-4" />
                            <span className="break-all text-xs">
                                {data.personal_info.linkedin.split(
                                    "https://www."
                                )[1]
                                    ? data.personal_info.linkedin.split(
                                          "https://www."
                                      )[1]
                                    : data.personal_info.linkedin}
                            </span>
                        </a>
                    )}
                    {data.personal_info?.website && (
                        <a
                            target="_blank"
                            href={data.personal_info?.website}
                            className="hidden sm:flex items-center gap-2"
                        >
                            <Globe className="size-4" />
                            <span className="break-all text-xs">
                                {data.personal_info.website.split("https://")[1]
                                    ? data.personal_info.website.split(
                                          "https://"
                                      )[1]
                                    : data.personal_info.website}
                            </span>
                        </a>
                    )}
                </div>
            </header>

            <div className="p-8">
                {/* Professional Summary */}
                {data.professional_summary && (
                    <section className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                            Resumo
                        </h2>
                        <p className="text-sm sm:text-base text-gray-700 ">
                            {data.professional_summary}
                        </p>
                    </section>
                )}

                {/* Experience */}
                {data.experience && data.experience.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-light mb-6 pb-2 border-b border-gray-200">
                            Experiência
                        </h2>

                        <div className="space-y-6">
                            {data.experience.map((exp, index) => (
                                <div
                                    key={index}
                                    className="relative pl-6 border-l"
                                    style={{ borderLeftColor: accentColor }}
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-normal text-gray-900">
                                                {exp.position}
                                            </h3>
                                            <p
                                                className="text-base sm:text-lg font-light"
                                                style={{ color: accentColor }}
                                            >
                                                {exp.company}
                                            </p>
                                        </div>
                                        <div className="hidden sm:flex text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded">
                                            {formatDate(exp.start_date)} -{" "}
                                            {exp.is_current
                                                ? "Atual"
                                                : formatDate(exp.end_date)}
                                        </div>
                                    </div>
                                    {exp.description && (
                                        <div className="text-sm text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
                                            {exp.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Projects */}
                {data.project && data.project.length > 0 && (
                    <section className="mb-8">
                        <h2 className="text-xl sm:text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                            Projetos
                        </h2>

                        <div className="space-y-6">
                            {data.project.map((p, index) => (
                                <div
                                    key={index}
                                    className="relative pl-6 border-l border-gray-200"
                                    style={{ borderLeftColor: accentColor }}
                                >
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-base sm:text-lg font-normal text-gray-900">
                                                {p.name}
                                            </h3>
                                        </div>
                                    </div>
                                    {p.description && (
                                        <div className="text-sm text-gray-700 leading-relaxed mt-3 whitespace-pre-line">
                                            {p.description}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                <div className="grid sm:grid-cols-2 gap-8">
                    {/* Education */}
                    {data.education && data.education.length > 0 && (
                        <section>
                            <h2 className="text-xl sm:text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                                Formação
                            </h2>

                            <div className="space-y-4">
                                {data.education.map((edu, index) => (
                                    <div key={index}>
                                        <h3 className="text-base sm:text-lg font-normal text-gray-900">
                                            {edu.field && `${edu.field} - `}
                                            {edu.degree}
                                        </h3>
                                        <p className="text-base sm:text-lg font-light" style={{ color: accentColor }}>
                                            {edu.institution}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    )}

                    {/* Skills */}
                    {data.skills && data.skills.length > 0 && (
                        <section>
                            <h2 className="text-2xl font-light mb-4 pb-2 border-b border-gray-200">
                                Habilidades
                            </h2>

                            <div className="flex flex-wrap gap-2">
                                {data.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-3 py-1 text-sm text-white rounded-full"
                                        style={{ backgroundColor: accentColor }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </section>
                    )}
                </div>
            </div>
        </div>
    )
}

export default ModernTemplate
