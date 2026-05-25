const MinimalTemplate = ({ data = {}, accentColor = '#2563eb' }) => {
   const formatDate = (dateStr) => {
      if (!dateStr) return ''
      const [year, month] = dateStr.split('-')
      return new Date(year, month - 1).toLocaleDateString('pt-BR', {
         year: 'numeric',
         month: 'short',
      })
   }

   return (
      <div className="max-w-4xl mx-auto bg-white text-gray-900 font-light px-6 sm:px-8 py-8 sm:py-12">
         {/* Header */}
         <header className="mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-4xl font-thin mb-4 tracking-wide leading-tight">
               {data.personal_info?.full_name || 'Seu Nome'}
            </h1>

            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-2 sm:gap-6 text-xs sm:text-sm text-gray-600">
               {data.personal_info?.email && (
                  <span className="break-all">{data.personal_info.email}</span>
               )}
               {data.personal_info?.phone && (
                  <span>{data.personal_info.phone}</span>
               )}
               {data.personal_info?.location && (
                  <span>{data.personal_info.location}</span>
               )}
               {data.personal_info?.linkedin && (
                  <span className="break-all">
                     {data.personal_info.linkedin}
                  </span>
               )}
               {data.personal_info?.website && (
                  <span className="break-all">
                     {data.personal_info.website}
                  </span>
               )}
            </div>
         </header>

         {/* Professional Summary */}
         {data.professional_summary && (
            <section className="mb-8 sm:mb-12">
               <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {data.professional_summary}
               </p>
            </section>
         )}

         {/* Experience */}
         {data.experience && data.experience.length > 0 && (
            <section className="mb-8 sm:mb-12">
               <h2
                  className="text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-medium"
                  style={{ color: accentColor }}
               >
                  EXPERIÊNCIA
               </h2>

               <div className="space-y-6">
                  {data.experience.map((exp, index) => (
                     <div key={index}>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1 mb-1">
                           <h3 className="text-base sm:text-lg font-medium">
                              {exp.position}
                           </h3>
                           <span className="text-xs sm:text-sm text-gray-500">
                              {formatDate(exp.start_date)} -{' '}
                              {exp.is_current
                                 ? 'Atual'
                                 : formatDate(exp.end_date)}
                           </span>
                        </div>

                        <p className="text-sm sm:text-base text-gray-600 mb-2">
                           {exp.company}
                        </p>

                        {exp.description && (
                           <div className="text-sm sm:text-base text-gray-700 leading-relaxed whitespace-pre-line">
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
            <section className="mb-8 sm:mb-12">
               <h2
                  className="text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-medium"
                  style={{ color: accentColor }}
               >
                  PROJETOS
               </h2>

               <div className="space-y-6">
                  {data.project.map((proj, index) => (
                     <div key={index}>
                        <h3 className="text-base sm:text-lg font-medium mb-1">
                           {proj.name}
                        </h3>
                        {proj.description && (
                           <p className="text-sm sm:text-base whitespace-pre-line text-gray-600 leading-relaxed">
                              {proj.description}
                           </p>
                        )}
                     </div>
                  ))}
               </div>
            </section>
         )}

         {/* Education */}
         {data.education && data.education.length > 0 && (
            <section className="mb-8 sm:mb-12">
               <h2
                  className="text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-medium"
                  style={{ color: accentColor }}
               >
                  ESCOLARIDADE
               </h2>

               <div className="space-y-6">
                  {data.education.map((edu, index) => (
                     <div
                        key={index}
                        className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1"
                     >
                        <div>
                           <h3 className="text-sm sm:text-base font-medium">
                              {edu.field && `${edu.field} - `}
                              {edu.degree}
                           </h3>
                           <p className="text-sm text-gray-600">
                              {edu.institution}
                           </p>
                        </div>
                        {edu.graduation_date && (
                           <span className="text-xs sm:text-sm text-gray-500">
                              {formatDate(edu.graduation_date)}
                           </span>
                        )}
                     </div>
                  ))}
               </div>
            </section>
         )}

         {/* Skills */}
         {data.skills && data.skills.length > 0 && (
            <section>
               <h2
                  className="text-xs sm:text-sm uppercase tracking-widest mb-4 sm:mb-6 font-medium"
                  style={{ color: accentColor }}
               >
                  HABILIDADES
               </h2>

               <div className="text-sm sm:text-base text-gray-700 leading-relaxed">
                  {data.skills.join(' • ')}
               </div>
            </section>
         )}
      </div>
   )
}

export default MinimalTemplate
