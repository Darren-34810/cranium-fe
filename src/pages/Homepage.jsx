import TopNavbar from "../components/TopNavbar";


const Homepage = () => {

  return (
    <div>
      <TopNavbar/>
      <div className="bg-primary-700 h-screen w-full lg:w-full flex justify-center items-center ">
        <div className="w-2/6 flex flex-col h-1/2 p-2">
          <h3 className="m-2 text-3xl text-white font-bold leading-none">
            About
          </h3>
          <p className="m-2 text-gray-400 py-4 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </p>
          <div className="m-2 py-4  md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row ">
            <a href="/" className="btn-primary mx-4 lg:my-0 md:my-2 lg:my-2">Join an event</a>
            <a href="/" className="btn-secondary mx-4 lg:my-0 md:my-2 lg:my-2">Host an event</a>
          </div>
        </div>
        <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
          <svg className="w-full h-full">
            <title>Image</title>
            <rect width="100%" display="block" height="100%" rx="15" fill="#f2f2f2"/>
          </svg>
        </div>
      </div>


      <div className="bg-gradient-to-b from-primary-700 via-primary-500 to-primary-700">
        <h2 className="text-center text-2xl font-bold py-6 text-white"> Our Client</h2>
        <div className="flex justify-center">
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
          <div className="rounded-full lg:h-28 lg:w-28 md:h-14 md:w-14 bg-gray-500 m-8"></div>
        </div>
      </div>


      <div className="bg-primary-700 p-8">
        <div className="">
          <h1 className="py-4 text-2xl font-bold text-white text-center">Events</h1>
          <p className="py-6 mb-4 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <div className=" grid grid-cols-2 lg:grid-cols-4 gap-2 ">
          <div className="flex card justify-center mb-32">
            <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
              <div className="h-64 w-64 bg-gray-100 border-2 "></div>
              <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>
          </div>
          <div className="flex card justify-center mb-32">
            <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
              <div className="h-64 w-64 bg-gray-100 border-2 "></div>
              <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>
          </div>
          <div className="flex card justify-center mb-32">
            <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
              <div className="h-64 w-64 bg-gray-100 border-2 "></div>
              <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>
          </div>
          <div className="flex card justify-center mb-32">
            <div className=" h-64 w-64 border-gray-600 rounded-lg m-4">
              <div className="h-64 w-64 bg-gray-100 border-2 "></div>
              <div className="h-32 w-64 border-2 border-gray-600 rounded-b-lg bg-neutral-700 text-white">
                <p className="p-4 mb-4">Events #1</p>
                <p className="p-4"> See More..</p>
              </div>
            </div>
          </div>
        </div>
      </div>



      <div className="bg-gradient-to-b from-primary-700 via-primary-500 to-primary-700 min-h-screen">
        <div className="h-screen flex flex-wrap justify-center items-center">
          <div className="w-2/6 p-6 items-center">
            <h3 className="m-2 text-3xl text-white font-bold leading-none mb-3">
              Features
            </h3>
            <p className="m-2 text-gray-400">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
              et
              dolore magna aliqua.
            </p>
            <div className="pb-8 pt-2 text-gray-400">
              <li>Feature 1</li>
              <li>Feature 2</li>
              <li>Feature 3</li>
            </div>
            <a href="/" className=" btn-primary mt-8">Learn More</a>
          </div>
          <div className="w-3/6 h-5/6 sm:h-1/2 sm:w-2/2 p-2">
            <svg className="w-full h-full">
              <title>Image</title>
              <rect width="100%" display="block" height="100%" rx="15" fill="white"/>
            </svg>
          </div>
        </div>
      </div>



      <div className="bg-primary-700">
        <div className="h-auto">
          <h1 className="py-4 text-2xl font-bold text-white text-center">Account Plans</h1>
          <p className="py-6 mb-4 text-gray-400 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 w-auto ">
            <div className="flex justify-center">
              <div className="bg-neutral-700 h-100 w-64 rounded-lg m-4 border-2 border-gray-600">
                <div className="h-64 w-64 flex flex-col justify-center items-center">
                  <div className="rounded-full h-16 w-16 bg-gray-400  "></div>
                  <p className="text-gray-400 text-center py-2">Title</p>
                  <p className="text-gray-400 text-center py-2 ">Subtitle</p>
                  <p className="text-gray-400 text-center">Feature 1</p>
                  <p className="text-gray-400 text-center">Feature 2</p>
                  <p className="text-gray-400 text-center">Feature 3</p>
                </div>
                <div className="h-32 w-64  flex justify-center items-center">
                  <a href="/" className=" btn-primary">Order Now</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-neutral-700 h-100 w-64 rounded-lg m-4 border-2 border-gray-600 relative">
                <div className="h-64 w-64 flex flex-col justify-center items-center">
                  <div className="rounded-full h-16 w-16 bg-gray-400  "></div>
                  <div className="ribbon-wrapper">
                    <div className="ribbon bg-secondary text-white">BEST SELLER</div>
                  </div>
                  <p className="text-gray-400 text-center py-2">Title</p>
                  <p className="text-gray-400 text-center py-2 ">Subtitle</p>
                  <p className="text-gray-400 text-center">Feature 1</p>
                  <p className="text-gray-400 text-center">Feature 2</p>
                  <p className="text-gray-400 text-center">Feature 3</p>
                </div>
                <div className="h-32 w-64  flex justify-center items-center">
                  <a href="/" className=" btn-primary">Order Now</a>
                </div>
              </div>
            </div>
            <div className="flex justify-center col-span-2 lg:col-span-1">
              <div className="bg-neutral-700 h-100 w-64 rounded-lg m-4 border-2 border-gray-600">
                <div className="h-64 w-64 flex flex-col justify-center items-center">
                  <div className="rounded-full h-16 w-16 bg-gray-400  "></div>
                  <p className="text-gray-400 text-center py-2">Title</p>
                  <p className="text-gray-400 text-center py-2 ">Subtitle</p>
                  <p className="text-gray-400 text-center">Feature 1</p>
                  <p className="text-gray-400 text-center">Feature 2</p>
                  <p className="text-gray-400 text-center">Feature 3</p>
                </div>
                <div className="h-32 w-64  flex justify-center items-center">
                  <a href="/" className=" btn-primary">Order Now</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="bg-gray-100 h-screen flex flex-col justify-center items-center">
        <h1 className="text-4xl md:text-6xl font-black mb-4 max-w-screen-lg text-center">
          Ready to create an event?
        </h1>
        <h6 className="text-xl md:text-2xl text-gray-400 mb-8 max-w-screen-md text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h6>
        <div className="flex justify-center items-center">
          <a href="/" className="btn-primary mr-4">Host an event</a>
          <a href="/" className="btn-secondary">Contact us</a>
        </div>
      </div>



      <div className="bg-primary-700">
        <div className="container">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 m-8 text-gray-400">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                           href="/">
                CRANIUM
              </a>
              <p className="mt-4 text-gray-400 no-underline hover:no-underline text-xs">© 2022 CRANIUM INDONESIA. ALL
                RIGHTS RESERVED</p>
              <p className="mt-4 text-grey-400 no-underline hover:no-underline text-xs">Privacy — Terms</p>
            </div>


            <div className="flex-1">
              <p className="uppercase text-gray-400 md:mb-6">Contact</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/"
                               className="no-underline hover:underline text-gray-400 hover:text-pink-500">
                    Phone
                    Number
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/"
                               className="no-underline hover:underline text-gray-400 hover:text-pink-500">
                    Email
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/"
                               className="no-underline hover:underline text-gray-400 hover:text-pink-500">
                    Social
                    Media
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase text-gray-400 md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline text-gray-400 hover:text-pink-500">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/"
                     className="no-underline hover:underline text-gray-400 hover:text-pink-500">Privacy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
