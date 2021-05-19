import React from 'react';
import Person from './Person'

function NameList() {
    const persons = [
        {
            id: 1,
            name: 'Joey',
            age: 28,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Chandler',
            age: 29,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Ross',
            age: 30,
            skill: 'Node'
        }
    ]
    const personList = persons.map(person => <Person key={person.name} person = {person} />)
    return (
        <div>
            {
                personList
            }
        </div>
    )
}

export default NameList
