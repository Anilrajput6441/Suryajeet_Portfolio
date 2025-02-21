import React from 'react'
import Services from './Services'

const Navbar = () => {
  return (
    <div>
    
    <Services />
    <div className='fixed top-4 left-0 w-full border-1 border-[#8080803c] '>
        <div className=' w-[100vw]  h-[15vh] bg-[#FFFFFF] flex justify-between'>
            <div className='w-[40vw] flex justify-center items-center'>
               <div className='w-[30vw] h-[5vh]  border-1 border-[#80808079] flex'>
                <img className='h-[4vh] w-[2vw]' src="/search (1).png" alt="" />
                <input className='ml-2 focus:outline-none  p-2' type="text" placeholder='Search' />
               </div>
            </div>
            <div className='w-[20vw] h-[100%]'><img className='w-[15vw] h-[10vh] mt-5' src="/वस्र (2) (1).png" alt="" /></div>
            <div className='w-[40vw]  flex flex-row-reverse items-center '>
                <div className='flex gap-5 pr-10'>
                    <i><img className='w-7 h-7 text-[#873A35]' src="/heart (1).png" alt="" /></i>
                    <i><img className='w-7 h-7' src="people.png" alt="" /></i>
                    <i><img className='w-7 h-7' src="shopping-cart.png" alt="" /></i>
                </div>
            </div>
        </div>
        <div className='flex gap-15 justify-center mb-6 text-[#873A35]  font-medium'>
            <p>SALE</p>
            <p>SAREE</p>
            <p>DRESS MATERIAL</p>
            <p>SALWAR SUITS</p>
            <p>LEHNGA</p>
            <p>OTHERS</p>
            <p>NEW ARRIVALS</p>
            <p>OCCASIONS</p>
        </div>
      
    </div>
    </div>
  )
}

export default Navbar
