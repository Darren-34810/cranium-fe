import TopNavbar from "../components/TopNavbar";


const Welcome = () => {
  return (
    <div>
      <TopNavbar />

      {/* Hero */}
      <div className="bg-primary-900 h-screen sm:h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold my-6 max-w-screen-md text-center">
          All-in-one Event Management Services
        </h1>
        <p className="text-base md:text-lg text-neutral-400 max-w-screen-md text-center">
          [Temu - in logo] membantu mengelola seluruh kebutuhan event online maupun offline dalam satu pintu dengan mengedepankan teknologi virtual reality
        </p>
      </div>

      {/* Services */}
      <div
        className="bg-primary-700 flex justify-between items-center px-24 py-36">
        <div className="flex items-center">
          <div className="vl"></div>
          <h2 className="text-2xl md:text-4xl font-bold">
            Our Services
          </h2>
        </div>
        <div
          className="bg-primary-700 flex justify-between items-center">
          <div className="flex flex-col max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-4">img</div>
            <h6 className="text-md font-bold mb-3">Platform Development</h6>
            <p className="text-xs text-neutral-400">Membangun virtual space berbasis web sebagai wadah semua aktivitas digital Anda, seperti: webinar, hybrid event, pameran, conference, corporate event, workshops, entertainment dan acara online lainnya</p>
          </div>
          <div className="flex flex-col max-w-xs my-4 ml-20">
            <div className="bg-gray-100 w-10 h-10 mb-4">img</div>
            <h6 className="text-md font-bold mb-3">Event Organizer</h6>
            <p className="text-xs text-neutral-400">Menciptakan pengalaman acara online dan offline yang terintegrasi dengan mengelola hybrid event Anda mulai dari pembuatan konsep, perencanaan, produksi, talent management, hingga pelaksanaan acara</p>
          </div>
        </div>
      </div>

      {/* Build Seamless */}
      <div className="bg-primary-800 h-screen flex justify-center items-center overflow-hidden">
        <div className="w-3/6 h-full bg-white rounded-r-lg shadow-[0_0_100px_rgba(0,0,0,0.25)]">
          img
        </div>
        <div className="w-3/6 h-full flex flex-col justify-center items-center px-20">
          <div>
            <div className="flex items-center mb-3">
              <div className="vl-2"></div>
              <h2 className="text-2xl md:text-4xl font-bold">Build Seamless Offline & Online Event Experience</h2>
            </div>
            <p className="text-neutral-400">Berikan pengalaman yang berkesan dan serupa bagi audience online maupun offline melalui program acara hybrid yang dikemas khusus dan unik bagi kebutuhan Anda</p>
          </div>
        </div>
      </div>

      {/* Experience Live */}
      <div className="bg-primary-700 h-screen 2xl:h-screen">
        <div className="h-screen flex justify-between items-center px-20">
          <div className="w-4/12 flex flex-col">
            <div className="flex items-center mb-3">
              <div className="vl-2"></div>
              <h2 className="text-2xl md:text-4xl font-bold">Take Your Event to The Next Level</h2>
            </div>
            <p className="text-neutral-400 mb-4">Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual space milik Anda</p>
            <p className="text-neutral-400">
              <b><i>Mengapa menggunakan virtual reality?</i></b>
              <ul className="list-disc ml-4">
                <li>Membuat acara hybrid yang variatif</li>
                <li>Meningkatkan konversi dalam acara untuk mendukung tujuan bisnis/event</li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </p>
          </div>
          <div className="w-7/12">
            <div className="w-full h-80 bg-white text-black rounded-lg shadow-[0_0_100px_rgba(0,0,0,0.25)]">content</div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div className="bg-primary-800 flex flex-col justify-center items-center py-16">
        <div className="hl"></div>
        <h2 className="text-2xl md:text-4xl font-bold">Contact Us</h2>
        <p className="mt-8">xxxx</p>
        <p className="mt-8">Contact Us</p>
      </div>

      {/* Footer */}
      <div className="bg-primary-900">
        <div className="container mx-auto px-8">
          <div className="w-full flex flex-col md:flex-row py-6">
            <div className="flex-1 mb-6">
              <a className="text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="/">
                CRANIUM</a>
              <p className="mt-4 no-underline hover:no-underline text-xs">© 2022 CRANIUM INDONESIA. ALL
                RIGHTS RESERVED</p>
              <p className="mt-4 text-grey-500 no-underline hover:no-underline text-xs">Privacy — Terms</p>
            </div>

            <div className="flex-1">
              <p className="uppercase md:mb-6">Contact</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline hover:text-pink-500">Phone
                    Number</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline hover:text-pink-500">Email
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline hover:text-pink-500">Social
                    Media</a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase md:mb-6">Company</p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline hover:text-pink-500">Terms</a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a href="/" className="no-underline hover:underline hover:text-pink-500">Privacy</a>
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
