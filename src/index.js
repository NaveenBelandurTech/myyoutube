
import {createRoot} from 'react-dom/client'
import App from './App'
import {Provider} from 'react-redux'
import store from './utils/store'
import './output.css'


const Container = document.getElementById('root')
const Root = createRoot(Container)
{console.log(store.getState())}
Root.render(
    <Provider store={store}>
        <App/>
    </Provider>
)