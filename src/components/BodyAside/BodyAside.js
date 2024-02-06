import React from 'react';
import MainNavigation from "../MainNavigation/MainNavigation";
import AnimalServiceNavigation from "../AnimalServicesNavigation/AnimalServiceNavigation";
const BodyAside = () => {
    return (
        <div>
            <p className="text-[12px] font-[400] text-[#8A8A8A]">Main</p>
            <MainNavigation/>
            <p className="text-[12px] font-[400] text-[#8A8A8A]">Animal Services</p>
            <AnimalServiceNavigation/>
        </div>
    );
};

export default BodyAside;