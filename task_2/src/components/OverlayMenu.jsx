import React, { useState } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";

const OverlayMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`fixed z-20 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] rounded-tr-xl rounded-br-xl transition-all h-[85vh] mt-2 bg-white overflow-hidden ${isOpen ? "max-w-[350px]" : "w-[100px]"}`}>
            <div className='flex items-center justify-between p-3 bg-black rounded-tr-xl '>
                {isOpen ? <div className='font-bold text-white'>Journey Board</div> : <div></div>}
                {!isOpen ? (
                    <BsFillArrowRightCircleFill size={20} className='text-white cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                ) : (
                    <BsFillArrowLeftCircleFill size={20} className='text-white cursor-pointer' onClick={() => setIsOpen(!isOpen)} />
                )}
            </div>
            {isOpen ? (
                <div className='flex flex-row p-5 content'>
                    <ul className='list-disc list-inside'>
                        <li className='font-bold'>Explore the world of management</li>
                        <li>Technical Project Management</li>
                        <li>Threadbuild</li>
                        <li>Structure you pointers</li>
                        <li>4SA Method</li>
                    </ul>
                </div>
            ) : (
                <div className='flex flex-col gap-3 p-5 bg-white content'>
                    {
                        [1,2,3,4].map((curr,index) => (
                            <div className="flex aspect-square items-center justify-center text-[30px] border-2 border-[#0029FF] text-[#0029FF] rounded-2xl " key={index}>{curr}</div>
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default OverlayMenu;
