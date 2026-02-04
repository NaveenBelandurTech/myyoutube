import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './appslice'

const Store = configureStore({
    reducer:{
        App:AppSlice
    }
})


export default Store