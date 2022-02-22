const Button = ({children, variant, className}) => {
    const primary = "border-2 border-secondary-500 bg-secondary-500 text-primary-500 text-lg font-semibold text-center min-w-[10rem] px-5 py-3 rounded-md cursor-pointer inline-block transition duration-300 hover:bg-secondary-300 hover:border-secondary-300 hover:shadow-md hover:shadow-secondary-900 hover:-translate-y-1";
    const secondary = "border-2 border-secondary-500 text-secondary-500 text-lg font-semibold text-center min-w-[10rem] px-5 py-3 rounded-md cursor-pointer inline-block transition duration-300 hover:bg-secondary-500 hover:text-primary-500 hover:shadow-md hover:shadow-secondary-900 hover:-translate-y-1"
    const tertiary = "text-secondary-500 text-lg font-semibold underline cursor-pointer inline-block transition duration-300 hover:text-secondary-300 hover:-translate-y-1"
    return (
        <button className={`${variant === 'tertiary' ? tertiary : (variant === 'secondary' ? secondary : primary)} ${className}`}>{children}</button>
    )
}

export default Button