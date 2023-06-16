import React, {useState} from 'react'

const Header = () => {

    let Links = [
        {
            name: "Home",
            link: "/"
        },
        {
            name: "Service",
            link: "/"
        },
        {
            name: "Resources",
            link: "/"
        },
        {
            name: "pricing",
            link: "/"
        }, {
            name: "Log in",
            link: "/"
        }, {
            name: "Sign up",
            link: "/"
        },
    ];
    let [open, setOpen] = useState(false);

    return (
        <>

            <div className='s w-full fixed top-0 left-0 z-50'>
                <div className='borde md:flex item-center justify-between  bg-white   md:px-20 px-3 pt-7'>
                    <div className='flex items-center '>
                        <div className='font-bold lg:text-2xl md:text-xl cursor-pointer flex items-center text-[#374151]'>
                            <span className='text-3xl text-indigo-600 mr-1 '>

                                <ion-icon name="logo-ionic"></ion-icon>
                            </span>
                            Untitled
                        </div>
                        <div onClick={
                                () => setOpen(!open)
                            }
                            className='text-3xl absolute right-8 top-8 cursor-pointer md:hidden'>
                            <ion-icon name={
                                open ? 'close' : "menu"
                            }></ion-icon>
                        </div>

                        <ul className={
                            `md:flex md:items-center md:pb-0
                              pb-12 absolute md:static bg-white md:z-auto z-[]
                              left-0 w-full md:w-auto md:pl-0 pl-9 transition-all
                              duration-500 ease-in  ${
                                open ? "top-20" : "top-[-490px]"
                            }`
                        }>
                            {
                            Links && Links.map((link, index) => (

                                <li key={
                                        link.name
                                    }
                                    className="lg:ml-8 md:ml-4 text-lg md:my-0 my-7 ">
                                    <a href={
                                            link.link
                                        }
                                        className={
                                            `text-[#374151] hover:text-gray-400 font-Mulish lg:text-base md:text-sm font-bold ${
                                                link.name === "Sign up" ? "md:hidden bg-black text-white text-base px-5 py-2 rounded-3xl" : ""
                                            }  ${
                                                link.name === "Log in" ? "md:hidden bg-black text-white text-base px-5 py-2 rounded-3xl" : ""
                                            } `
                                    }>
                                        {
                                        link.name
                                    }</a>
                                </li>
                            ))
                        } </ul>
                    </div>
                    <div className='hidden md:block '>
                        <div className='flex gap-3 font-Mulish lg:text-base md:text-sm font-bold'>
                            <button className='hover:bg-[#111825] hover:text-white lg:px-7 px-5 lg:py-3 py-1 items-center font-Mulish rounded-3xl '>Login</button>
                            <button className='bg-[#111825] text-white px-5 py-3  items-center font-Mulish rounded-3xl '>Sign up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header
