import React, { useState } from "react";
import { AiFillInfoCircle } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";

const Card = ({ title, description, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='relative card h-[400px] shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)] w-full md:w-[48%] rounded-xl overflow-y-scroll'>
            <div className='sticky top-0 z-10 bg-white'>
                <div
                    className='relative flex items-center justify-center p-3 text-center text-white bg-black rounded-t-xl text-[18px] cursor-pointer'
                    initial={false}
                    onClick={() => setIsOpen(!isOpen)}>
                    {title}
                    <AiFillInfoCircle size={25} className='absolute right-3' />
                </div>
                <AnimatePresence initial={false}>
                    {isOpen && (
                        <motion.section
                            className='p-4 border-b-2 border-[#eeeeee]'
                            key='content'
                            style={{ overflow: "hidden" }}
                            initial={{ height: 1 }}
                            transition={{ duration: 0 }}
                            animate={{
                                height: "auto",
                            }}
                            exit={{
                                height: 0,
                            }}>
                            <span className='font-bold h-1/2'>Description : </span>
                            {description}
                        </motion.section>
                    )}
                </AnimatePresence>
            </div>
            <div className='block w-full h-auto overflow-hidden overflow-y-scroll'>
                {children}
            </div>
        </div>
    );
};

export default Card;
