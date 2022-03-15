const PreviewMain = () => {
    return (
      <>

<div class="flex-1 bg-primary-700">
            <div class="p-16 text-4xl font-bold text-white flex justify-center items-center">
                Preview
            </div>
            <div class="text-center">
                <div class="mx-auto h-80 w-2/3 shadow-xl bg-gray-400 rounded-lg">
                </div>
            </div>
            <div class="flex items-center justify-between mt-8">
                <button class="bg-green-300 hover:bg-white text-black font-bold py-3 w-1/6 ml-10" type="submit">
                  Back
                </button>
                <button class="bg-green-300 hover:bg-white text-black font-bold py-3 w-1/6 mr-10" type="submit">
                    Accept
                  </button>
              </div>
            </div>
        </>
    )
}

export default PreviewMain