import { createRef } from "react";
import Button from "../components/Button";

const TopNavbarHome = () => {
    const navContentRef = createRef();

    const navToggle = () => {
        navContentRef.current?.classList.toggle('hidden');
    }

    return (
        <nav className="bg-primary-500">
            <div className="max-w-screen-2xl flex items-center justify-between flex-wrap px-8 sm:px-10 py-4 sm:py-5 mx-auto z-10 top-0">
                <a href="/" className="text-xl sm:text-2xl font-bold text-white">
                    TEMU
                </a>

                <div className="block sm:hidden">
                    <button onClick={navToggle}
                        className="flex items-center text-white">
                        <svg className="fill-current h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <title>Menu</title>
                            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                        </svg>
                    </button>
                </div>

                {/* Navbar */}

                <div className="w-full hidden sm:flex sm:items-center sm:w-auto pt-6 sm:pt-0"
                    ref={navContentRef}>
                    <ul className="sm:flex justify-end flex-1 items-center">
                        <li className="ml-0 sm:ml-6 font-semibold">
                            <a href="#events" className="inline-block py-2 sm:py-0 text-base md:text-lg text-white no-underline hover:text-secondary-500 transition">Events</a>
                        </li>
                        <li className="ml-0 sm:ml-6 font-semibold">
                            <a href="#features" className="inline-block py-2 sm:py-0 text-base md:text-lg text-white no-underline hover:text-secondary-500 transition">Features</a>
                        </li>
                        <li className="ml-0 sm:ml-6 font-semibold">
                            <a href="#plans" className="inline-block py-2 sm:py-0 text-base md:text-lg text-white no-underline hover:text-secondary-500 transition">Account Plans</a>
                        </li>
                    </ul>
                    <Button variant="secondary" size="large" isCustom={true} className="mx-4">Sign In</Button>
                </div>
            </div>
        </nav>
    )
}

export default TopNavbarHome