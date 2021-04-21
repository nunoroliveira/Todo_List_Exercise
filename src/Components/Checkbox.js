import React from "react";
import {RiCheckboxBlankCircleLine, RiCheckboxCircleLine} from 'react-icons/ri';


const Checkbox = ({onClick, checked}) => {
    const Component = checked ? RiCheckboxCircleLine : RiCheckboxBlankCircleLine;
    return <Component className="checkbox" onClick={onClick}/>
};

export default Checkbox;
