import React from "react";
import ListItemCss from './ListItemCss.css';

const ListItem = ({person, onPersonClick}) => {
    const handleClick = function(){
        onPersonClick(person);
    }

    return <li onClick={handleClick}>{person.name}</li>
}

export default ListItem;