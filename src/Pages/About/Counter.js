import React from 'react';
import { FaTwitter, FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Counter = () => {
    return (
        <div >
            {/* <div className="grid grid-cols-5 gap-4 bg-countUp bg-cover rounded-lg py-14 border my-4 text-white">
                <div className="text-center py-3">
                    <h1 className="text-bold text-[72px]"><span className="count">12</span>+</h1>
                    <h4 className='text-[20px]'>Glorious years</h4>
                </div>
                <div className="text-center py-3">
                    <h1 className="text-bold text-[72px]"><span className="count">36</span>+</h1>
                    <h4 className='text-[20px]'>Happy clients</h4>
                </div>
                <div className="text-center py-3">
                    <h1 className="text-bold text-[72px]"><span className="count">58</span>+</h1>
                    <h4 className='text-[20px]'>Projects complete</h4>
                </div>
                <div className="text-center py-3">
                    <h1 className="text-bold text-[72px]"><span className="count">24</span>+</h1>
                    <h4 className='text-[20px]'>Team advisor</h4>
                </div>
                <div className="text-center py-3">
                    <h1 className="text-bold text-[72px]"><span className="count">26</span>+</h1>
                    <h4 className='text-[20px]'>Products Sale</h4>
                </div>
            </div> */}
            <div className='py-10 mx-auto'>
                <div className='my-4'>
                    <h1 className='font-bold text-center text-[48px] py-2'>Our Team</h1>
                    <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/wave.png" alt="" className='mx-auto' />
                </div>
                <div className='grid grid-cols-3 gap-3 my-6'>
                    <div className='px-4'>
                        <h4 className='text-[16px] text-[#7E7E7E] py-3 uppercase'>Our Team</h4>
                        <h3 className='font-bold text-[48px] font-Quicksand text-[#253D4E] leading-normal'>Meet Our <br /> Expert Team</h3>
                        <p className='text-[16px] py-3 text-[#7E7E7E]'>Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto</p>
                        <p className='text-[16px] text-[#7E7E7E] py-3'>Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia</p>
                        <button className='px-6 py-3 bg-[#3BB77E] my-4 text-white rounded font-bold'>View All Members</button>
                    </div>
                    <div className='w-[350px] h-[400px] rounded-lg mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-6.png" alt="" />
                        <div className='relative mt-[-20%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer border bg-white w-[300px]  mx-auto rounded-xl shadow-lg p-5'>
                            <h1 className='text-center font-bold text-[24px] pt-3'>Dilan Specter</h1>
                            <h3 className='text-center text-[18px] text-[#7E7E7E]'>Head Engineer</h3>
                            <div className='flex flex-wrap gap-4 justify-center py-6 text-success text-[20px]'>
                                <FaFacebookF></FaFacebookF>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaYoutube></FaYoutube>
                            </div>

                        </div>

                    </div>
                    <div className='w-[350px] h-[400px] rounded-lg mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/page/about-8.png" alt="" />
                        <div className='relative mt-[-20%] translate-y-0 hover:-translate-y-2 duration-300 cursor-pointer border bg-white w-[300px]  mx-auto rounded-xl shadow-lg p-5'>
                            <h1 className='text-center font-bold text-[24px] pt-3'>Dilan Specter</h1>
                            <h3 className='text-center text-[18px] text-[#7E7E7E]'>Head Engineer</h3>
                            <div className='flex flex-wrap gap-4 justify-center py-6 text-success text-[20px]'>
                                <FaFacebookF></FaFacebookF>
                                <FaTwitter></FaTwitter>
                                <FaInstagram></FaInstagram>
                                <FaYoutube></FaYoutube>
                            </div>

                        </div>

                    </div>

                </div>
            </div>

            <div className=' border bg-count bg-right-bottom bg-cover bg-no-repeat rounded-lg items-center py-10'>
                <div className='py-8 col-span-1 w-4/5 px-16'>
                    <h1 className='font-bold text-[48px] font-Quicksand text-[#253D4E] leading-normal'>Stay home & get your  <br />
                        needs from our shop</h1>
                    <h5>Start You'r Daily Shopping with Nest Mart</h5>
                    <div className='my-5'>
                        <input type="text" className='rounded-3xl pr-20 pl-5 py-2' placeholder='Your Email Address' />
                        <input type="button" value="Search" className='bg-[#3BB77E] rounded-3xl border px-10 py-2 text-white relative left-[-30px]' />
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-5 gap-4 mx-auto my-8'>
                <div className='grid grid-cols-2 border items-center justify-center p-2 bg-[#F4F6FA] rounded-md'>
                    <div className='mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-semibold'>Best prices & offers</h3>
                        <p className='text-[#adadad] text-[12px]'>Orders $50 or more</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 border items-center justify-center p-2 bg-[#F4F6FA] rounded-md'>
                    <div className='mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-semibold'>Best prices & offers</h3>
                        <p className='text-[#adadad] text-[12px]'>Orders $50 or more</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 border items-center justify-center p-2 bg-[#F4F6FA] rounded-md'>
                    <div className='mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-semibold'>Best prices & offers</h3>
                        <p className='text-[#adadad] text-[12px]'>Orders $50 or more</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 border items-center justify-center p-2 bg-[#F4F6FA] rounded-md'>
                    <div className='mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-semibold'>Best prices & offers</h3>
                        <p className='text-[#adadad] text-[12px]'>Orders $50 or more</p>
                    </div>
                </div>
                <div className='grid grid-cols-2 border items-center justify-center p-2 bg-[#F4F6FA] rounded-md'>
                    <div className='mx-auto'>
                        <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/icons/icon-1.svg" alt="" />
                    </div>
                    <div>
                        <h3 className='text-[18px] font-semibold'>Best prices & offers</h3>
                        <p className='text-[#adadad] text-[12px]'>Orders $50 or more</p>
                    </div>
                </div>


            </div>

        </div >
    );
};

export default Counter;