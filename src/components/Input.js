const Input = ({type, className}) => {
  const style = 'bg-neutral-700 border border-neutral-400 rounded text-base px-5 py-3 w-full'
  if (type === "file") {
    return (
      <>
      <label for="file-upload" className="btn-secondary">
          Choose File
      </label>
      <input id="file-upload" type="file" className="hidden"/>
      </>
    )
  }
  else if (type === "textarea") {
    return <textarea className={`${style} ${className ?? ''}`}></textarea>
  }
  else {
    return <input type={type} className={`${style} ${className ?? ''}`} />
  }
}

export default Input