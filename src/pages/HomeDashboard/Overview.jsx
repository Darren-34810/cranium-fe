import Sidebar from "../../layouts/Sidebar";
import React, {useState} from "react";
import Header from "../../layouts/Header";

const Overview = () => {

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
            <div className="mx-0 p-8 font-bold text-white">
              OVERVIEW
            </div>

            <div className="mx-8 p-8 font-bold text-3xl text-white ">
              Hello !
            </div>

            <div className=" mx-8 my-0 p-8 font-bold text-2xl text-white ">
              Your upcoming events
            </div>
            <div className="mx-8 my-0 px-8 font-semibold text-white ">
              You-re not registered for any event yet. <a href="https://www.google.com/">Find an Event.</a>
            </div>

            <div className=" mx-8 my-0 p-8 font-bold text-2xl text-white ">
              Plan Info
            </div>
            <div className="mx-8 my-0 px-8 font-semibold text-white ">
              You-re not registered for any plan yet. <a href="https://www.google.com/">Find a plan info.</a>
            </div>
          </div>
        </main>
      </div>
    </div>
  )

}
export default Overview
