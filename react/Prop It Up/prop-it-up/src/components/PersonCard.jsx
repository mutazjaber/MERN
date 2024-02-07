import React  from "react";
const PersonCard = props => {
    const{firstName, age}= props;
    return(
        <>
            <h1>{props.lastName} , {firstName} </h1>
            <p>Age {age}:</p>
            <p>HairColor :{props.color} </p>
        </>

    )
}
export  default PersonCard ;