const Footer = () => {

  return (
    <div className="bg-primary-900">
    <div className="max-w-screen-2xl flex flex-col md:flex-row justify-between p-16 sm:p-24 md:p-32 mx-auto">
      <div>
        <h2 className="font-sans font-bold text-2xl">TEMU</h2>
        <p className="text-sm mt-4">© 2022 CRANIUM INDONESIA. ALL RIGHTS RESERVED</p>
        <a href="#" className="inline-block text-sm mt-4 hover:text-secondary-500">Privacy — Terms</a>
      </div>
      <div className="flex mt-12 sm:mt-20 md:mt-0">
        <div className="mr-20">
          <p className="text-sm font-bold">Contacts</p>
          <div className="flex flex-col">
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Phone Number</a>
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Email</a>
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Socmed</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-bold">Company</p>
          <div className="flex flex-col">
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
            <a href="#" className="text-sm mt-4 hover:text-secondary-500">Company</a>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
export default Footer
