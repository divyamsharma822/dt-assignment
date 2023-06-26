import React, { useState } from "react";
import Card from "./Card";
import { Video, Editor, Accor, Threadbuild } from "./SubCards";
import data from "../data.json";

const Content = () => {

    const [assets] = useState(data.tasks[0].assets);
    const [childArray] = useState([<Video />,<Threadbuild />,<Editor/>,<Accor />]);
    
    return (
        <div className='pt-3 px-3 md:px-[15%] h-[90vh]'>
            <div className='flex items-center justify-between'>
                <div className='text-[#0029FF] font-bold text-[25px]'>Technical Project Management</div>
                <button type='button' className='bg-[#0029FF] px-5 py-2 rounded-lg text-white min-w-max sticky'>
                    Submit task
                </button>
            </div>
            <div className='bg-[#E9ECEF] rounded-md p-5 mt-5'>
                <div className='text-[20px] font-bold'>{data?.tasks[0]?.task_title}</div>
                <div className='text-[16px] '>{data?.tasks[0]?.task_description}</div>
            </div>
            <div className='flex flex-col flex-wrap justify-center gap-5 p-5 mt-5 md:flex-row'>
            {assets?.map((curr,i)=>(
                <Card title={curr.asset_title} description={curr.asset_description} children={childArray[i]} />
            ))}
            </div>
        </div>
    );
};

export default Content;
