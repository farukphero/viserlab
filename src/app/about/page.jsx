import React from 'react';
import { NavBar } from '../(home)/_components/NavBar/NavBar';
import BuildingTomorrows from '../(home)/_components/BuildingTomorrows';
import Counter from './_components/Counter';
import Outstanding from './_components/Outstanding';
import Technology from './_components/Technology';

const AboutPage = () => {
    return (
        <div>
            <NavBar/>
            <BuildingTomorrows/>
            <Counter/>
            <Outstanding/>
            <Technology/>
        </div>
    );
};

export default AboutPage;