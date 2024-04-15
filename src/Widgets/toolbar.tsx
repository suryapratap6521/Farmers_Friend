import { Link } from "react-router-dom";
import React from 'react'
import { Button } from "@mui/material";

const Toolbar = () => {
    return (
        <>
            <button color="primary" className="text-lg">
                Start Trial
            </button>
            <Button
                title="here"
            />
            <Link to={"/sign-up"}> Login </Link>
        </>
    )
}

export default Toolbar