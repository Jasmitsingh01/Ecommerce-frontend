import { createSlice } from "@reduxjs/toolkit";
 const initialState={
  AdminSidebar:false,
  AdminSide:false
 }
export const LocationSlice=createSlice({
    name:'Location',
    initialState :initialState,
    reducers:{
        SetLocation:(state)=>{
            state.AdminSide=true
        },
        RemoveLocation:(state)=>{
            state.AdminSide=false
        },
        ShowSideBar:(state,action)=>{
           state.AdminSidebar=action.payload;  
        },
        HideSideBar:(state)=>{
            state.AdminSidebar=false;
        }
    }
})


export const{SetLocation,RemoveLocation,ShowSideBar,HideSideBar}=LocationSlice.actions;
export default LocationSlice.reducer;