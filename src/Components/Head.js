import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";

export const Head = () => {
  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 justify-between' style={{alignItems:'center'}}>
     <GiHamburgerMenu />
     <img  className='h-8 mx-2'src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/2560px-YouTube_2024.svg.png' alt='you tube logo'/>
     </div>
     <div className='col-span-10 px-10'>
      <input className='w-1/2 border border-gray-400 p-2 rounded-l-full' type='text'/>
      <button className='border border-gray-400 px-2 rounded-r-full'>Search</button>
     </div>
     <div className='col-span-1'>
      <FaUserCircle/>
     </div>
    </div>
  )
}
