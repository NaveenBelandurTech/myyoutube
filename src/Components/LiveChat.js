import ChatMessage from './ChatMessage'
import { useEffect ,useState} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {addMessage} from '../utils/ChatSlice'
import {generate,makeid} from '../utils/Helper'




const LiveChat = () => {
const [liveMessage,setLiveMessage] = useState('')
const Dispatch = useDispatch()
const ChatSelector = useSelector((Data)=>{
    return Data.Chat?.
message
})

const handleSubmit = (e) =>{
    e.preventDefault()
    Dispatch(addMessage({name:generate(),message:liveMessage}))
    setLiveMessage('')
}

useEffect(()=>{
   const i =  setInterval(()=>{
    // Api Polling
    Dispatch(addMessage({
        name:generate(),
        message:makeid(10)
    }))
    },2000)

    return () =>{
        clearInterval(i)
    }
},[])
  return (
    <>
    <div className='w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse'>
        <div>
        {ChatSelector?.map((data,i)=>{
             return (
   <ChatMessage key={i} name={data.name} message={data.message}/>
             )
        })}
    
        </div>


        </div>
           <form className='w-full p-2 ml-2 flex flex-row' onSubmit={handleSubmit}>
            <input className=' px-2 w-96 border border-black' type='text' onChange={(e)=>setLiveMessage(e.target.value)} value={liveMessage} placeholder='Add Your Comments' />
            <button className='px-2 mx-2 bg-green-100 cursor-pointer' >Send</button>
        </form>
        </>
  )
}

export default LiveChat