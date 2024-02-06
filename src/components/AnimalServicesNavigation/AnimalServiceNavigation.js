import React from 'react';
import { navItemsServices} from "../../config/navigationMainConfig";
import {Link} from "react-router-dom";

const AnimalServiceNavigation = () => {
    return (
        <ul className="flex flex-col">
            {navItemsServices.map(item =>
                <Link className="text-[14px] font-[400] text-[#161616]" to={item.href}>{item.title}</Link>)}
        </ul>
    );
};

export default AnimalServiceNavigation;