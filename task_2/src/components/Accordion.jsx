import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion = ({ heading, content, children }) => {
    const [isOpen, setIsOpen] = useState(true);
    const [expand, setExpand] = useState(false);

    const texttruncate = (text) => {
        if (text.length > 50 && !expand) {
            return (
                <>
                    <div>{text.substr(0, 50)}</div>
                    <div onClick={() => setExpand(true)} className='flex justify-end font-bold cursor-pointer'>
                        ...See more
                    </div>
                </>
            );
        } else {
            return (
                <>
                    <div>{text}</div>
                    {text.length > 50 && (
                        <div onClick={() => setExpand(false)} className='flex justify-end font-bold cursor-pointer'>
                            ...See less
                        </div>
                    )}
                </>
            );
        }
    };

    return (
        <AnimatePresence initial={false}>
            <div className='flex flex-col cursor-pointer'>
                <div onClick={() => setIsOpen(!isOpen)} className='bg-[#f2f2f2] p-2 mx-5 text-center flex gap-3 items-center font-bold'>
                    {!isOpen ? <IoIosArrowDown /> : <IoIosArrowUp />}
                    {heading}
                </div>

                {isOpen && (
                    <motion.section
                        className='p-4 m-3'
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
                        {content && texttruncate(content)}
                        {children && children}
                    </motion.section>
                )}
            </div>
        </AnimatePresence>
    );
};

export default Accordion;
