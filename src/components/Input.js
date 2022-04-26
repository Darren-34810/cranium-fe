/**
 * Input Component
 * @param {String} placeholder - Short description of the input field
 * @param {String} type - Button type: <Button type="file|textarea">
 * @param {String} className - Additional classes for the input field
 * @param {Function} inputHandler - Function to handle input, setting the value to a state
 */

const Input = ({ placeholder, type, className, inputHandler }) => {
  const style = 'bg-neutral-700 border border-neutral-400 focus:outline focus:outline-neutral-400 rounded text-sm px-5 py-3 w-full transition-all'

  const inputChangeHandler = (e) => {
    console.log('Input Handler : ' + placeholder)
    console.log(e.target.value);
    inputHandler(e.target.value);
  }

  if (type === "file") {
    return (
      <>
        <label for="file-upload" className="btn-secondary">
          Choose File
        </label>
        <input id="file-upload" type="file" className="hidden" />
      </>
    )
  }
  else if (type === "textarea") {
    return <textarea placeholder={placeholder} className={`${style} ${className ?? ''}`}></textarea>
  }
  else {
    return (
      <input
        onBlur={inputChangeHandler}
        type={type}
        placeholder={placeholder}
        className={`${style} ${className ?? ''}`}
      />
    )
  }
}

export default Input
