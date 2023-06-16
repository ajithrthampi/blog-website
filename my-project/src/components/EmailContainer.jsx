import React from 'react'

const EmailContainer = () => {
    return (
        <div className='bg-red-40 h-[50vh] md:mt-14 mt-20 '>
            <div className='flex md:flex-row flex-col  justify-between  items-center w-full h-full px-1 '>
                <div className=' flex flex-col justify-start items-start md:gap-12 gap-4 md:w-[50%]'>
                    <h1 className='lg:text-5xl md:text-4xl text-3xl font-Mulish font-bold'>Untitled Blog</h1>
                    <div className=' md:hidden text-[#6d6e71] font-Mulish'>
                        <p className='bg-red-40 lg:text-lg text-sm font-Mulish font-semibold '>
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet, quisquam atque 
                        </p>
                    </div>
                    <div className='md:relative flex md:w-auto w-full md:gap-0 gap-3 flex-col mt-3'>
                        <input className='border border-gray-300 rounded-3xl lg:py-3 py-2 pl-3 lg:pr-44 pr-20 ' type="text" placeholder='Enter you email'/>
                        <button className='md:absolute  top-0 bottom-0 bg-[#111825] text-white px-5 py-3 rounded-3xl right-0 font-Mulish placeholder:font-Mulish '>Subscribe</button>
                    </div>
                </div>
                <div className='hidden md:block md:w-[50%]  text-[#6d6e71] font-Mulish'>
                    <p className='bg-red-40 lg:text-lg  xl:px-40 font-Mulish'>
                       New Products Features, the latest in technology, solutions, and updates. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default EmailContainer
