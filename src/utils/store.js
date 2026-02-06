import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './appslice'
import SearchSlice from './searchSlice'

const Store = configureStore({
    reducer:{
        App:AppSlice,
        Search:SearchSlice
    }
})


export default Store