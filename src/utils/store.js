import {configureStore} from '@reduxjs/toolkit'
import AppSlice from './appslice'
import SearchSlice from './searchSlice'
import ChatSlice from './ChatSlice'

const Store = configureStore({
    reducer:{
        App:AppSlice,
        Search:SearchSlice,
        Chat:ChatSlice
    }
})


export default Store