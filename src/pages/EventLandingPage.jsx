import TopNavbar from "../components/TopNavbar";


const EventLandingPage = () => {
  return (
    <>


      <section className="flex flex-col h-screen md:flex-row bg-primary-500">
        <div className="flex-auto ml-auto mt-0 w-96 h-80">
          <div className="mx-4 my-5 h-56 lg:h-72 shadow-xl bg-neutral-700 rounded-lg stroke-white border-2">
            <div className="mx-auto flex flex-row">
              <div className="flex flex-col">
                <a className="mx-auto mt-3 text-2xl lg:text-6xl text-white font-bold">Event Name</a>
                <a className="mx-auto lg:mx-4 text-sm lg:text-lg text-white font-thin">123 people are registered</a>
              </div>
              <svg xmlns="http://www.w3.org/2000/svg"
                   className="stroke-current text-tosca mt-5 h-6 w-6 2xl:mx-auto 2xl:my-auto" fill="none"
                   viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
              </svg>
            </div>

            <div className="flex-flex-row mt-2 ml-auto h-24">
              <div className="flex flex-row">
                <div className="flex flex-col ml-4 xl:ml-20 2xl:mx-auto">
                  <div className="w-32 lg:w-44 2xl:w-80 h-12 lg:h-14 bg-neutral-800 stroke-white border-2 rounded-t-xl">
                    <p className="text-center text-sm text-white font-thin my-3">Start Time</p>
                  </div>
                  <div
                    className="flex flex-row w-32 lg:w-44 2xl:w-80 h-12 lg:h-14 bg-neutral-800 stroke-white border-2 rounded-b-lg">
                    <p className="ml-2 2xl:mx-auto text-center text-white text-sm font-thin my-3">12/1/22</p>
                    <p className="ml-10 2xl:mx-auto text-center text-sm text-white font-thin my-3">12.00</p>
                  </div>
                </div>
                <div className="flex flex-col xl:ml-2 2xl:mx-auto">
                  <div
                    className="ml-2 w-32 lg:w-44 2xl:w-80 h-12 lg:h-14 bg-neutral-800 stroke-white border-2 rounded-t-lg">
                    <p className="text-center text-sm text-white font-thin my-3">End Time</p>
                  </div>
                  <div
                    className="ml-2 flex flex-row lg:w-44 2xl:w-80 w-32 lg:h-14 h-12 bg-neutral-800 stroke-white border-2 rounded-b-lg">
                    <p className="ml-2 2xl:mx-auto text-center text-white text-sm font-thin my-3">12/1/22</p>
                    <p className="ml-10 2xl:mx-auto text-center text-white text-sm font-thin my-3">13.00</p>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="my-2 lg:my-8 mx-auto w-80 h-7 bg-emerald-300 rounded-lg hover:bg-sky-500 hover:ring-sky-500">
              <h3 className="text-center text-white font-medium">Joint Event</h3>
            </div>
          </div>
        </div>


        <div className=" flex-auto ml-auto mt-0 w-96 h-80">
          <div className="mx-4 my-4 h-60 lg:h-72 shadow-xl bg-white rounded-lg">
            <p className="mx-auto my-auto justify-center">image</p>
          </div>
        </div>
      </section>


      <section className="flex flex-row  bg-primary-500">
        <div className="ml-4 text-slate-50 font-normal">
          <p className="font-extrabold">Description</p>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis debitis minima delectus repellat quidem
            maiores voluptates dolorum autem officiis culpa.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, dolore!</p>
        </div>
        <div className=" flex-auto ml-auto mt-0 w-96 h-64">
          <div className="mx-4 lg:mx-auto my-auto w-40 h-52 shadow-sm bg-neutral-700 rounded-lg">
            <br/>
            <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-full">
            </div>
            <p className="text-white text-center">
              WPU
            </p>
            <p className="text-white text-center font-thin">
              Company
            </p>
          </div>
        </div>
      </section>


      <div className=" mx-auto text-center px-8 bg-primary-500">
        <p className="text-slate-50 text-2xl h-11 font-bold ">Speaker</p>
      </div>

      <section className="flex flex-row justify-center bg-primary-500">
        <div className="container flex flex-col md:flex-row">

          <a href="/" className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

        </div>
      </section>
      <section className="flex flex-row justify-center bg-primary-500">

        <div className="container flex flex-col md:flex-row">

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>

          <a href="/"
             className="flex flex-row my-2 h-24 group w-fit mx-auto rounded-lg p-2 bg-gray-400 ring-slate-900/5 shadow-lg hover:bg-sky-500 hover:ring-sky-500 border-2 border-white">
            <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
            <div className="ml-10 my-auto items-center space-x-3">
              <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">Bill Gates</h3>
              <p className="text-slate-500 group-hover:text-white text-sm">Speaker</p>
            </div>
          </a>
        </div>
      </section>


      <div className="mx-auto h-8  text-center px-8 bg-primary-500">
        <p className="text-slate-50 text-2xl font-bold">Schedule</p>
      </div>

      <div className="w-full flex-grow lg:flex lg:items-center bg-primary-500 lg:w-auto hidden py-6">
        <ul className="list-reset lg:flex justify-center flex-1 items-center">
          <li className="mr-6">
            <a href="" className="text-white inline-block py-2 px-2 no-underline hover:text-blue-300">15 Januari
            </a>
          </li>
          <li className="mr-6">
            <a href="" className="text-white inline-block py-2 px-2  no-underline hover:text-blue-300">16 Januari
            </a>
          </li>
          <li className="mr-6">
            <a href="" className="text-white inline-block py-2 px-2 no-underline hover:text-blue-300">17 Januari
            </a>
          </li>
          <li className="mr-6">
            <a href="" className="text-white inline-block py-2 px-2 no-underline hover:text-blue-300">18 Januari
            </a>
          </li>
          <li className="mr-6">
            <a href="" className="text-white inline-block py-2 px-2 no-underline hover:text-blue-300">19 Januari
            </a>
          </li>
        </ul>
      </div>


      <section className="flex flex-col  bg-primary-500">


        <div className="mx-auto  my-4 h-auto lg:w-11/12 shadow-xl bg-gray-500 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mx-auto md:mx-9 my-2 md:my-12 w-1/2">
              <div className="flex flex-row text-white text-sm md:text-lg">
                <p>7.00 AM - 8.00 AM</p>
                <div className="mx-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <p>Sessions</p>
              </div>
            </div>

            <div className="flex flex-col mx-auto md:mx-9 w-1/2">
              <div className="text-xl text-white">
                <p>Event Title</p>
              </div>
              <div className="text-sm text-white">
                <p>Event Detail</p>
              </div>
              <div className="flex flex-col md:flex-row my-4">
                <div className="flex flex-row  my-2 group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Bill Gates</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
                <div className="flex flex-row  group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Alan Cok</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <div className="mx-auto  my-4 h-auto lg:w-11/12 shadow-xl bg-gray-500 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mx-auto md:mx-9 my-2 md:my-12 w-1/2">
              <div className="flex flex-row text-white text-sm md:text-lg">
                <p>7.00 AM - 8.00 AM</p>
                <div className="mx-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <p>Sessions</p>
              </div>
            </div>

            <div className="flex flex-col mx-auto md:mx-9 w-1/2">
              <div className="text-xl text-white">
                <p>Event Title</p>
              </div>
              <div className="text-sm text-white">
                <p>Event Detail</p>
              </div>
              <div className="flex flex-col md:flex-row my-4">
                <div className="flex flex-row  my-2 group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Bill Gates</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
                <div className="flex flex-row  group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Alan Cok</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>



        <div className="mx-auto  my-4 h-auto lg:w-11/12 shadow-xl bg-gray-500 rounded-lg">
          <div className="flex flex-col md:flex-row">
            <div className="flex flex-col mx-auto md:mx-9 my-2 md:my-12 w-1/2">
              <div className="flex flex-row text-white text-sm md:text-lg">
                <p>7.00 AM - 8.00 AM</p>
                <div className="mx-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                       stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
              </div>
              <div className="flex flex-row text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24"
                     stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"/>
                </svg>
                <p>Sessions</p>
              </div>
            </div>

            <div className="flex flex-col mx-auto md:mx-9 w-1/2">
              <div className="text-xl text-white">
                <p>Event Title</p>
              </div>
              <div className="text-sm text-white">
                <p>Event Detail</p>
              </div>
              <div className="flex flex-col md:flex-row my-4">
                <div className="flex flex-row my-2 group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Bill Gates</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
                <div className="flex flex-row  group w-fit md:mx-2 md:w-40">
                  <div className="mx-auto my-auto  w-14 h-14 bg-slate-400 rounded-full"/>
                  <div className="my-auto items-center space-x-3">
                    <h3 className="text-white group-hover:text-white text-sm font-semibold">Alan Cok</h3>
                    <p className="text-white text-sm">Speaker</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


        <section className="flex flex-col bg-primary-500">
          <div className="mx-auto text-center px-8 bg-primary-500">
            <p className="text-slate-50 text-2xl font-bold">Booths</p>
          </div>

          <div className="flex flex-row mx-auto  my-4 w-11/12 h-44 shadow-xl bg-gray-500 rounded-lg">
            <div className="mx-10 flex flex-col">
              <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
              </div>
              <div className="my-3">
                <h2 className="text-xl text-white font-bold">Booths</h2>
                <p className="text-sm text-white">Booths Details</p>
              </div>
            </div>
            <div className="text-2xl my-auto text-white font-bold justify-center">
              <h1>Booths Banner</h1>
            </div>
          </div>
        </section>


        <section className="flex-row md:flex md:gap-4 lg:min-w-max justify-center bg-primary-500">

          <div className="my-4 mx-4 md:mx-auto md:flex-initial lg:w-2/4  h-44 bg-gray-500 rounded-lg">
            <div className="flex flex-row">
              <div className="mx-10 flex flex-col">
                <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
                </div>
                <div className="my-3">
                  <h2 className="text-xl text-white font-bold">Booths</h2>
                  <p className="text-sm text-white">Booths Details</p>
                </div>
              </div>
              <div className="text-2xl my-auto mx-auto text-white font-bold justify-center">
                <h1>Booths Banner</h1>
              </div>
            </div>
          </div>

          <div className="my-4 mx-4 md:mx-auto md:flex-initial bg-gray-500 h-44 lg:w-1/5 rounded-lg">
            <div className="mx-10 my-2 flex flex-col">
              <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
              </div>
              <div className="my-3">
                <h2 className="text-xl text-white font-bold">Booths</h2>
                <p className="text-sm text-white">Booths Details</p>
              </div>
            </div>
          </div>

          <div className="my-4 mx-4 md:mx-auto md:flex-initial bg-gray-500 h-44 lg:w-1/5 rounded-lg">
            <div className="mx-10 my-2 flex flex-col">
              <div className="mx-auto my-auto  w-20 h-20 bg-slate-400 rounded-lg">
              </div>
              <div className="my-3">
                <h2 className="text-xl text-white font-bold">Booths</h2>
                <p className="text-sm text-white">Booths Details</p>
              </div>
            </div>
          </div>

        </section>


        <section className="flex flex-col bg-primary-500">
          <div className="mx-auto text-center px-8 bg-primary-500">
            <p className="text-slate-50 text-2xl font-mono ">Event Sponsor</p>
          </div>
          <div className="flex flex-col md:flex-row mx-auto md:gap-x-4 my-4 w-max h-auto">
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
            <div className="w-20 h-20 mx-auto my-auto md:w-14 md:h-14 bg-slate-400 rounded-full"/>
          </div>
        </section>


        <section>
          <footer className="w-full bg-primary-600 py-8">
            <div className="container mx-auto text-center px-8">
              <p className="text-white mb-2 text-sm">Copyright of <span className="font-bold">Cranium Indonesia</span>
              </p>
            </div>
          </footer>
        </section>
      </section>
    </>
  )
}
export default EventLandingPage
