import React, { useState, useEffect } from "react";
import PeopleList from "../components/PeopleList";

const PeopleContainer = () => {

    const [people, setPeople] = useState([]);
    const [selectedPerson, setSelectedPerson] =  useState([]);

    useEffect(() => {
        getPeople();
    }, [])

    const onPersonClick = function(person){
        setSelectedPerson(person);
    }

    const getPeople = function() {
        fetch('https://ghibliapi.herokuapp.com/people')
        .then(response => response.json())
        .then(people => setPeople(people))
    }
    
    console.log(people);

    return(
        <div>
            <PeopleList people={people} onPersonClick={onPersonClick} />
        </div>
        
    )


}

export default PeopleContainer;