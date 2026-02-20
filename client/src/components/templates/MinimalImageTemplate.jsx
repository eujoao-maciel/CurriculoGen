import { Mail, Phone, MapPin, Linkedin } from 'lucide-react'

const MinimalImageTemplate = ({ data = {}, accentColor = '#2563eb' }) => {
   const formatDate = (dateStr) => {
      if (!dateStr) return ''
      const [year, month] = dateStr.split('-')
      return new Date(year, month - 1).toLocaleDateString('pt-BR', {
         year: 'numeric',
         month: 'short',
      })
   }

   const getImageSrc = (image) => {
      if (!image) return null
      if (typeof image === 'string') return image
      try {
         // handle File / Blob
         return URL.createObjectURL(image)
      } catch (e) {
         return null
      }
   }

   const imageSrc = getImageSrc(data.personal_info?.image)

   return (
      <div className="max-w-4xl mx-auto bg-white text-zinc-800 shadow-sm">
         {/* Grid: mobile 1 column, sm -> 3 columns (aside 1, main 2) */}
         <div className="grid grid-cols-1 sm:grid-cols-3 min-h-[220px]">
            {/* Header area: image + name/title on top for mobile, left for sm+ */}
            <div className="sm:col-span-1 flex items-center justify-center sm:justify-start p-6 sm:p-10">
               {imageSrc ? (
                  <img
                     src={imageSrc}
                     alt={data.personal_info?.full_name || 'Foto de perfil'}
                     className="w-28 h-28 sm:w-32 sm:h-32 object-cover rounded-full"
                     style={{ boxShadow: `0 1px 0 ${accentColor}33` }}
                  />
               ) : (
                  <div
                     className="w-28 h-28 sm:w-32 sm:h-32 rounded-full flex items-center justify-center text-sm font-medium"
                     style={{
                        background: `${accentColor}20`,
                        color: accentColor,
                     }}
                  >
                     {data.personal_info?.full_name
                        ? data.personal_info.full_name
                             .split(' ')
                             .slice(0, 2)
                             .map((n) => n[0])
                             .join('')
                        : 'SN'}
                  </div>
               )}
            </div>

            <div className="sm:col-span-2 flex flex-col justify-center p-6 sm:p-10">
               <h1 className="text-xl sm:text-4xl font-bold text-zinc-700 leading-tight">
                  {data.personal_info?.full_name || 'Seu Nome'}
               </h1>
               <p className="uppercase text-zinc-600 font-medium text-xs sm:text-sm mt-1">
                  {data.personal_info?.profession || 'Profissão'}
               </p>

               {/* horizontal contact row on mobile, hidden on small screens (because aside contains contact)
              On larger screens we keep contact info in aside and avoid duplication */}
               <div className="mt-3 sm:hidden text-xs text-zinc-700">
                  <div className="flex flex-wrap gap-3">
                     {data.personal_info?.phone && (
                        <div className="flex items-center gap-2">
                           <Phone size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.phone}</span>
                        </div>
                     )}
                     {data.personal_info?.email && (
                        <div className="flex items-center gap-2">
                           <Mail size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.email}</span>
                        </div>
                     )}
                     {data.personal_info?.location && (
                        <div className="flex items-center gap-2">
                           <MapPin size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.location}</span>
                        </div>
                     )}
                     {data.personal_info?.linkedin && (
                        <a
                           href={data.personal_info.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2"
                        >
                           <Linkedin size={14} style={{ color: accentColor }} />
                           <span className="break-all">
                              {data.personal_info.linkedin}
                           </span>
                        </a>
                     )}
                  </div>
               </div>
            </div>

            {/* Aside (left column on sm+, becomes full-width below main on mobile) */}
            <aside className="sm:col-span-1 sm:order-none order-last border-t sm:border-t-0 sm:border-r border-zinc-200 p-6">
               {/* Contact - hidden on sm? No: show on sm+, hidden on mobile handled above */}
               <section className="mb-6 hidden sm:block">
                  <h2 className="uppercase text-xs sm:text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                     Contato
                  </h2>

                  <div className="space-y-3 text-sm text-zinc-700">
                     {data.personal_info?.phone && (
                        <div className="flex items-center gap-2">
                           <Phone size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.phone}</span>
                        </div>
                     )}

                     {data.personal_info?.email && (
                        <div className="flex items-center gap-2">
                           <Mail size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.email}</span>
                        </div>
                     )}

                     {data.personal_info?.location && (
                        <div className="flex items-center gap-2">
                           <MapPin size={14} style={{ color: accentColor }} />
                           <span>{data.personal_info.location}</span>
                        </div>
                     )}

                     {data.personal_info?.linkedin && (
                        <a
                           href={data.personal_info.linkedin}
                           target="_blank"
                           rel="noopener noreferrer"
                           className="flex items-center gap-2 break-all"
                        >
                           <Linkedin size={14} style={{ color: accentColor }} />
                           <span className="text-sm">
                              {data.personal_info.linkedin}
                           </span>
                        </a>
                     )}
                  </div>
               </section>

               {/* Education */}
               {data.education && data.education.length > 0 && (
                  <section className="mb-6">
                     <h3
                        className="text-sm font-semibold tracking-widest text-zinc-600 mb-3"
                     >
                        ESCOLARIDADE
                     </h3>
                     <div className="space-y-3 text-sm">
                        {data.education.map((edu, i) => (
                           <div key={i}>
                              <p className="font-normal text-zinc-700">
                                 {edu.field && `${edu.field} - `}
                                 {edu.degree}
                              </p>
                              <p className="text-zinc-600 text-xs">
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
                     <h3 className="text-sm font-semibold tracking-widest text-zinc-600 mb-3">
                        HABILIDADES
                     </h3>
                     <ul className="space-y-1 text-sm">
                        {data.skills.map((skill, idx) => (
                           <li key={idx} className="text-xs text-zinc-700">
                              {skill}
                           </li>
                        ))}
                     </ul>
                  </section>
               )}
            </aside>

            {/* Main content: summary, experience, projects (spans 2 cols on sm+) */}
            <main className="sm:col-span-2 p-6 sm:p-8">
               {/* Summary */}
               {data.professional_summary && (
                  <section className="mb-6">
                     <h2
                        className="text-sm font-semibold tracking-widest mb-2"
                        style={{ color: accentColor }}
                     >
                        RESUMO
                     </h2>
                     <p className="text-zinc-700 leading-relaxed text-sm">
                        {data.professional_summary}
                     </p>
                  </section>
               )}

               {/* Experience */}
               {data.experience && data.experience.length > 0 && (
                  <section className="mb-6">
                     <h2
                        className="text-sm font-semibold tracking-widest mb-3"
                        style={{ color: accentColor }}
                     >
                        EXPERIÊNCIA
                     </h2>

                     <div className="space-y-6">
                        {data.experience.map((exp, i) => (
                           <div key={i}>
                              <div className="flex justify-between items-start">
                                 <div>
                                    <h3 className="text-sm sm:text-base font-normal text-zinc-900">
                                       {exp.position}
                                    </h3>
                                    <p className="text-sm font-light text-zinc-600">
                                       {exp.company}
                                    </p>
                                 </div>
                                 <span className="hidden sm:flex text-xs text-zinc-500">
                                    {formatDate(exp.start_date)} -{' '}
                                    {exp.is_current
                                       ? 'Atual'
                                       : formatDate(exp.end_date)}
                                 </span>
                              </div>

                              {exp.description && (
                                 <ul className="list-disc list-inside text-xs text-zinc-700 mt-2 space-y-1">
                                    {exp.description
                                       .split('\n')
                                       .map((line, k) => (
                                          <li key={k}>{line}</li>
                                       ))}
                                 </ul>
                              )}
                           </div>
                        ))}
                     </div>
                  </section>
               )}

               {/* Projects */}
               {data.project && data.project.length > 0 && (
                  <section>
                     <h2
                        className="text-sm font-semibold tracking-widest mb-3"
                        style={{ color: accentColor }}
                     >
                        PROJETOS
                     </h2>
                     <div className="space-y-4">
                        {data.project.map((p, i) => (
                           <div key={i}>
                              <h3 className="text-sm sm:text-base font-normal text-zinc-900">
                                 {p.name}
                              </h3>
                              {p.type && (
                                 <p
                                    className="text-sm mb-1"
                                    style={{ color: accentColor }}
                                 >
                                    {p.type}
                                 </p>
                              )}
                              {p.description && (
                                 <ul className="list-disc list-inside text-xs sm:text-sm text-zinc-700 space-y-1">
                                    {p.description
                                       .split('\n')
                                       .map((line, k) => (
                                          <li key={k}>{line}</li>
                                       ))}
                                 </ul>
                              )}
                           </div>
                        ))}
                     </div>
                  </section>
               )}
            </main>
         </div>
      </div>
   )
}

export default MinimalImageTemplate
