import React from "react";
import { ReactComponent as Logo } from "../assets/logo.svg";
import { ReactComponent as Avatar } from "../assets/avatar.svg";
import { IoHome, IoNotifications } from "react-icons/io5";
import { FaTools } from "react-icons/fa";
import { SlOptionsVertical } from "react-icons/sl";

const Header = () => {
    return (
        <div className='sticky top-0 z-30 h-[10vh] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] bg-[#F0F0F0] py-2 px-4 md:px-[10vw] md:py-3 flex justify-between items-center'>
            <div className='logo'>
                <Logo className='w-3/4 md:w-full' />
            </div>
            <div className='flex gap-4 menu'>
                <div className='headerIcon'>
                    <IoHome size={20} />
                </div>
                <div className='headerIcon'>
                    <FaTools size={20} />
                </div>
                <div className='headerIcon'>
                    <IoNotifications size={23} />
                </div>
                <div className='hidden md:flex items-center justify-center h-10 rounded-full aspect-square text-white cursor-pointer hover:scale-[0.95]'>
                    <Avatar />
                </div>
                <div className='flex items-center justify-center h-10 text-[#3683f0] rounded-full aspect-square cursor-pointer'>
                    <SlOptionsVertical size={23} />
                </div>
            </div>
        </div>
    );
};

export default Header;
