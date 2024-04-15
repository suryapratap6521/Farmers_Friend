import { Link } from "react-router-dom";
import React from 'react'
import { Button } from "@mui/material";

const Toolbar = () => {
    return (
        <>
            <Link to={"/signup"}>
                <Button variant='contained'>
                    Explore
                </Button>
            </Link>
            <Link to={"/login"}>
                <Button variant='contained'>
                    Login
                </Button>
            </Link>
        </>
    )
}

export default Toolbar