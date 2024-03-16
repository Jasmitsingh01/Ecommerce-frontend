import { configureStore } from "@reduxjs/toolkit";
import LocationReducre from "../feautures/Admin";
export const store=configureStore({
    reducer:{
        Location:LocationReducre
    } ,
})
