import React from 'react';
import { NavBar } from '../(home)/_components/NavBar/NavBar';
import BuildingTomorrows from '../(home)/_components/BuildingTomorrows';
import Counter from './_components/Counter';

const AboutPage = () => {
    return (
        <div>
            <NavBar/>
            <BuildingTomorrows/>
            <Counter/>
        </div>
    );
};

export default AboutPage;