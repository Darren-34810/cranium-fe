import { useEffect, useRef } from "react"
import Button from "./Button"

const Sidebar = ({ sidebarOpen }) => {
    const ref = useRef(null);

    useEffect(() => {
      if (sidebarOpen) ref.current.classList.remove('hidden')
      else ref.current.classList.add('hidden')
    }, [ref, sidebarOpen])

    return (
        <>
            <div ref={ref} className="bg-primary-500 fixed overflow-y-auto no-scrollbar min-h-screen w-64 rounded-r-lg top-0 bottom-0">
                <h2 className="text-2xl font-bold font-sans"><a href="/" className="inline-block w-full px-8 py-6">TEMU-</a></h2>
                <hr className="border-neutral-50/50 mx-4" />
                <div className="mt-4 mb-8">
                    <a href="/" className="hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2">
                        <img src="images/vector/noted.svg" alt="Platform Development" />
                        <p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">Overview</p>
                    </a>
                    <a href="/" className="hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2">
                        <img src="images/vector/calendar.svg" alt="Platform Development" />
                        <p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">Events</p>
                    </a>
                    <a href="/" className="hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2">
                        <img src="images/vector/dollar-sign.svg" alt="Platform Development" />
                        <p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">Billing</p>
                    </a>
                    <a href="/" className="hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2">
                        <img src="images/vector/sliders.svg" alt="Platform Development" />
                        <p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">Integration</p>
                    </a>
                    <a href="/" className="hover:bg-neutral-50/10 active:bg-neutral-50/10 flex items-center w-full border-secondary-500 active:border-r-4 px-12 py-2">
                        <img src="images/vector/user.svg" alt="Platform Development" />
                        <p className="text-sm font-semibold active:font-bold active:text-secondary-500 ml-3">Profile</p>
                    </a>
                    <div className="flex justify-center">
                        <Button variant="primary" size="large" isCustom={true} className="mt-4">
                            <span className="mr-1">[img]</span>
                            Preview
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar