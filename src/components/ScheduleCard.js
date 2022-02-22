import Image from "./Image";

const ScheduleCard = () => {
  return (
    <div className="mx-auto  my-4 w-2/3 h-40 shadow-xl bg-gray-500 rounded-lg">
      <div className="flex flex-row">
        <div className="flex flex-col mx-9 my-12 w-1/2">
          <div className="flex flex-row text-white text-lg">
            <p>7.00 AM - 8.00 AM</p>
            <div className="mx-6">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                   stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
              </svg>
            </div>
          </div>
          <div className="flex flex-row text-gray-400">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
            </svg>
            <p>Sessions</p>
          </div>
        </div>

        <div className="flex flex-col mx-9 my-auto w-1/2">
          <div className="text-xl text-white">
            <p>Event Title</p>
          </div>
          <div className="text-sm text-white">
            <p>Event Detail</p>
          </div>
          <div className="flex flex-row my-4">
            <div className="flex flex-row mx-2  group w-40 ">
              <Image variant="small"/>
              <div className="ml-10 my-auto items-center space-x-3">
                <h3 className="text-white group-hover:text-white text-sm font-semibold">Bill Gates</h3>
                <p className="text-white text-sm">Speaker</p>
              </div>
            </div>
            <div className="flex flex-row mx-2  group w-40 ">
              <Image variant="small"/>
              <div className="ml-10 my-auto items-center space-x-3">
                <h3 className="text-white group-hover:text-white text-sm font-semibold">Alan Cok</h3>
                <p className="text-white text-sm">Speaker</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ScheduleCard
