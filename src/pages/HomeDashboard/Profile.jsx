import React, { useState, useEffect, useRef } from "react";
import DashboardNavbar from "../../components/DashboardNavbar";
import Sidebar from "../../components/Sidebar";
import Input from "../../components/Input";
import Button from "../../components/Button";

function Profile() {

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

        <div className="flex-1 bg-primary-700">
          <div className="w-full bg-grey-lightest">
            <div className="container mx-auto">
              <div className="py-4 px-8">
                <div className="flex flex-col md:flex-row mb-4">
                  <div className="sm:w-1/2 sm:mr-1">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="first_name">First
                      Name</label>
                    <Input type="text" />
                  </div>
                  <div className="sm:w-1/2 sm:ml-1">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="last_name">Last Name</label>
                    <Input type="text" />
                  </div>
                </div>
                <div className="mb-4 mt-8">
                  <label className="block text-white text-sm font-bold mb-2" htmlFor="description">Bio</label>
                  <Input type="textarea" />
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 md:mr-10">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="start_date">Email</label>
                    <Input type="text" />
                  </div>
                  <p className="text-2xl my-auto mx-4 font-bold">-</p>
                  <div className="mb-4 md:mr-10">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="end_date">Phone
                      Number</label>
                    <Input type="text" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row">
                  <div className="mb-4 md:mr-10">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="event_type">Company</label>
                    <Input type="text" />
                  </div>
                  <p className="text-2xl my-auto mx-4 font-bold">-</p>
                  <div className="mb-4 md:mr-10">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="company_name">Position in
                      Company</label>
                    <Input type="text" />
                  </div>
                </div>

                <div className="flex flex-col md:flex-row mt-2 items-center md:gap-x-8">
                  <Button
                    variant="secondary"
                    type="submit">
                    Save
                  </Button>

                  <Button
                    variant="primary"
                    type="submit">
                    Change Password
                  </Button>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
export default Profile
