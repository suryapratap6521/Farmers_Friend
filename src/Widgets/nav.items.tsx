import { Link } from "react-router-dom";
import React from 'react'

export const navItems = [
    {
        title: "Weather",
        link: '/weather'
    },
    {
        title: "Community",
        link: '/link'
    },
    {
        title: "Soil Understanding",
        link: '/soil'
    },
    {
        title: "Ask Us",
        link: '/smartbot'
    },
];

const NavItems = () => {
    return (
        <div className='w-full hidden md:flex items-center'>
            {
                navItems.map((i, index) => (
                    <Link key={index} to={`${i.link}`} className='px-5 text-lg'>
                        {i.title}
                    </Link>
                ))
            }
        </div>
    )
}

export default NavItems