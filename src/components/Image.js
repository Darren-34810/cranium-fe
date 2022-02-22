const Image = ({children, variant, className}) =>{
  const large ="rounded-full h-28 w-28 bg-black"
  const medium ="rounded-full h-24 w-24 bg-black"
  const small ="rounded-full h-14 w-14 bg-black"
  const square =" rounded-lg h-16 w-16 bg-black"

  return(
    <div className={`${variant === 'square' ? square :(variant === 'small' ? small : (variant === 'medium' ? medium : large))} ${className}`}>{children}</div>


  )
}

export default Image
