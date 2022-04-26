import Button from "./Button"

const EventCard = () => {
  return (
    <>
<<<<<<< HEAD
      <div className="w-64  border border-neutral-400 rounded-lg shadow flex flex-col overflow-hidden">
        <div className="h-56 bg-[url(../public/images/jpeg/lorenzo-herrera.jpg)] bg-cover bg-center">
          <div className="mt-4 ml-40 w-16 h-20 bg-primary-900 rounded-md"></div>
=======
    <div className="w-64 border border-neutral-400 rounded-lg shadow flex flex-col overflow-hidden">
      <div className="h-64 bg-[url(../public/images/jpeg/lorenzo-herrera.jpg)] bg-cover bg-center">
        <div className="mt-4 ml-40 w-16 h-20 bg-primary-900 rounded-md"></div>
      </div>
      <div className="bg-primary-900 text-white flex flex-col p-4">
        <div className="flex justify-between">
          <div className="flex-row">
          <div className="my-2 w-max h-min bg-emerald-900 text-emerald-400 rounded-lg">
            <h6 className="mx-2">Category</h6>
          </div>
          <a className="font-semibold text-lg">90's Tech</a>
          <br/>
          <a className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus iure eos nemo, autem aperiam sapiente possimus perferendis praesentium accusamus.</a>
>>>>>>> 6e2ac4aa86bf8d3a242df3225b4e66fc332fa16c
        </div>
        <div className="bg-primary-900 text-white flex flex-col p-4">
          <div className="flex justify-between">
            <div className="flex-row">
              <div className="my-2 w-max h-min bg-emerald-900 text-emerald-400 rounded-lg">
                <h6 className="mx-2">Category</h6>
              </div>
              <a className="font-semibold text-lg">90's Tech</a>
              <br />
              <a classname="text-sm">The technologies we use nowadays is the evolution from the 90’s tech. Reveal interesting facts about the 90’s tech with us!
              <Button className="mt-2 object-justify-center text-emerald-900">See more {'>'}</Button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default EventCard
