
const TestimonialItem = () => {
  return (
    <>
        <div className='p-12 hover:bg-white border border-slate-300'>
         
          <dir className="py-5"> 
            <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
          </dir>
          <dir className="flex items-center justify-start my-4 gap-5">
            <div className='w-16'>
              <img className='bg-slate-200 p-2 rounded-full' src="https://course-api.com/react-store-products" alt="profileLogo1" />
            </div>
            <div>
              <h3 className='text-2xl font-extrabold'>Nessi</h3>
              <p>Brooklyn, NY</p>
            </div>
          </dir>
        </div>
    </>
  )
}

export default TestimonialItem;