import React from "react";
import { FaQuestion } from "react-icons/fa";
import Calender from "../assets/footer_calendar.png";
import Meeting from "../assets/footer_meeting.png";

const FooterOptions = () => {
    return (
        <div className='fixed z-20 flex flex-col gap-3 bottom-2 right-3'>
            <div className='footerButton'>
                <FaQuestion size={25} />
            </div>
            <div className='footerButton'>
                <img src={Meeting} alt='' className='h-[25px]' />
            </div>
            <div className='footerButton'>
                <img src={Calender} alt='' className='h-[25px]' />
            </div>
        </div>
    );
};

export default FooterOptions;
