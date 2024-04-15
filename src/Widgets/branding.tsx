import React from 'react'
import Marquee from 'react-fast-marquee';

// Images

import first from "../assets/first.png";
import three from "../assets/3.jpg";
import fourth from "../assets/4.jpg";
import fifth from "../assets/5.jpg";
import six from "../assets/6.jpg";
import first1 from "../assets/first.jpg";
import seven from "../assets/7.jpg";
import eight from "../assets/8.jpg";
import nine from "../assets/9.jpg";
import ten from "../assets/10.jpeg";


export const partners = [
    {
        url: first,
    },
    {
        url: three,
    },
    {
        url: fourth,
    },
    {
        url: fifth,
    },
    {
        url: six,
    },
    {
        url: seven,
    },
    {
        url: eight,
    },
    {
        url: nine,
    },
    {
        url: ten,
    },
];

const Branding = () => {
    return (
        <div className='border-t border-b border-[#000] py-10'>
            <h3 className='uppercase text-xl md:text-2xl text-center max-w-3xl mx-auto font-[400] z-20 relative'>
                CREATED FOR THE NEEDS
            </h3>
            <div className="w-full text-center pt-1">
                <h3 className="uppercase bg-[#72CA1A] rounded p-2 text-xl md:text-2xl text-center inline-block font-medium z-20 relative">
                    POWERING FARMERS WITH THE TOP ADVICES
                </h3>
            </div>
            <Marquee className="w-full flex justify-around">
                {partners.map((i, index) => (
                    <>
                        <img
                            src={i.url}
                            key={i.url}
                            width={200}
                            height={200}
                            alt="partner"
                            className={`md:mx-8 w-[150px] md:w-[180px] mx-3`}
                        />
                    </>
                ))}
            </Marquee>
        </div>
    )
}

export default Branding