import Image from "./Image";

const ScheduleCard = () => {
  return (
    <div className="flex flex-row bg-gray-500 rounded-lg items-center justify-center w-2/3">
      <div className="flex flex-col justify-evenly p-3 w-full">
        <div className="flex flex-row text-white items-center py-3">
          <p>7.00 AM - 8.00 AM</p>
          <div className="mx-6">
            <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
          </div>
        </div>
        <div className="flex flex-row text-gray-400 justify-start py-3">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
               stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                  d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
          </svg>
          <p className="mx-3">Sessions</p>
        </div>
      </div>
      <div className="flex flex-col text-white justify-around w-full p-3">
        <p className="flex items-center py-3">Event Title</p>
        <p className="flex items-center py-3">Event Detail</p>
        <div className="flex flex-row items-center py-3">
          <div className="flex flex-row w-full ">
            <Image variant="small"/>
            <div className="flex flex-col mx-3">
              <p>Bill Gates</p>
              <p>Speaker</p>
            </div>
          </div>
          <div className="flex flex-row w-full">
            <Image variant="small"/>
            <div className="flex flex-col mx-3">
              <p>Bill Gates</p>
              <p>Speaker</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

export default ScheduleCard
