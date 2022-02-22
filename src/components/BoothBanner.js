import Image from "./Image";

const BoothBanner = ({children, variant, className}) => {
  const full = "flex flex-row my-4 w-2/3 h-44 shadow-xl bg-gray-500 rounded-lg text-5xl"
  const half = " flex flex-row my-4 w-3/6 h-44 shadow-xl bg-gray-500 rounded-lg text-2xl"
  const quarter = "flex flex-row my-4 w-1/4 h-44 shadow-xl bg-gray-500 rounded-lg text-xl"
  return (

    <div className={`${variant === 'quarter' ? quarter : (variant === 'half' ? half : full)} ${className}`}>{children}
      <div className="flex flex-col items-center w-1/3 p-3">
        <Image variant="square"/>
        <div className="my-3 text-center">
          <h2 className="text-xl text-white font-bold">Booths</h2>
          <p className="text-sm text-white">Booths Details</p>
        </div>
      </div>
      <div className="flex items-center justify center w-2/3  text-white font-bold">
        <h1 className="text-center">Booths Banner</h1>
      </div>
    </div>
  )
}
export default BoothBanner
