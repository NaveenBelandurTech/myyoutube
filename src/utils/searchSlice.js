import {createSlice} from '@reduxjs/toolkit'


const SearchSlice = createSlice({
    name:"Search",
    initialState:{},
    reducers:{
      cacheResult:(state,action)=>{
        Object.assign(state,action.payload)
      },
    },
})


export const {cacheResult} = SearchSlice.actions
export default SearchSlice.reducer



