import Button from "../components/Button";
import Footer from "../components/Footer";
import TopNavbar from "../components/TopNavbar";


const Welcome = () => {
  return (
    <div className="scroll-smooth">
      {/* Header */}
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
      <div id="services"
        className="bg-primary-700 flex justify-between items-center px-24 py-36">
        <div className="flex items-stretch">
          <div className="vl"></div>
          <h2 className="text-2xl md:text-4xl font-bold py-1">
            Our Services
          </h2>
        </div>
        <div
          className="bg-primary-700 flex justify-between items-center">
          <div className="flex flex-col max-w-xs my-4">
            <div className="bg-gray-100 w-10 h-10 mb-4">img</div>
            <h6 className="text-md font-bold mb-2">Platform Development</h6>
            <p className="text-xs text-neutral-400">Membangun virtual space berbasis web sebagai wadah semua aktivitas digital Anda, seperti: webinar, hybrid event, pameran, conference, corporate event, workshops, entertainment dan acara online lainnya</p>
          </div>
          <div className="flex flex-col max-w-xs my-4 ml-20">
            <div className="bg-gray-100 w-10 h-10 mb-4">img</div>
            <h6 className="text-md font-bold mb-2">Event Organizer</h6>
            <p className="text-xs text-neutral-400">Menciptakan pengalaman acara online dan offline yang terintegrasi dengan mengelola hybrid event Anda mulai dari pembuatan konsep, perencanaan, produksi, talent management, hingga pelaksanaan acara</p>
          </div>
        </div>
      </div>

      {/* Build Seamless */}
      <div className="bg-primary-800 h-screen flex justify-center items-center overflow-hidden">
        <div className="w-3/6 h-full bg-white rounded-r-lg shadow-black">
          img
        </div>
        <div className="w-3/6 h-full flex flex-col justify-center items-center px-20">
          <div>
            <div className="flex items-stretch mb-3">
              <div className="vl-2"></div>
              <h2 className="text-2xl md:text-4xl font-bold py-1">Build Seamless Offline & Online Event Experience</h2>
            </div>
            <p className="text-neutral-400">Berikan pengalaman yang berkesan dan serupa bagi audience online maupun offline melalui program acara hybrid yang dikemas khusus dan unik bagi kebutuhan Anda</p>
          </div>
        </div>
      </div>

      {/* Experience Live */}
      <div id="live" className="bg-primary-700 min0h-screen">
        <div className="h-screen flex justify-between items-center px-20">
          <div className="w-4/12 flex flex-col items-start">
            <div className="flex items-stretch mb-3">
              <div className="vl-2"></div>
              <h2 className="text-2xl md:text-4xl font-bold py-1">Take Your Event to The Next Level</h2>
            </div>
            <p className="text-neutral-400 mb-4">Ciptakan pengalaman unik dan bermakna dengan menjelajahi virtual space milik Anda</p>
            <div className="text-neutral-400">
              <b><i>Mengapa menggunakan virtual reality?</i></b>
              <ul className="list-disc ml-4">
                <li>Membuat acara hybrid yang variatif</li>
                <li>Meningkatkan konversi dalam acara untuk mendukung tujuan bisnis/event</li>
                <li>Memperoleh data yang lebih relevan dengan lebih mudah</li>
              </ul>
            </div>
            <Button variant="primary" size="large" isCustom={true} className="mt-8">Experience Live</Button>
          </div>
          <div className="w-7/12">
            <div className="w-full h-80 bg-white text-black rounded-lg shadow-black">content</div>
          </div>
        </div>
      </div>

      {/* Contact Us */}
      <div id="contact" className="bg-primary-800 flex flex-col justify-center items-center py-16">
        <div className="hl"></div>
        <h2 className="text-2xl md:text-4xl font-bold">Contact Us</h2>
        <p className="mt-8">xxxx</p>
        <Button variant="primary" size="large" isCustom={true} className="mt-8">Contact Us</Button>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  )
}

export default Welcome
