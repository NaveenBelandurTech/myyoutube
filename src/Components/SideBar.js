import {useSelector} from 'react-redux'
import Link from 'react-router-dom'

export const SideBar = () => {
  const {isMenuOpen} = useSelector((data)=>{
    return data.App
  })
  const icons = ['Home','Shorts','Videos','Live']
  const later = ['Music',"Sports",'Gaming','Movies']

  // early return
  if(!isMenuOpen) return null

  return (
    <div className='p-5 shadow-lg w-48'>
      <ul >
        {icons.map((data,i)=>{
         return (
          <li key={i}>{data}</li>
         )
        })}
      </ul>
            <h1 className='font-bold pt-5'>Subscriptions</h1>
      <ul>
        {later.map((data,i)=>{
          return (
            <li key={i}>{data}</li>
          )
        })}
      </ul>
            <h1 className='font-bold pt-5'>Watch later</h1>
                 <ul>
        {later.map((data,i)=>{
          return (
            <li key={i}>{data}</li>
          )
        })}
      </ul>
    </div>
  )
}
