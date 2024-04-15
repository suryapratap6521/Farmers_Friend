import { Link } from "react-router-dom";
import React from "react";
import FooterLogo from "./footer.logo";

const Footer = () => {
    return (
        <footer className="w-full bg-[#72CA1A] text-black pt-10">
            <div className="w-[95%] md:flex m-auto py-5">
                <div className="w-full md:w-[40%]">
                    <Link to={"/"}>
                        <FooterLogo />
                    </Link>
                    <p className="text-2xl py-2">
                        Get out updates delivered directly to your inbox.
                    </p>
                    <div className="flex items-center w-full">
                        <input
                            type="email"
                            name=""
                            id=""
                            placeholder="Enter your email"
                            className="bg-green-100 text-white w-full md:w-[50%] border h-[42px] px-2 rounded rounded-r-[0] outline-none"
                        />
                        <button className="w-[90px] cursor-pointer rounded-r h-[43px] bg-blue-500 text-xl outline-none">
                            submit
                        </button>
                    </div>
                    <br />
                    <p className="text-xs">
                        By subscribing you agree to with our Privacy Policy and provide
                        consent to receive updates from our company.
                    </p>
                </div>
                <div className="w-full md:w-[60%] flex md:justify-end justify-center py-5 md:py-0">
                    <div className="md:w-[50%] flex justify-around">
                        <div>
                            <ul>
                                <li className="text-xl pb-4 cursor-pointer">Weather</li>
                                <li className="text-xl pb-4 cursor-pointer">Community</li>
                                <li className="text-xl pb-4 cursor-pointer">Soil Understanding</li>
                                <li className="text-xl pb-4 cursor-pointer">Ask Us</li>
                                <li className="text-xl pb-4 cursor-pointer">Get Help</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <p className="text-lg text-center pb-10">
                © 2024 shhiivvaam, Inc. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;