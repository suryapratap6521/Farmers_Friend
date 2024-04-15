import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import profileReducer from '../slices/profileSlice';
import communityReducer from '../slices/communitySlice'
const rootReducer = combineReducers ({
    auth: authReducer,
    profile:profileReducer,
    community:communityReducer,
    
});

export default rootReducer