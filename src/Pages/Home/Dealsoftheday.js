import React from 'react';
import Card from './Card';
import { AiFillStar } from "react-icons/ai";
import { AiOutlineRight, AiOutlinePlus } from "react-icons/ai";
import Card_sm from './Card_sm';
const Dealsoftheday = () => {
    return (
        <div className="font-main">
            {/* section 1 starts  */}
            <section className="">
                {/* title section  starts  */}
                <div className="flex justify-between mx-3 mb-8">
                    <h3 className="text-textHeading text-[25px] md:text-[32px] font-bold">
                        Deals Of The Days
                    </h3>
                    <div className="flex items-center hover:text-brand1 text-[#7E7E7E] ">
                        <a
                            className="text-[16px] 
               font-semibold mr-1"
                            href="#"
                        >
                            ALL DETAILS
                        </a>
                        <span className=" ">
                            <AiOutlineRight />
                        </span>
                    </div>
                </div>
                {/* title section  ends  */}
                {/* card section starts */}

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-3 gap-5 ">
                    {/* card 1 starts  */}
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                    {/* card 1 ends  */}
                    {/* card 2 starts  */}

                    {/* card 2 ends */}
                </div>



                {/* card section ends*/}



            </section>


        </div>
    );
};

export default Dealsoftheday;