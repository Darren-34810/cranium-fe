import { createRef } from "react";

const TopNavbar = () => {
    const navContentRef = createRef();

    const navToggle = () => {
        navContentRef.current?.classList.toggle('hidden');
    }

    return (
        <nav className="flex items-center justify-between flex-wrap bg-primary-600 p-3 fixed w-full z-10 top-0 pin-t">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <a href="/" className="text-white no-underline hover:text-white hover:no-underline">
            <span className="text-2xl pl-2 font-semibold">Cranium</span>
          </a>
        </div>

        <div className="block lg:hidden">
          <button onClick={navToggle}
                  className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Navbar */}

        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
             ref={navContentRef}>
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-6">
              <a href="#" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Services</a>
            </li>
            <li className="mr-6">
              <a href="#" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Features</a>
            </li>
            <li className="mr-6">
              <a href="#" className="inline-block py-2 px-2 text-white no-underline hover:text-blue-300">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}

export default TopNavbar