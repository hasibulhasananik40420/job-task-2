import React from 'react';
import { Link } from 'react-router-dom'
import { GoLocation } from 'react-icons/go'
import { FiPhoneCall, FiClock } from 'react-icons/fi'
import { GiPaperPlane } from 'react-icons/gi'
import { BsFacebook, BsMessenger, BsTelephone } from 'react-icons/bs';
import { AiOutlineInstagram, AiOutlineTeam, AiOutlineTwitter } from 'react-icons/ai';
import { FaYoutube } from 'react-icons/fa';
const Footer = () => {
    return (
        <footer>
            <div className='px-2 h-[40vh] md:w-full pt-8'>
                {/* <FooterTopBanner /> */}
                {/* Footer HEre */}
                <div className='mt-6 p-2 flex'>
                    <div className="flex flex-wrap justify-between gap-8">
                        <div className="footerlogo max-w-sm  pr-6   ">
                            <img src="https://i.ibb.co/f9VXHJ7/Logo.png" alt="" />
                            <p className='my-2'> Pellentesque posuere orci lobortis</p>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><GoLocation className='text-[#3BB77E] font-bold inline-block mr-2' /> <span className='font-bold'>Address: </span> 5171 W Campbell Ave undefined Kent, Utah 53127 United States</li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><FiPhoneCall className='text-[#3BB77E] font-bold inline-block mr-2' /> <span className='font-bold'>Call Us: </span> (+91) - 540-025-124553 </li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><GiPaperPlane className='text-[#3BB77E] font-bold inline-block mr-2' /><span className='font-bold'>Email: </span>contact@nestmart.com</li>
                                <li className=' translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><FiClock className='text-[#3BB77E] font-bold inline-block mr-2' /><span className='font-bold'>Hours: </span> 10:00 - 18:00, Mon - Sat</li>
                            </ul>


                        </div>
                        {/* Company information */}
                        <div className="footercompany min-w-max text-left pr-6 ">

                            <h4 className='my-2 heading-4 font-bold'>Company</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><Link to='/about'>About us</Link></li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><Link to='/contact'>Contact us</Link></li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><Link to='/blog'>Blogs</Link></li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Terms & Conditions</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Contact Us</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Support Center</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Careers</li>

                            </ul>

                        </div>
                        {/* Account information */}
                        <div className="footerAccount min-w-max text-left pr-6 lg:ml-6 ">

                            <h4 className='my-2 heading-4 font-bold'>Account</h4>
                            <ul>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '><Link to='/singup'>Sign In</Link></li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>View Cart</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>My Wishlist</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Track My Order</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Help Ticket</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Shipping Details</li>
                                <li className='text-left  translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer  '>Compare products</li>

                            </ul>

                        </div>

                        <div className="footerApp&Payment pr-6 max-w-sm w-full lg:ml-16 ">

                            <h4 className='my-2 heading-4 font-bold'>App & Payment</h4>
                            <p className='my-2 '> Install DL Commerce App from App Store or Google Play</p>
                            <div className='flex'>
                                <img className='w-2/4' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/app-store.jpg" alt="" />
                                <img className='w-2/4' src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/google-play.jpg" alt="" />
                            </div>
                            <p className='my-2'>Secured Payment Gateways</p>
                            <img src="http://wp.alithemes.com/html/nest/demo/assets/imgs/theme/payment-method.png" alt="" />

                        </div>


                    </div>

                </div>
                <div>
                    <hr className='my-2 bg-[#D8F1E5]' />

                    <div className='md:flex justify-evenly pb-10'>
                        <div>
                            <p>© 2022, Deciders Ecommerce </p>
                            <p>Designed by <span className='text-brand1'>Deciders Team</span> All rights reserved  </p>
                        </div>

                        <div className='flex flex-col'>
                            <div className='flex items-center gap-2'>
                                <span><BsTelephone className='w-8 h-8 '></BsTelephone></span>
                                <span>
                                    <p className='text-2xl font-sans text-success font-semibold'>1900 - 6666</p>
                                    <p className='text-gray-500 text-xs'>Working 8:00 - 22:00</p>
                                </span>

                            </div>
                            <div className='flex items-center gap-2'>
                                <span><BsTelephone className='w-8 h-8 '></BsTelephone></span>
                                <span>
                                    <p className='text-2xl font-sans text-success font-semibold'>1900 - 6666</p>
                                    <p className='text-gray-500 text-xs'>Working 8:00 - 22:00</p>
                                </span>

                            </div>
                        </div>


                        <div>
                            <div className='flex gap-4'>
                                <p className='text-xl font-sans text-gray-700'>Follow Us</p>
                                <span className='flex gap-2 text-success '>
                                    <BsFacebook className='w-6 h-6 translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer'></BsFacebook>
                                    <AiOutlineTwitter className='w-6 h-6 translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer'></AiOutlineTwitter>
                                    <AiOutlineInstagram className='w-6 h-6 translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer'></AiOutlineInstagram>
                                    <FaYoutube className='w-6 h-6 translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer'></FaYoutube>
                                    <BsMessenger className='w-6 h-6 translate-y-0 hover:-translate-y-1 duration-300 cursor-pointer'></BsMessenger>
                                </span>
                            </div>
                            <p className='mt-1 font-medium text-gray-500 font-lato'>Up to 15% discount on your first subscribe</p>
                        </div>
                    </div>


                </div>
            </div>
        </footer>
    );
};

export default Footer;