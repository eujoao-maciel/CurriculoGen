import ClassicTemplate from "./templates/html/ClassicTemplate.jsx"
import MinimalImageTemplate from "./templates/html/MinimalImageTemplate.jsx"
import MinimalTemplate from "./templates/html/MinimalTemplate.jsx"
import ModernTemplate from "./templates/html/ModernTemplate.jsx"

const ResumePreview = ({ data, template, accentColor, classes = "" }) => {
    const renderTemplate = () => {
        switch (template) {
            case "modern":
                return <ModernTemplate data={data} accentColor={accentColor} />

            case "minimal":
                return <MinimalTemplate data={data} accentColor={accentColor} />

            case "minimal-image":
                return (
                    <MinimalImageTemplate
                        data={data}
                        accentColor={accentColor}
                    />
                )

            default:
                return <ClassicTemplate data={data} accentColor={accentColor} />
        }
    }

    return (
        <div className="w-full">
            <div
                id="resume-preview"
                className={`[overflow-wrap:anywhere] border border-gray-400 print:shadow-none print:border-none ${classes}`}
            >
                {renderTemplate()}
            </div>
        </div>
    )
}

export default ResumePreview
