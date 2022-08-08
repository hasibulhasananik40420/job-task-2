import React from 'react';
import { FaChevronLeft } from "react-icons/fa";
import Slider from "react-slick";
const Welcome = () => {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "red" }}
                onClick={onClick}>
                <FaChevronLeft></FaChevronLeft>
            </div>
        );
    }
    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{ ...style, display: "block", background: "green", position: "absolute", top: 100, right: 10 }}
                onClick={onClick}
            />
        );
    }
    const settings = {
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    };
    return (
        <div>
            <div className="grid grid-rows-3 grid-flow-col gap-4 border-3 items-center">
                <div class="row-span-4 w-[500px] border bg-cover rounded-md">
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                </div>
                <div className="row-span-2 col-span-2 border w-[600px] px-3 py-0">
                    <h1 className="font-bold text-[40px]">Welcome to Nest</h1>
                    <p className="text-[16px] text-[#7E7E7E] py-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>

                    <p className="text-[16px] text-[#7E7E7E] py-5">Ius ferri velit sanctus cu, sed at soleat accusata. Dictas prompta et Ut placerat legendos interpre.Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante Etiam sit amet orci eget. Quis commodo odio aenean sed adipiscing. Turpis massa tincidunt dui ut ornare lectus. Auctor elit sed vulputate mi sit amet. Commodo consequat. Duis aute irure dolor in reprehenderit in voluptate id est laborum.</p>
                </div>
                <div className="col-span-2 row-span-2 border mx-auto py-0">
                    <Slider {...settings} className='w-[600px]'>
                        <div className="px-2 w-[182px]">
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" className=" bg-cover" />
                        </div>
                        <div className="px-2 w-[182px]">
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                        </div>
                        <div className="px-2 w-[182px]">
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                        </div>
                        <div className="px-2 w-[182px]">
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                        </div>
                        <div className="px-2 w-[182px]">
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-1.png" alt="" />
                        </div>
                    </Slider>

                </div>
            </div>
        </div>
    );
};

export default Welcome;