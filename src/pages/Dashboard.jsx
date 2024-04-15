import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/operations/authApi";
import { Link } from "react-router-dom";
import Chatbot from '../components/Common/chatbot/Chatbot';


const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user=useSelector((state)=>state.profile)
    console.log(user);
    const handleLogout = async () => {
        
        await dispatch(logout(navigate));
    }

    return (
        <div>
            <Button variant='contained' onClick={handleLogout}>Logout</Button>
            <h1>Dashboard</h1>
            <Button variant='contained' component={Link} to='/community'>Community Chat</Button>
            <Chatbot />
        </div>
    )
}

export default Dashboard
