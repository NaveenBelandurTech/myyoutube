import Body from "./Components/Body"
import { Head } from "./Components/Head"
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import { WatchPage } from "./Components/WatchPage"
import MainContainer from './Components/MainContainer'

const AppRouter = createBrowserRouter([{
    path:'/',
    element:<Body/>,
    children:[
        {
            path:'/watch',
            element:<WatchPage/>
        },
        {
            path:'/',
            element:<MainContainer/>
        }
    ]
}])

const App = () =>{
    return (
        <div>
            <Head/>
           <RouterProvider router={AppRouter}/>
        </div>

    )
}

export default App