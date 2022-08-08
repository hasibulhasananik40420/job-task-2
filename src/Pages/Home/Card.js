import React from 'react';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
const Card = () => {
    return (
        <div className="mb-5 mx-2 lg:mx-auto ">
            {/* card image  */}
            <img
                src="https://i.ibb.co/gvkCh3n/img.png"
                alt=""
                className="object-cover mt-2 "
            />
            <div className="relative mt-[-45%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer">
                <div className="grid grid-cols-4  justify-center mx-auto w-[85%] text-center">
                    {/* clock box 1 */}
                    <div className="bg-[#fff]  mx-[5px] py-2 rounded  ">
                        <div className="text-[20px] font-black text-[#3BB77E]">922</div>
                        <div className="text-[#7E7E7E] font-semibold">Days</div>
                    </div>
                    {/* clock box 2  */}
                    <div className="bg-[#fff]  mx-[5px] py-2 rounded  ">
                        <div className="text-[20px] font-black text-[#3BB77E]">22</div>
                        <div className="text-[#7E7E7E] font-semibold">Hours</div>
                    </div>
                    {/* clock box 3  */}
                    <div className="bg-[#fff]  mx-[5px] py-2 rounded  ">
                        <div className="text-[20px] font-black text-[#3BB77E]">40</div>
                        <div className="text-[#7E7E7E] font-semibold">Mins</div>
                    </div>
                    {/* clock box 4 */}
                    <div className="bg-[#fff]  mx-[5px] py-2 rounded  ">
                        <div className="text-[20px] font-black text-[#3BB77E]">12</div>
                        <div className="text-[#7E7E7E] font-semibold">Sec</div>
                    </div>
                </div>
                {/* price section  */}
                <div className="max-w-[86%] shadow-lg bg-[white] mx-auto mt-3 rounded-[10px] py-[25px] px-[30px]">
                    <h2 className="text-textHeading font-bold mb-1 leading-5">
                        Signature Wood-Fired Mushroom and Caramelized
                    </h2>
                    {/* star rating  */}
                    <div className="flex items-center">
                        <AiFillStar color="#FDC040" />
                        <AiFillStar color="#FDC040" />
                        <AiFillStar color="#FDC040" />
                        <AiFillStar color="#FDC040" />
                        <AiFillStar color="#FDC040" />
                        <span className="ml-2 text-textBody text-sm mb-1">(5.0)</span>
                    </div>
                    {/* star ends  */}
                    <div className="text-textBody mb-1 text-sm font-semibold">
                        500 gram
                    </div>
                    <div className="flex items-center justify-between">
                        <div className="flex items-center mb-1">
                            <div className="font-bold text-brand1 text-[20px] mr-2">
                                $12.85
                            </div>
                            <div className="text-sm line-through text-textBody font-bold">
                                $13.8
                            </div>
                        </div>
                        <div className="">
                            <button className="flex items-center bg-brandColor2/40 text-[#FDC040] px-3 py-1 rounded">
                                Add{" "}
                                <span className="">
                                    <AiOutlinePlus />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
                {/* price section ends */}
            </div>
        </div>
    );
};

export default Card;