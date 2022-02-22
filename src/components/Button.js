const Button = ({ children, type, variant, className }) => {
  // Button styles in ./src/index.css
  return (
    <button type={type} className={`${variant === 'tertiary' ? 'btn-tertiary' : (variant === 'secondary' ? 'btn-secondary' : 'btn-primary')} ${className ?? '' }`}>{children}</button>
  )
}

export default Button