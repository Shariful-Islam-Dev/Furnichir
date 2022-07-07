import TestimonialItem from './TestimonialItem';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


const Testimonial = () => {

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <>
      <section className='bg-[#F6F6F6] py-28'>
        <div className="container md:w-5/6 px-2 md:px-0 mx-auto my-3">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center justify-center">
            <h2 className='text-5xl font-bold leading-tight'> Words from our customers</h2>
          </div>
          <div className='my-8'>
            <div className='w-full'>
              <Carousel infinite={true} autoPlay={true} autoPlaySpeed={3000} responsive={responsive}>
                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>

                <div className='shadow-md bg-white shadow-slate-200 p-12  m-2'>                  
                  <div className="py-5">
                    <p className='text-lg '>"Very intentional, thoughtful and beaitiful design. just the right amount of support and cozy!"</p>
                  </div>
                  <div className="flex items-center justify-start my-4 gap-5">
                    <div className='w-16'>
                      <img className='bg-slate-200 p-2 rounded-full' src="https://i.ibb.co/z8rmhrM/perfil.png" alt="profileLogo1" />
                    </div>
                    <div>
                      <h3 className='text-2xl font-extrabold'>Nessi</h3>
                      <p>Brooklyn, NY</p>
                    </div>
                  </div>
                </div>
              </Carousel>
            </div>
          </div>
        </div>

      </section>
    </>
  )
}

export default Testimonial;