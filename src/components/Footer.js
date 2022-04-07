const Footer = () => {

  return (
    <div className="bg-primary-900 flex justify-between p-32">
      <div>
        <h2 className="font-sans font-bold text-2xl">TEMU</h2>
        <p className="text-sm mt-4">© 2022 CRANIUM INDONESIA. ALL RIGHTS RESERVED</p>
        <a href="#" className="inline-block text-sm mt-4 hover:text-secondary-500">Privacy — Terms</a>
      </div>
      <div className="flex">
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
  )
}
export default Footer
