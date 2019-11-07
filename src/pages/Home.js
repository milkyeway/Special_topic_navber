import React from 'react'
// import { Link } from 'react-router-dom'
// import PathNow from '../components/PathNow'
import Carousel from '../components/Home/Carousel'
import Home_Container_LatestEvents from '../components/Home/Home_Container_LatestEvents'
import Home_Container_LatestArticles from '../components/Home/Home_Container_LatestArticles'
import Home_Wine from '../components/Home/Home_Wine'
import Footer from '../components/Navigation_Navber/Footer'

// Container_News

// import Choosen from "../Chosen"


const Home = () => {
    return (
        <>
            <Carousel />
            <Home_Container_LatestEvents />
            <Home_Container_LatestArticles />
            <Home_Wine/>
            <Footer />
        </>
    )
}


export default Home