import React from 'react'

const Footer = () => {
    return (
        <div className='md:pt-40 pt-10'>
            <div className='flex md:flex-row flex-col md:justify-between'>
                <div className='flex flex-col gap-5'>
                    <h1 className='font-Mulish font-extrabold text-2xl'>Ready to grow your business?</h1>
                    <p className='font-Mulish font-semibold'>Join over 4000+ startups already growing with Untitled.</p>
                </div>
                <div>
                    <div className='md:relative flex md:w-auto w-full md:gap-0 gap-3 flex-col mt-3'>
                        <input className='border border-gray-300 rounded-3xl lg:py-3 py-2 pl-3 lg:pr-44 pr-20 ' type="text" placeholder='Enter you email'/>
                        <button className='md:absolute  top-0 bottom-0 bg-[#111825] text-white px-5 py-3 rounded-3xl right-0 font-Mulish placeholder:font-Mulish '>Subscribe</button>
                    </div>
                </div>
            </div>
            <div>
                <div className='pt-45 mt-12'>
                    <footer className="text-center lg:text-left bg-[#000520 text-dark \ md:h-full ">
                        <div className="flex justify-center items-center lg:justify-between p-6 border-b border-gray-300 ">
                            {/* <div className="mr-12 hidden lg:block t text-xl ">
                                <span className=' font-Mulish'>Get connected with us on social networks:</span>
                            </div> */}
                            <div className="flex justify-center">
                                <a href="#!" className="mr-6 text-white">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" className="w-2.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                                        <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path>
                                    </svg>
                                </a>
                                <a href="#!" className="mr-6 text-white">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" className="w-4" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                        <path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                                    </svg>
                                </a>
                                <a href="#!" className="mr-6 text-white">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path>
                                    </svg>
                                </a>
                                <a href="#!" className="mr-6 text-white">
                                    <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" className="w-3.5" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                                        <path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>
                        <div className="mx-6 py-10 text-center md:text-left">
                            <div className="grid grid-1 md:grid-cols-2 lg:grid-cols-5 gap-8 font-Mulish font-bold">
                                <div className="bg-[#000520">
                                    <h6 className="
                                                        uppercase
                                                        font-semibold
                                                        mb-4
                                                        flex
                                                        items-center
                                                        justify-center
                                                        md:justify-start
                                                      ">
                                        <div className='md:flex-col flex'>
                                            <div className=''>
                                               </div>
                                            <div>
                                                <div className=' text-xl  px-5 py-2 md:py-0 heading-fonts'>
                                                   Blog Website
                                                </div>
                                                {/* <p>Design amazing digital experience that create more happy in the world</p> */}
                                            </div>
                                            <div>
                                                <div to='/'><img className='md:w-48 w-10 mx-3 hidden md:block lg:block'
                                                        src='https://www.pexels.com/photo/a-man-driving-a-car-15663076/'
                                                        alt=""/></div>
                                            </div>
                                        </div>
                                    </h6>
                                    </div>
                                <div className=" ">
                                    <h6 className=" font-semibold mb-4 flex justify-center md:justify-start text-[#474849]  text-sm heading-fonts">
                                        Products
                                    </h6>
                                    <div className=' '>
                                        <p className="mb-4">
                                            <a className="">Overview</a>
                                        </p>
                                        <p className="mb-4">
                                            <a className="">Feature</a>
                                        </p>
                                        <p className="mb-4 relative">
                                            <a className="">Solutions</a>
                                            <button className='absolute hidden md:block text-[9px] left-20 top-1 border border-gray-700 rounded-3xl px-1 '>New</button>
                                        </p>
                                        <p className="mb-4">
                                            <a className="">Tutorial</a>
                                        </p>
                                    </div>
                                </div>
                                <div className=" ">
                                    <h6 className=" font-semibold mb-4 flex justify-center md:justify-start text-[#474849] text-sm heading-fonts">
                                        Company
                                    </h6>
                                    <div className=' '>
                                        <p className="mb-4">
                                            <a href="commercial-cleaning" className="">About us</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="residential-cleaning" className="">Careers</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="janitorial-cleaning" className="">Press</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="industrial-cleaning" className="">News
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="industrial-cleaning" className="">Media kit
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="industrial-cleaning" className="">Contact
                                            </a>
                                        </p>
                                    </div>
                                </div>
                                <div className=" ">
                                    <h6 className=" font-semibold mb-4 flex justify-center text-[#474849] md:justify-start text-sm heading-fonts">
                                        Resources
                                    </h6>
                                    <div className=' '>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Blog</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Newsletter
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Events</a>
                                        </p>
                                        <p className='mb-4'>
                                            <a href="special-service" className="">Help Center
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Tutorial</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Support</a>
                                        </p>
                                    </div>
                                </div>
                                <div className="">
                                    <h6 className=" font-semibold mb-4 flex justify-center text-[#474849] md:justify-start text-[] text-sm heading-fonts">
                                        Legal
                                    </h6>
                                    <div className=' '>
                                    <p className="mb-4">
                                            <a href="special-service" className="">Terms</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Privesy
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Cookies</a>
                                        </p>
                                        <p className='mb-4'>
                                            <a href="special-service" className="">Licenses
                                            </a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Settings</a>
                                        </p>
                                        <p className="mb-4">
                                            <a href="special-service" className="">Contact</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="text-center p-6 bg-[#000520 font-Mulish">
                            <span className='text-[#474849]'>© 2023 Copyright: </span>
                            <a className=" font-semibold ">Blog Website</a>
                        </div>
                    </footer>
                </div>
            </div>

        </div>
    )
}

export default Footer
