import { createRef } from "react";

const TopNavbar = () => {
  const navContentRef = createRef();

  const navToggle = () => {
    navContentRef.current?.classList.toggle('hidden');
  }

  return (
    <nav className="flex items-center justify-between flex-wrap bg-primary-600 px-6 py-4 fixed w-full z-10 top-0">
      <a href="/" className="text-2xl font-semibold text-white">
        Cranium
      </a>

      <div className="block sm:hidden">
        <button onClick={navToggle}
          className="flex items-center px-3 py-2 border rounded text-white">
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>

      {/* Navbar */}

      <div className="w-full hidden sm:flex sm:items-center sm:w-auto pt-6 sm:pt-0"
        ref={navContentRef}>
        <ul className="sm:flex justify-end flex-1 items-center">
          <li className="ml-0 sm:ml-6 text-left">
            <a href="#services" className="inline-block py-2 sm:py-0 text-white no-underline hover:text-secondary-500 transition">Services</a>
          </li>
          <li className="ml-0 sm:ml-6 text-left">
            <a href="#features" className="inline-block py-2 sm:py-0 text-white no-underline hover:text-secondary-500 transition">Features</a>
          </li>
          <li className="ml-0 sm:ml-6 text-left">
            <a href="#contact" className="inline-block py-2 sm:py-0 text-white no-underline hover:text-secondary-500 transition">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default TopNavbar