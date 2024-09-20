import React from 'react';
import { GlobalContextProvider } from '../../context/global-context';
import Header from '../Header'
import Brands from '../Brands/Brands'
import Cars from '../CarsPage/CarsHome';
import Services from '../Services/Services'
import Faq from '../Faq/Faq'

const Home = () => {
    return (
        <div>
            <Header />
            <Brands />
            <Cars />
            <Services />
            <Faq />
        </div>
    );
}

export default Home;
