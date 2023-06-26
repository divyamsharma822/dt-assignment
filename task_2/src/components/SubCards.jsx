import React, { useState } from "react";
import { TbArrowBackUp, TbArrowForwardUp } from "react-icons/tb";
import { MdOutlineZoomOutMap } from "react-icons/md";
import { AiFillPicture } from "react-icons/ai";
import { SlOptions } from "react-icons/sl";
import Accordion from "./Accordion";
import DynamicForm from "./DynamicForm";

const Video = () => {
    return <iframe className='w-full border-2 border-white aspect-video' title='DT' src='https://www.youtube.com/embed/TiMRwri1xJ8' />;
};

const Editor = () => {
    const [count, setCount] = useState(0);

    return (
        <div className='flex flex-col h-full gap-3 px-6 py-3'>
            <div className='text-lg font-bold'>Title</div>
            <input type='text' className='focus:outline-none p-2 shadow-[-2px_2px_6px_0px_rgba(0,0,0,0.15)] rounded-md w-full min-h-[40px]' />
            <div className='text-lg font-bold'>Content</div>
            <div className='shadow-[-2px_2px_6px_0px_rgba(0,0,0,0.15)] rounded-md relative overflow-hidden'>
                <div className='flex flex-wrap items-center p-2 shadow-[rgba(99,99,99,0.2)_0px_2px_8px_0px] mb-3'>
                    {[
                        "File",
                        "Edit",
                        "View",
                        "Insert",
                        "Format",
                        "Tools",
                        "Table",
                        "Help",
                        <TbArrowBackUp size={25} className='text-[#616161]' />,
                        <TbArrowForwardUp size={25} className='text-[#616161]' />,
                        <MdOutlineZoomOutMap size={25} className='text-[#616161]' />,
                        <AiFillPicture size={25} className='text-[#616161]' />,
                        <select className='bg-[#EBEBEB] p-1 rounded-sm' defaultValue={1}>
                            <option>Paragraph</option>
                            <option className='text-2xl font-extrabold'>Heading 1</option>
                            <option className='text-lg font-semibold'>Heading 2</option>
                            <option className='text-md'>Heading 3</option>
                            <option>Preformatted</option>
                        </select>,
                        <SlOptions size={25} className='text-[#616161]' />,
                    ].map((curr, index) => (
                        <div className='px-2 py-1 rounded-md cursor-pointer hover:bg-[#cce2fa]' key={index}>
                            {curr}
                        </div>
                    ))}
                </div>
                <textarea onChange={(e) => setCount(e.target.value.length)} rows={10} className='w-full p-3 pb-3 border-b-2 border-[#eeeeee] focus:outline-none' />
                <div className='flex justify-end text-[#7d7d7d] mx-2'>{count} words</div>
            </div>
        </div>
    );
};

const Accor = () => {
    const ExampleComponent = ({ heading, content }) => {
        return (
            <div className='w-full mx-4'>
                <div className='px-3 py-2 border-2 border-[#e5e3e3] font-bold'>{heading}</div>
                <div className='p-3'>{content}</div>
            </div>
        );
    };

    const MainExampleContainer = () => {
        return (
            <div className='flex flex-col gap-2 ml-4'>
                <ExampleComponent
                    heading={"Example 1"}
                    content={
                        "Story for Alignment: Using the concepts we already have, let's create a toy story to explain why the project is being built. By including Raju Chitu in the narrative, let's provide a real-world illustration of how that product will be used by actual customers. That will be a macro story in which we develop an actual product from a concept. But what about the product's finer points? How can we illustrate real-world examples of Raju and Chitu using our product? Here is the micro story where the product's uses are explained. We now have a local, global, and macro perspective of the product.Micro and macro stories are interconnected; as we construct one, we may end up with the other."
                    }
                />
                <ExampleComponent
                    heading={"Example 2"}
                    content={
                        "Scope of Agility: Because there was no visual representation of the product, we failed to account for four key factors: user value, functionality, UX flow, and user emotions.In order to determine the scope of agility, we define the fundamental aesthetics and wireframe of the product. To provide a clear image for creating a mental map of the product, the wireframe would be as straightforward as is practical."
                    }
                />
                <ExampleComponent
                    heading={"Example 3"}
                    content={
                        "Staggered approach:Up until this point in the product's management, we are gathering everything. Everything is currently in our hands. However, how are we going to approach it, what are dependencies, and how do we determine an element's dependence on the product? Which would come in first and which second? What are the product's phases, steps, and breakdown, and how many of them are there? This product management step will determine each milestone."
                    }
                />
            </div>
        );
    };

    return (
        <div className='flex flex-col gap-3 my-3'>
            <Accordion heading={"Introduction"} content={"The 4SA Method, How to bring a idea into process?"} />
            <Accordion heading={"Thread A"} children={<MainExampleContainer />} />
            <Accordion heading={"Transition 1"} content={"For preparing the strategy from the concept and build it into product one of the methods used is the 4SA approach."} />
            <Accordion
                heading={"Thread B"}
                content={
                    "Story for Alignment: Using the concepts we already have, let's create a toy story to explain why the project is being built. By including Raju Chitu in the narrative, let's provide a real"
                }
            />
            <Accordion heading={"Conclusion"} content={"The product is now ready to launch; we have a strategy-based plan from an innovative concept."} />
        </div>
    );
};

const Threadbuild = () => {
    return <DynamicForm />;
};

export { Video, Editor, Accor, Threadbuild };
