const EventCard = () => {
  return (
    <>
    <div className="w-64 border border-neutral-400 rounded-lg shadow flex flex-col overflow-hidden">
      <div className="h-64 bg-white"></div>
      <div className="bg-neutral-700 text-white flex flex-col p-4">
        <div className="flex justify-between">
          <p>Event Name</p>
          <p>Jan 27</p>
        </div>
        <p className="pt-12">See more..</p>
      </div>
    </div>
    </>
  )
}
export default EventCard
