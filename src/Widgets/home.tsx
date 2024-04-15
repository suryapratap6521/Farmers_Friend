import React from 'react'
import Header from "./header";
import Banner from './banner';
import Footer from './footer';
import Branding from './branding';
import Benefits from './benefits';

const Home = () => {
    return (
        <div>
            <Header />
            <Banner />
            <Branding />
            <Benefits />
            <Footer />
        </div>
    )
}

export default Home