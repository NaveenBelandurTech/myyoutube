import {createSlice} from '@reduxjs/toolkit'



const AppSlice = createSlice({
    name:"AppSlice",
    initialState:{
        isMenuOpen:true
    },
    reducers:{
       toggleMenu:(state)=>{
         state.isMenuOpen = !state.isMenuOpen
       },
       closeWatch:(state)=>{
        state.isMenuOpen = false
       }
    },
})

export const {toggleMenu,closeWatch} = AppSlice.actions
export default AppSlice.reducer