

const Input = (props) => {
  const style = 'bg-neutral-700 border border-neutral-400 focus:outline focus:outline-neutral-400 rounded text-sm px-5 py-3 w-full transition-all'

  const inputChangeHandler = (e) => {
    console.log('Input Handler : ' + props.placeholder)
    console.log(e.target.value);
    props.inputHandler(e.target.value);
  }

  if (props.type === "file") {
    return (
      <>
        <label for="file-upload" className="btn-secondary">
          Choose File
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </>
    )
  }
  else if (props.type === "textarea") {
    return <textarea placeholder={props.placeholder} className={`${style} ${props.className ?? ''}`}></textarea>
  }
  else {
    return (
      <input
        onBlur={inputChangeHandler}
        type={props.type}
        placeholder={props.placeholder}
        className={`${style} ${props.className ?? ''}`}
      />
    )
  }
}

export default Input
