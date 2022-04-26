import React, {useState, useEffect, useRef} from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";
import EventCard from "../../components/EventCard";

function EventPage() {

  const [sidebarOpen, setSidebarOpen] = useState(true);
  const onToggle = () => {
    setSidebarOpen(!sidebarOpen)
  }

  const ref = useRef(null);

  useEffect(() => {
    if (sidebarOpen) ref.current.classList.add('ml-64', 'w-[calc(100vw-16rem)]')
    else ref.current.classList.remove('ml-64', 'w-[calc(100vw-16rem)]')
  }, [ref, sidebarOpen])


  return (

    <div className="bg-primary-700 h-screen">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />
      <div ref={ref} className="fixed overflow-y-auto no-scrollbar min-h-screen w-full ml-64 top-0 bottom-0">
        {/*  Site header */}
        <DashboardNavbar onToggle={onToggle} sidebarOpen={sidebarOpen} />
        <div className="mx-6">
          <div className="flex flex-row  p-8 text-2xl text-white">
            <p className="font-bold">Events</p>
            <div className="flex flex-1 flex-row mx-8 text-white text-center">
              <a className="mx-2 my-auto" href="#">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </a>
              <p>Create Events</p>
            </div>
          </div>
          <div>
            <div className="flex flex-row  text-sm lg:text-xl text-white ">
              <p className="mx-6">My Events</p>
              <p className="mx-6">Hosted Events</p>
              <p className="mx-6">Public Events</p>
              <div className="flex flex-1 ml-auto justify-end ">
                <div className="flex">
                  <p className="flex flex-1 text-white text-xl ">Filter</p>
                  <div className="flex flex-row  mx-2 bg-white rounded-md  text-black">
                    <p className="flex-1 pl-6 my-auto mx-auto mr-36 ">Category 1</p>
                    <div className="pt-1 text-right">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 " viewBox="0 0 20 20"
                        fill="currentColor">
                        <path fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-2 lg:grid-cols-4 gap-2 ">
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
              <EventCard></EventCard>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EventPage
