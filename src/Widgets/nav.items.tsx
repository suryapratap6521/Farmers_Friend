import { Link } from "react-router-dom";
import React from 'react'

export const navItems = [
    {
        title: "Weather",
    },
    {
        title: "Community",
    },
    {
        title: "Soil Understanding",
    },
    {
        title: "Ask Us",
    },
];

const NavItems = () => {
    return (
        <div className='w-full hidden md:flex items-center'>
            {
                navItems.map((i, index) => (
                    <Link key={index} to={'/'} className='px-5 text-lg'>
                        {i.title}
                    </Link>
                ))
            }
        </div>
    )
}

export default NavItems