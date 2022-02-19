import React from 'react';
import './Home.css';
import MenuBar from '../MenuBar/MenuBar';
import Banner from '../Banner/Banner';
const Home = () => {
    return (
        <div>
            <MenuBar></MenuBar>
            <Banner></Banner>
        </div>
    );
};

export default Home;