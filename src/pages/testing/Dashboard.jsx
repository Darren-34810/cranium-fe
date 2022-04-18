import React, { useState, useEffect, useRef } from 'react';
import Button from "../../components/Button";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";

function Dashboard() {

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
    <div className="h-screen bg-primary-700">
      <Sidebar sidebarOpen={sidebarOpen} />
      <div ref={ref} className="fixed overflow-y-auto no-scrollbar min-h-screen w-full ml-64 top-0 bottom-0">
        <DashboardNavbar onToggle={onToggle} sidebarOpen={sidebarOpen} />
        <div className="px-10 mt-4">
          <h1 className="text-5xl font-sans font-bold">Hello Boodee!</h1>
          <div className="min-h-[8rem] mt-4">
            <h4 className="text-2xl font-sans">Your Upcoming Events</h4>
            <p className="text-xl font-sans">
              You're not registered for any event yet. &nbsp;
              <Button className="inline text-xl">Find an Event</Button>
            </p>
          </div>
          <div className="min-h-[8rem] mt-4">
            <h4 className="text-2xl font-sans">Plan Info</h4>
            <p className="text-xl font-sans">
              You're not registered for any plan yet. &nbsp;
              <Button className="inline text-xl">Find a Plan Info</Button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
