const Title = ({ title, description }) => {
  return (
    <div className="text-center mt-6 text-slate-700">
        <h2 className="text-3xl p-4 text-slate-200 sm:text-4x1 font-medium">{title}</h2>
        <p className="max-sm max-w-2xl p-4 mt-4 text-slate-300">{description}</p>
    </div>
  )
}

export default Title
