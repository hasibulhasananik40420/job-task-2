import React from 'react';
import Deals from './Deals';
import Dealsoftheday from './Dealsoftheday';
import Header from './Header';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Deals></Deals>
            <Dealsoftheday></Dealsoftheday>
        </div>
    );
};

export default Home;