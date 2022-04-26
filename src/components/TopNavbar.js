import React, {createRef, useEffect, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import axios from "axios";
import jwt_decode from "jwt-decode";
import Button from "./Button";

const TopNavbar = () => {
  const history = useHistory();

  const logout = () => {
    console.log('Log Out Top Navbar');
    // try{
    //   await axios.delete('http://localhost:5000/logout')
    //     .then(function (res) {
    //     console.log(res)})
    //   history.push('/signin')
    // }catch(error){
    //   console.log(error)
    // }
  }

  const [name, setName] = useState('');
  const [token, setToken] = useState('');

  useEffect(() => {
    refreshToken()
  }, [])
  const refreshToken = async () => {
    try {

      const response = await axios.get('http://localhost:5000/token');
      setToken(response.data.accessToken);
      const decoded = jwt_decode(response.data.accessToken)
      setName(decoded.name)
    } catch (error) {

    }
  }


  const navContentRef = createRef();

  const navToggle = () => {
    navContentRef.current?.classList.toggle('hidden');
  }


  return (
    <nav className="bg-primary-500">
      <div className="max-w-screen-2xl flex items-center justify-between flex-wrap px-8 sm:px-10 py-4 sm:py-5 mx-auto z-10 top-0">
        <Link href="/" className="text-xl sm:text-2xl font-bold text-neutral-50">
          TEMU
        </Link>

        <div className="block sm:hidden">
          <button onClick={navToggle}
                  className="flex items-center text-white">
            <svg className="fill-current h-5" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
            </svg>
          </button>
        </div>

        {/* Navbar */}

        <div className="w-full hidden sm:flex sm:items-center sm:w-auto pt-6 sm:pt-0"
             ref={navContentRef}>
          <ul className="sm:flex justify-end flex-1 items-center">
            <li className="ml-0 sm:ml-6 font-semibold">
              <a href="#services" className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">Services</a>
            </li>
            <li className="ml-0 sm:ml-6 font-semibold">
              <a href="#live" className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">Experience Live</a>
            </li>
            <li className="ml-0 sm:ml-6 font-semibold">
              <a href="#contact" className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">Contact Us</a>
            </li>
            <li className="ml-0 sm:ml-6 font-semibold">
              <a href="#contact" className="inline-block py-2 sm:py-0 text-base md:text-lg text-neutral-50 no-underline hover:text-secondary-500 transition">Hello, {name}</a>
            </li>
            <Button
              variant="secondary"
              size="large"
              isCustom={true}
              className="mx-4"
              clickHandler={logout}
            >Logout</Button>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopNavbar
