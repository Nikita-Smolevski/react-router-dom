import React from 'react';
import HeaderAside from "../HeaderAside/HeaderAside";
import BodyAside from "../BodyAside/BodyAside";
import GeartModal from "../GeartModal/GeartModal";
const AsideBlock = (props) => {
    const {user}= props;

    return (
        <div className="border p-[10px] m-[20px] ">
            <HeaderAside userInfo={user}/>
            <BodyAside/>
            <GeartModal/>
        </div>
    );
};

export default AsideBlock;