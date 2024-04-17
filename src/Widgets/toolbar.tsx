import { Link } from "react-router-dom";
import { Button, Typography } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logout } from "../services/operations/authApi";

const Toolbar = () => {
   
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {user} = useSelector((state) => state.profile)
    console.log(user);
    const handleLogout = async () => {

        await dispatch(logout(navigate));
    }


    return (
        <>
            
            <Link to={"/signup"}>
                {!user && (<Button variant='contained'>
                    Explore
                </Button>)}
            </Link>
            <Link to={"/login"}>
                {
                    !user && (
                        <Button variant='contained'>
                    Login
                </Button>
                    )
                }
            </Link>
            <Link to={"/login"}>
                {user &&(<Button onClick={handleLogout} variant='contained'>
                    Logout
                </Button>)}
            </Link>
        </>
    )
}

export default Toolbar