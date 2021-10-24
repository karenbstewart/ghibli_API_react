import React from "react";
import ListItem from "./ListItem";

const PeopleList = ({people, onPersonClick}) =>{

    const personItems = people.map((person, index) => {
        return <ListItem person={person} key={index} onPersonClick={onPersonClick}/>
    })

    return(
        <div>
            <ul>
                {personItems}
            </ul>
        </div>
    )

}
export default PeopleList;

