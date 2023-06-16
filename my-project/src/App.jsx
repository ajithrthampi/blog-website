import {useState} from 'react'
import './App.css'
import HomePages from './pages/HomePages'
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom"
import NewsFeeds from './components/NewsFeeds'
import UpcomingEvents from './components/UpcomingEvents'

function App() {

    return (
        <>
           {/* <HomePages/> */}
           <Router>
            <Routes>
            <Route path="/" element={<HomePages/>} />
            {/* <Route path="/newsfeeds" element={<NewsFeeds/>} />
            <Route path="/upcomingevents" element={<UpcomingEvents/>} /> */}
            </Routes>
           </Router>

        </>
    )
}

export default App
