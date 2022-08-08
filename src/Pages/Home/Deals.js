import React from 'react';
import img1 from "../../Assets/best sell-image.png";
import {
    AiOutlineHeart,
    AiOutlineShoppingCart,
    AiFillStar,
} from "react-icons/ai";
import { FiEye } from "react-icons/fi";
import img2 from '../../Assets/best-slider/19 1.png';
import img3 from '../../Assets/best-slider/21 1.png';
import img4 from '../../Assets/best-slider/22 1.png';
const Deals = () => {
    return (
        <div className="xxl:max-w-7xl md-w-full my-16  mx-auto px-4  md:px-3">
            <div className="grid grid-cols-1 lg:grid-cols-2">
                <p className="text-3xl font-serif mb-10 text-[#253D4E] font-bold">Daily Best Sales</p>
                <div>
                    <ul className="flex gap-5 justify-end text-textBody">
                        <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">
                            Meats
                        </li>
                        <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">
                            Vegetables
                        </li>
                        <li className="transition ease-in-out delay-150 hover:text-[#3BB77E] hover:font-bold hover:-translate-y-1 duration-300">
                            Fruits
                        </li>
                    </ul>
                </div>
            </div>



            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5">
                <div className="relative mx-auto sm:mt-10 md:mt-0">
                    <img src={img1} alt="" />
                    <h1 className="absolute top-10 p-5 heading-3 font-bold">
                        Bring nature into your home{" "}
                    </h1>
                    <div className="absolute top-40 p-5">
                        <button className="p-3 bg-brandColor2 rounded text-white">
                            Shop Now &raquo;
                        </button>
                    </div>
                </div>
                <div className="border border-[#BCE3C9] rounded-lg overflow-hidden group">
                    <p className="mt-2 mb-3 text-[#FFF]">
                        <small className="bg-[#3BB77E] text-center px-4 py-1 z- rounded-r-full ">
                            Hot
                        </small>
                    </p>
                    <div className="relative flex justify-center items-center">
                        <img className="w-40" src={img2} alt="" />
                        <div className="absolute inset-0 bg-[#FFFF] top-5 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <a
                                href="#"
                                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <AiOutlineHeart />
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <FiEye />
                            </a>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="text-textBody hover:text-[#3BB77E]">
                            <small>Snack</small>
                        </p>
                        <p className="heading-sm hover:text-[#3BB77E] ">
                            Seeds of Change Organic Quinoa, Brown, & Red Rice
                        </p>
                        <div className="flex items-center text-warning gap-1 mt-2">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className="text-textBody">(4.0)</span>
                        </div>
                        <p>
                            By <span className="text-[#3BB77E]">NestFood</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-semibold text-[#3BB78F]">
                                $28.85
                            </p>
                            <del className="text-textBody font-semibold">32.80</del>
                        </div>
                        <div className="flex my-2">
                            <div className="border-4 border-[#3BB78F] w-56 rounded-l"></div>
                            <div className="border-4 w-40 rounded-r"></div>
                        </div>
                        <p className="mb-3 text-textBody font-semibold">
                            <small>Sold: 90/120</small>
                        </p>
                        <button className="w-full text-center bg-[#3BB78F] text-white font-semibold px-3 rounded py-2 flex items-center justify-center gap-2 hover:bg-[#FDC040] hover:text-[#FFF]">
                            <AiOutlineShoppingCart /> Add To Cart
                        </button>
                    </div>
                </div>




                <div className="border border-[#BCE3C9] rounded-lg overflow-hidden group">
                    <p className="mt-2 mb-3 text-[#FFF]">
                        <small className="bg-[#3BB77E] text-center px-4 py-1 z- rounded-r-full ">
                            Hot
                        </small>
                    </p>
                    <div className="relative flex justify-center items-center">
                        <img className="w-40" src={img4} alt="" />
                        <div className="absolute inset-0 bg-[#FFFF] top-5 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <a
                                href="#"
                                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <AiOutlineHeart />
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <FiEye />
                            </a>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="text-textBody hover:text-[#3BB77E]">
                            <small>Snack</small>
                        </p>
                        <p className="heading-sm hover:text-[#3BB77E]">
                            Seeds of Change Organic Quinoa, Brown, & Red Rice
                        </p>
                        <div className="flex items-center text-warning gap-1 mt-2">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className="text-textBody">(4.0)</span>
                        </div>
                        <p>
                            By <span className="text-[#3BB77E]">NestFood</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-semibold text-[#3BB78F]">
                                $28.85
                            </p>
                            <del className="text-textBody font-semibold">32.80</del>
                        </div>
                        <div className="flex my-2">
                            <div className="border-4 border-[#3BB78F] w-56 rounded-l"></div>
                            <div className="border-4 w-40 rounded-r"></div>
                        </div>
                        <p className="mb-3 text-textBody font-semibold">
                            <small>Sold: 90/120</small>
                        </p>
                        <button className="w-full text-center bg-[#3BB78F] text-white font-semibold px-3 rounded py-2 flex items-center justify-center gap-2 hover:bg-[#FDC040] hover:text-[#FFF]">
                            <AiOutlineShoppingCart /> Add To Cart
                        </button>
                    </div>
                </div>
                <div className="border border-[#BCE3C9] rounded-lg overflow-hidden group">
                    <p className="mt-2 mb-3 text-[#FFF]">
                        <small className="bg-[#3BB77E] text-center px-4 py-1 z- rounded-r-full ">
                            Hot
                        </small>
                    </p>
                    <div className="relative flex justify-center items-center">
                        <img className="w-24" src={img3} alt="" />
                        <div className="absolute inset-0 bg-[#FFFF] top-5 border border-[#3BB77E] px-2 shadow-lg rounded-md w-24 h-12 mx-auto flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100">
                            <a
                                href="#"
                                className=" text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <AiOutlineHeart />
                            </a>
                            <a
                                href="#"
                                className="text-2xl text-[#3BB77E] p-2 flex items-center justify-center transition"
                            >
                                <FiEye />
                            </a>
                        </div>
                    </div>
                    <div className="p-3">
                        <p className="text-textBody hover:text-[#3BB77E]">
                            <small>Snack</small>
                        </p>
                        <p className="heading-sm hover:text-[#3BB77E]">
                            Seeds of Change Organic Quinoa, Brown, & Red Rice
                        </p>
                        <div className="flex items-center text-warning gap-1 mt-2">
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <span className="text-textBody">(4.0)</span>
                        </div>
                        <p>
                            By <span className="text-[#3BB77E]">NestFood</span>
                        </p>
                        <div className="flex items-center gap-2">
                            <p className="text-2xl font-semibold text-[#3BB78F]">
                                $28.85
                            </p>
                            <del className="text-textBody font-semibold">32.80</del>
                        </div>
                        <div className="flex my-2">
                            <div className="border-4 border-[#3BB78F] w-56 rounded-l"></div>
                            <div className="border-4 w-40 rounded-r"></div>
                        </div>
                        <p className="mb-3 text-textBody font-semibold">
                            <small>Sold: 90/120</small>
                        </p>
                        <button className="w-full text-center bg-[#3BB78F] text-white font-semibold px-3 rounded py-2 flex items-center justify-center gap-2 hover:bg-[#FDC040] hover:text-[#FFF]">
                            <AiOutlineShoppingCart /> Add To Cart
                        </button>
                    </div>
                </div>


            </div>

        </div>
    );
};

export default Deals;