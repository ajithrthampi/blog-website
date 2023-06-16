import React, {useEffect, useState} from 'react'
import {useNavigate} from "react-router-dom"
import NewsFeeds from './NewsFeeds'
import UpcomingEvents from './UpcomingEvents'
import Jobs from './Jobs'

const HeaderNavigate = () => {

    const [state, setState] = useState('')
    const [loading, setLoading] = useState()
    const navigate = useNavigate()


    const Data = [
        {
            id: 1,
            name: "News Feeds"
        }, {
            id: 2,
            name: "Update On Upcoming Events"
        }, {
            id: 3,
            name: "Jobs"
        },

    ]


    const handleFeeds = (data) => {
        localStorage.setItem('segments', data);
        setState(data)
        setLoading()

    }


    useEffect(() => {
        const storedSegmants = localStorage.getItem('segments');
        console.log(storedSegmants);
        setState(storedSegmants)
    }, [])

   

    return (
        <>

            <div className='flex md:gap-8 gap-3'>

                {
                Data.map((item) => (
                    <div key={
                            item.id
                        }
                        className=''>
                        <h2 className='text-[#6d6e71] font-bold font-Mulish md:text-base sm:text-sm text-xs cursor-pointer'
                            onClick={
                                () => handleFeeds(item.name)
                        }>
                            {
                            item ?. name
                        } </h2>
                    </div>

                ))
            } </div>
            <hr className="h-[2px] md:my-4 my-4 bg-gray-400 border-0 dark:bg-gray-700"/>
            <div> 
            {
                state === null && <NewsFeeds/>
            }
                {
                state === "News Feeds" && <NewsFeeds/>
            }
                {
                state === "Update On Upcoming Events" && <UpcomingEvents/>
            }
                {
                state === "Jobs" && <Jobs/>
            } 
            
            </div>

        </>
    )
}

export default HeaderNavigate
