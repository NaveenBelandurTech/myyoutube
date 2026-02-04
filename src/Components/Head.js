import { GiHamburgerMenu } from "react-icons/gi";
import { FaUserCircle } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";
import {useDispatch} from 'react-redux'
import {toggleMenu} from '../utils/appslice'


export const Head = () => {
  const Dispatch = useDispatch()
  const handleClicked = () =>{
    Dispatch(toggleMenu())
  }



  return (
    <div className='grid grid-flow-col p-5 m-2 shadow-lg'>
      <div className='flex col-span-1 ' style={{alignItems:'center'}} onClick={handleClicked}>
     <GiHamburgerMenu size={30}  style={{cursor:"pointer"}}/>
     <img  className='h-8 mx-2'src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/YouTube_2024.svg/2560px-YouTube_2024.svg.png' alt='you tube logo'/>
     </div>
     <div className='col-span-10 px-10'>
      <input className='w-1/2 border border-gray-400 py-2 rounded-l-full' type='text'/>
      <button className='border border-gray-400 px-5 py-2 rounded-r-full'><IoSearchOutline /></button>
     </div>
     <div className='col-span-1 flex' >
      <FaUserCircle size={30}/>
     </div>
    </div>
  )
}
