import ClassicTemplate from './templates/ClassicTemplate.jsx'
import MinimalImageTemplate from './templates/MinimalImageTemplate.jsx'
import MinimalTemplate from './templates/MinimalTemplate.jsx'
import ModernTemplate from './templates/ModernTemplate.jsx'

const ResumePreview = ({ data, template, accentColor, classes = '' }) => {
   const renderTemplate = () => {
      switch (template) {
         case 'modern':
            return <ModernTemplate data={data} accentColor={accentColor} />

         case 'minimal':
            return <MinimalTemplate data={data} accentColor={accentColor} />

         case 'minimal-image':
            return (
               <MinimalImageTemplate data={data} accentColor={accentColor} />
            )

         default:
            return <ClassicTemplate data={data} accentColor={accentColor} />
      }
   }

   return (
      <div className="w-full bg-gray-">
         <div
            id="resume-preview"
            className={
               ' border border-gray0 print:shadow-none print:border-none' +
               classes
            }
         >
            {renderTemplate()}
         </div>

         <style jsx>
            {`
               @page {
                  size: letter;
                  margin: 0;
               }

               @media print {
                  body {
                     margin: 0;
                     -webkit-print-color-adjust: exact;
                  }

                  #resume-preview {
                     box-shadow: none !important;
                     border: none !important;
                     margin: 0;
                     padding: 0;
                  }
               }
            `}
         </style>
      </div>
   )
}

export default ResumePreview
