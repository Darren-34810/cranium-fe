import Image from "./Image";

const PlanCard = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-gray-100 rounded-lg m-4 border-2 border-black">
        <div className="h-64 w-64 flex flex-col justify-center items-center">
          <Image variant="small"/>
          <p className="text-black text-center py-2">Title</p>
          <p className="text-center py-2 ">Subtitle</p>
          <p className="text-center">Feature 1</p>
          <p className="text-center">Feature 2</p>
          <p className="text-center">Feature 3</p>
        </div>
        <div className="h-32 w-64  flex justify-center items-center">
          <a href="#" className=" btn-primary">Order Now</a>
        </div>
      </div>
    </div>
  )
}
export default PlanCard
