import React from 'react';

// function Greet() {
//     return <h1>Hello Mayur</h1>
// }

const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Hello {props.name} Roll is {props.roll}</h1>
            {props.children}
        </div>
    )
}
export default Greet