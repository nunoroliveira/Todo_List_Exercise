import React from "react";
import {RiCheckboxBlankCircleLine, RiCheckboxCircleLine} from 'react-icons/ri';


const Checkbox = ({onClick, checked}) => {
    return checked ? <RiCheckboxCircleLine className="checkbox" onClick={onClick}/> : <RiCheckboxBlankCircleLine className="checkbox" onClick={onClick}/>
};

export default Checkbox;
