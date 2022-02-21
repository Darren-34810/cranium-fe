const Footer =() =>{

  return(
    <div className="bg-gray-300">
      <div className="container mx-auto px-8">
        <div className="w-full flex flex-col md:flex-row py-6 text-left">
          <div className="flex-1 mb-6 text-black ">
            <a className="text-black no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                         href="#">CRANIUM</a>
            <p className="mt-4 text-gray-500 no-underline hover:no-underline text-xs">© 2022 CRANIUM INDONESIA. ALL
              RIGHTS RESERVED</p>
            <p className="mt-4 text-grey-500 no-underline hover:no-underline text-xs">Privacy — Terms</p>
          </div>


          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Contact</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Phone
                  Number</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#"
                             className="no-underline hover:underline text-gray-800 hover:text-pink-500">Email</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Social
                  Media</a>
              </li>
            </ul>
          </div>
          <div className="flex-1">
            <p className="uppercase text-gray-500 md:mb-6">Company</p>
            <ul className="list-reset mb-6">
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Terms</a>
              </li>
              <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                <a href="#" className="no-underline hover:underline text-gray-800 hover:text-pink-500">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Footer
