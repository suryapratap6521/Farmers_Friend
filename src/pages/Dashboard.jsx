import { Button } from '@mui/material'
import React from 'react'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/operations/authApi";

const Dashboard = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        await dispatch(logout(navigate));
    }

    return (
        <div>
            <Button variant='contained' onClick={handleLogout}>Logout</Button>
            <h1>Dashboard</h1>
        </div>
    )
}

export default Dashboard
