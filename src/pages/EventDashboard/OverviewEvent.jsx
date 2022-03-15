import DateNavbar from "../../components/DateNavbar"

const OverviewEvent = () => {
    return (
      <>

<div class="flex-1 bg-primary-700">
            <div class="mx-0 p-8 font-bold text-white">
                Event Name
            </div>
    
         {/* DateNavbar */}
         <DateNavbar/>

        <div class="flex flex-col justify-center items-center">
            <div class="flex-auto m-5 mt-0 w-9/12 h-auto">
             <div class="mx-4 h-56 bg-white rounded-2xl">
               RUNDOWN 1
             </div>
            </div>
            
            <div class="flex-auto m-5 w-9/12 h-auto">
                <div class="mx-4 h-60 bg-white rounded-2xl">
                   RUNDOWN 2
                </div>
            </div>
        </div>
    </div>
    </>
    )
}

export default OverviewEvent
