
import { AiOutlineUser } from 'react-icons/ai';
import { BsCart4 } from "react-icons/bs";


function Header() {
    return (
        <div className='bg-slate-50  relative sticky top-0 z-50'>
            <nav className="flex container justify-between  items-center p-5">
                <div className="flex w-full  items-center">
                    <a href="/" className="text-[#2c96d3] text-[35px] font-bold">Furniture</a>
                    <div className='space-x-12 text-center text-lg mx-auto'>
                        <a href="/" className="text-blue-400 hover:underline">Home</a>
                        <a href="/" className="text-blue-400 hover:underline">Products</a>
                        <a href="/" className="text-blue-400 hover:underline">Collection</a>
                    </div>
                </div>
                <div className="text-blue-400 flex space-x-7 ">
                    <span className='cursor-pointer'>
                        <AiOutlineUser size={30} />
                    </span>
                    <span className='cursor-pointer'>
                        <BsCart4 size={30} />
                    </span>
                </div>
            </nav>
        </div>
    )
}

export default Header;