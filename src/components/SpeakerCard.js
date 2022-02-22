import Image from "./Image";

const SpeakerCard = () => {

  return (
    // <a href="#"
    //    className="flex flex-row my-2 group max-w-xs mx-auto rounded-lg p-6 bg-gray-400 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
    //   <Image variant="medium"/>
    //   <div className="flex flex-col items-center w-1/2">
    //     <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
    //     <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
    //   </div>
    // </a>

    <a href="#">
      <div className="flex flex-row bg-gray-500 rounded-lg w-1/6 p-3">
        <Image variant="medium"/>
        <div className="flex flex-col justify-center mx-3 py-3 w-1/2">
          <p className="flex justify-start">Bill Gates</p>
          <p>Speaker</p>
        </div>
      </div>
    </a>
  )
}
export default SpeakerCard
