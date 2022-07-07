import React, { useState } from 'react'

const Banner = () => {
  const [BannerImg, setBannerImg] = useState({
    one: true,
    two: false,
    three: false,
  })
  const [BannerImgDes, setBannerImgDes] = useState({
    one: false,
    two: false,
    three: false,
  })
  
  const handerBannerControls= (data) =>{
    if(data === "one") {
      setBannerImg({
        one: true,
        two: false,
        three: false,
      })
      setBannerImgDes({
        one: false,
        two: false,
        three: false,
      })
    }else if(data === "two"){
      setBannerImg({
        one: false,
        two: true,
        three: false,
      })
      setBannerImgDes({
        one: false,
        two: false,
        three: false,
      })
    }else if(data === "three"){
      setBannerImg({
        one: false,
        two: false,
        three: true,
      })
      setBannerImgDes({
        one: false,
        two: false,
        three: false,
      })
    }
  }

  const handerBannerControlsdes = (data) => {
    if(data === "one") {
      setBannerImgDes({
        one: true,
        two: false,
        three: false,
      })
      
    }else if(data === "two"){
      setBannerImgDes({
        one: false,
        two: true,
        three: false,
      })
    }else if(data === "three"){
      setBannerImgDes({
        one: false,
        two: false,
        three: true,
      })
    }
  }



  return (
    <section className='bg-gradient-to-r from-[#fffdfd] to-[#fff] md:h-[85vh] h-auto px-2 md:px-0 '>
      <div className="w-full md:flex md:h-full">
          <div className='md:w-[40%] w-full 5/5 relative md:px-2'>
            <div className='md:absolute md:left-[20%] flex py-20 md:py-0 items-center h-full w-full '>
              <div className=' pr-2 pl-1 md:pl-0 md:w-[80%] w-full'>
                <h1 className='md:text-7xl text-6xl font-bold leading-tight'>Future <br /> of furniture</h1>
                <p className='my-4'>Frontend design involves creating the HTML, CSS, and presentational JavaScript code that</p>
                <div className='w-[95%] md:w-full'>
                  <form className='flex border border-black '>
                    <input className='text-white w-full px-3 bg-transparent focus:outline-none' type="text" name="seearch" placeholder='Search your product here...' />
                    <button type='submit' className='bg-black text-white px-7 py-3 '>Search</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
          
          <div className='md:w-[60%] w-full grow 5/5 md:px-2 h-[50vh] md:h-full'>
            <div className='flex gap-3 h-full' >
              <div onMouseEnter={()=> handerBannerControls("one")} className={` bg-[url(https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] bg-center bg-no-repeat bg-cover relative overflow-hidden transition-all duration-500 ease-linear ${BannerImg.one?  `w-[60%]` : `w-[20%]`}`}>
              
              
                
              </div>
              <div onMouseEnter={()=> handerBannerControls("two")} className={`bg-[url(https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)] bg-center bg-no-repeat bg-cover relative overflow-hidden transition-all duration-500 ease-linear   ${BannerImg.two?  `w-[60%]` : `w-[20%]`}`}>
              
              </div>
              <div onMouseEnter={()=> handerBannerControls("three")} className={`bg-[url(https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=958&q=80)] bg-center bg-no-repeat bg-cover relative overflow-hidden transition-all duration-500 ease-linear   ${BannerImg.three?  `w-[60%]` : `w-[20%]`}`}>
               
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}

export default Banner