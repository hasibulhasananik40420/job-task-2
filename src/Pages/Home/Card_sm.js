import React from 'react';
import { AiFillStar } from "react-icons/ai";

const Card_sm = () => {
    return (
        <div className="flex mt-5 translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer ">
            <img
                src="https://i.ibb.co/jgXh5Ph/fruit1.png"
                alt=""
                className="w-[102px] h-[102px]"
            />
            <div className="pl-7 ">
                <h2 className="text-textHeading font-bold  leading-5">
                    Nestle Original Coffee-Mate Coffee Creamer
                </h2>
                {/* star rating  */}
                <div className="flex items-center mb-2">
                    <AiFillStar color="#FDC040" />
                    <AiFillStar color="#FDC040" />
                    <AiFillStar color="#FDC040" />
                    <AiFillStar color="#FDC040" />
                    <AiFillStar color="#FDC040" />
                    <span className="ml-2 text-textBody text-sm mb-1">(5.0)</span>
                </div>
                {/* star ends  */}
                <div className="flex items-center mb-1">
                    <div className="font-bold text-brand1 text-[20px] mr-2">$12.85</div>
                    <div className="text-sm line-through text-textBody font-bold">
                        $13.8
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card_sm;