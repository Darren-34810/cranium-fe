import Sidebar from "../../layouts/Sidebar";
import Header from "../../layouts/Header";
import React, {useState} from "react";

const EventPage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">

      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen}/>
        <main>
          <div className="flex-1 bg-primary-700 h-screen">
            <div className="mx-6">
              <div className="flex flex-row  p-8 text-2xl text-white">
                <p className="font-bold">Events</p>
                <div className="flex flex-1 flex-row mx-8 text-white text-center">
                  <a className="mx-2 my-auto" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"/>
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
                                  clipRule="evenodd"/>
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 ">
                  <div className="flex card justify-center mb-32">
                    <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
                      <div className="h-64 w-64 bg-gray-100 border-2 "/>
                      <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                        <p className="p-4 mb-4">Events #1</p>
                        <p className="p-4"> See More..</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex card justify-center mb-32">
                    <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
                      <div className="h-64 w-64 bg-gray-100 border-2 "/>
                      <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                        <p className="p-4 mb-4">Events #1</p>
                        <p className="p-4"> See More..</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex card justify-center mb-32">
                    <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
                      <div className="h-64 w-64 bg-gray-100 border-2 "/>
                      <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                        <p className="p-4 mb-4">Events #1</p>
                        <p className="p-4"> See More..</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex card justify-center mb-32">
                    <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
                      <div className="h-64 w-64 bg-gray-100 border-2 "/>
                      <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                        <p className="p-4 mb-4">Events #1</p>
                        <p className="p-4"> See More..</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

}
export default EventPage
