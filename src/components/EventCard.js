const EventCard = () => {
  return (
    <>
    <div className="w-64 border border-neutral-400 rounded-lg shadow flex flex-col overflow-hidden">
      <div className="imgCard">
      <div className="h-64 bg-[url(../public/images/jpeg/lorenzo-herrera.jpg)] bg-cover bg-center"></div>
      </div>
      <div className="bg-primary-900 text-white flex flex-col p-4">
        <div className="flex justify-between">
          <div className="flex-row">
          <div>
            <h6>Category</h6>
          </div>
          <a className="font-semibold text-lg">90's Tech</a>
          <br/>
          <a classname="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure eos nemo, autem aperiam sapiente possimus perferendis praesentium accusamus.</a>
        </div>
        </div>
        <p className="pt-12">See more..</p>
      </div>
    </div>
    </>
  )
}
export default EventCard
