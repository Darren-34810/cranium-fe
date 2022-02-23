import TopNavbar from "../components/TopNavbar";


const Welcome = () => {
  return (
    <div>
      <TopNavbar/>

      <div className="bg-white h-screen sm:h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-3xl md:text-5xl font-black mb-4 max-w-screen-lg text-center">
          At eripuit signiferumque sea, vel ad mucius eiusmod.
        </h1>
        <p className="text-base md:text-lg text-gray-400 mb-8 max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <a href="/" className="btn-primary">Join an event</a>

      </div>


      <div
        className="bg-gradient-to-b from-primary-500 via-primary-400  to-primary-600 flex flex-col justify-center items-center py-12">
        <h4 className="text-2xl md:text-4xl text-white font-bold text-center">
          Services
        </h4>
        <p className="text-md md:text-xl text-neutral-300 max-w-screen-md text-center mb-8">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <div className="flex justify-center">
          <div className=" text-md md:text-xl flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg text-white font-bold mb-2">Service 1</p>
            <p className="text-neutral-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-md md:text-xl flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg text-white font-bold mb-2">Service 2</p>
            <p className="text-neutral-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
          <div className="text-md md:text-xl flex flex-col items-center max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-2">img</div>
            <p className="text-lg text-white font-bold mb-2">Service 3</p>
            <p className="text-neutral-300 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary-600 via-primary-400  to-primary-500 min-h-screen ">
        <div className="h-screen flex flex-wrap justify-center items-center">
          <div className="w-2/6">
            <h3 className="m-2 text-3xl text-white font-bold leading-none mb-3">
              Lorem ipsum dolor sit amet
            </h3>
            <p className="m-2 text-gray-100 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
          </div>
          <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
            <svg className="w-full h-full">
              <title>Image</title>
              <rect width="100%" display="block" height="100%" rx="15" fill="#f2f2f2"/>
            </svg>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-b from-primary-500 via-primary-400 to-primary-600 h-screen 2xl:h-screen">
        <div className="h-5/6 2xl:h-screen flex flex-col 2xl:flex-row justify-center items-center">
          <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-6">
            <svg className="w-full h-full">
              <title>Image</title>
              <rect width="100%" display="block" height="100%" rx="15" fill="#f2f2f2"/>
            </svg>
          </div>
          <div className="w-2/6">
            <h3 className="m-2 text-3xl text-white font-bold leading-none mb-3">
              Get in touch
            </h3>
            <p className="m-2 text-gray-100 py-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua.
            </p>
            <a href="/" className="btn-primary">Contact us</a>
          </div>
        </div>
      </div>


      {/*Footer*/}

      <div className="bg-primary-700">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6 text-white">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                CRANIUM</a>
              <p className="mt-4 text-white no-underline hover:no-underline text-xs">© 2022 CRANIUM INDONESIA. ALL
                RIGHTS RESERVED</p>
              <p className="mt-4 text-grey-500 no-underline hover:no-underline text-xs">Privacy — Terms</p>
            </div>

            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Contact</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-white hover:text-pink-500">Phone
                    Number</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-white hover:text-pink-500">Email
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-white hover:text-pink-500">Social
                    Media</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-white md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-white hover:text-pink-500">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-white hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Welcome
