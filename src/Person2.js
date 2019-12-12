import React from "react";


const person2 = (props) => (
    <div>
        <h1>이름은 {props.name}, 나이는 {props.age}</h1>
        {props.children}
        {console.log(props.st)}
    </div>
)

// const person2 = ({name, age}) => (
//     <div>
//         <h1>이름은 {name}, 나이는 {age}</h1>
//     </div>
// )

export default person2;
