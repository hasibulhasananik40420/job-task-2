import React from 'react';

const Header = () => {
    return (
        <div className='bg-[#FDFCF6] '>
            <div className='px-6 md:px-14 lg:max-w-7xl md-w-full mx-auto min-h-[60vh] h-auto'>
                <div className='flex flex-wrap'>
                    {/* <div className='lg:flex  md:flex-row lg:justify-between items-center'> */}

                    <div className='md:w-2/4   md:text-left flex items-center'>
                        <div>
                            <h1 className='text-2xl md:text-3xl lg:text-5xl  font-sans'>Cyan Ceramic Lamp</h1>
                            <p className='mt-4'>
                                Individually redefine revolutionary innovation through open strategic theme areas. Phosphorescently e-enables high-performance testing methods instead of highly-skilled architectures.
                            </p>
                            <button className='  border border-[#515FCE] block max-w-max  px-8 py-3  rounded mt-6 hover:bg-black hover:text-white hover:border-none'>Shop Now</button>

                        </div>

                    </div>

                    <div className=' md:w-2/4 w-full p-3 justify-center items-center'>
                        <img className='md:w-[350px] h-[450px] mx-auto block' src="https://htmldemo.net/airi/airi/assets/img/slider/home-13/m13-s1-1.png" alt="" />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Header;