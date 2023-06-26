import React from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import { AiFillBulb, AiFillMinusCircle } from "react-icons/ai";
import { BiSolidMessageDetail, BiSolidMessageError } from "react-icons/bi";
import { PiFlowerLotusFill } from "react-icons/pi";
import { FiMinus, FiPlus } from "react-icons/fi";
import Accordion from "./Accordion";

const DynamicForm = () => {
    return (
        <Formik
            initialValues={{
                thread: [
                    {
                        subthread: [{ subthread1: "", subthread2: "", category: "", process: "" }],
                    },
                ],
            }}
            onSubmit={(values) =>
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                }, 500)
            }
            render={({ values }) => (
                <Form>
                    <FieldArray
                        name='thread'
                        render={(arrayHelpers) => (
                            <>
                                <div className="flex flex-col gap-3">
                                    {values.thread.map((curr, index) => (
                                        <Accordion
                                            content={""}
                                            heading={`Thread ${index + 1}`}
                                            children={
                                                <>
                                                    <FieldArray
                                                        name={`thread[${index}].subthread`}
                                                        render={(fucntions) => (
                                                            <div>
                                                                {curr.subthread.map((_, i) => (
                                                                    <div key={i}>
                                                                        <div className='flex justify-around'>
                                                                            <div className='rounded-lg bg-[#f0f0f0] p-1'>
                                                                                <div className='p-1 text-sm'>Sub Thread</div>
                                                                                <textarea type='text' rows='3' className='p-1 rounded-lg' placeholder='Text Here...' />
                                                                            </div>
                                                                            <div className='rounded-lg bg-[#f0f0f0] p-1'>
                                                                                <div className='p-1 text-sm'>Sub Interpretation 1</div>
                                                                                <textarea type='text' rows='3' className='p-1 rounded-lg' placeholder='Text Here...' />
                                                                            </div>
                                                                        </div>
                                                                        <div className='flex flex-wrap items-center justify-end gap-3 p-2 my-3 text-sm'>
                                                                            <AiFillBulb size={20} />
                                                                            <BiSolidMessageDetail size={20} />
                                                                            <BiSolidMessageError size={20} />
                                                                            <PiFlowerLotusFill size={20} />
                                                                            <select className='p-1 bg-white rounded-lg shadow-md text-[10px] w-[80px]' defaultValue={1}>
                                                                                <option>Remark</option>
                                                                                <option>Sub-argument</option>
                                                                                <option>Self explaination</option>
                                                                                <option>Core principle</option>
                                                                            </select>
                                                                            <select className='p-1 text-[10px] bg-white rounded-lg shadow-md w-[80px]' defaultChecked={1}>
                                                                                <option>Select Process</option>
                                                                                <option>Question</option>
                                                                                <option>Analogy</option>
                                                                                <option>Sarcasm</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className='flex justify-end gap-2 mb-2'>
                                                                            <button
                                                                                type='button'
                                                                                className='flex items-center justify-center gap-2 p-1 text-white bg-[#a92e15] text-[12px] rounded-md'
                                                                                onClick={() => fucntions.remove(i)}>
                                                                                <FiMinus /> Sub Thread
                                                                            </button>
                                                                        </div>
                                                                    </div>
                                                                ))}
                                                                <button
                                                                    type='button'
                                                                    className='flex items-center justify-center gap-2 p-1 text-white bg-[#0029ff] text-[12px] rounded-md mb-3'
                                                                    onClick={() => fucntions.push({ subthread1: "", subthread2: "", category: "", process: "" })}>
                                                                    <FiPlus /> Sub Thread
                                                                </button>
                                                            </div>
                                                        )}
                                                    />
                                                    <div className='rounded-lg bg-[#f0f0f0] p-1'>
                                                        <div className='p-1 text-sm'>Sub Thread A</div>
                                                        <textarea type='text' rows='3' className='w-full p-1 rounded-lg' placeholder='Text Here...' />
                                                    </div>
                                                </>
                                            }
                                        />
                                    ))}
                                </div>
                                <button
                                    type='button'
                                    className='flex items-center justify-center gap-2 p-1 text-white bg-[#0029ff] text-[12px] rounded-md m-3'
                                    onClick={() =>
                                        arrayHelpers.push({
                                            subthread: [{ subthread1: "", subthread2: "", category: "", process: "" }],
                                        })
                                    }>
                                    <FiPlus /> New Thread
                                </button>
                            </>
                        )}
                    />
                </Form>
            )}
        />
    );
};

export default DynamicForm;
