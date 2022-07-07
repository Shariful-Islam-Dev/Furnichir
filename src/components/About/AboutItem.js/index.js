
const AboutItem = ({orderOne='order-1', orderTwo='order-2'}) => {
    
    return (
      <>
          <div className={orderOne}>
              <img className='w-96 mt-[-100px]' src="https://i.ibb.co/bgk6xG9/image.png" alt="about" />
          </div>
          <div className={orderTwo}>
              <h2 className='text-5xl font-bold leading-tight'>The Coffee Table</h2>
              <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi sapiente id ab quis voluptates iure tenetur impedit accusantium illo molestias.</p>
              
              <a className='bg-black text-white px-11 py-3 inline-block' href="https://www.linkedin.com/in/mahadidev7/"> Shop Now</a>
          </div>      
      </>
    )
  }
  


export default AboutItem;