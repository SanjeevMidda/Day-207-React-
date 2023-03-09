import React from "react";

export default function Button(){

function clicked(){
    alert("You clicked me!");
}

    return(
        <button onClick = {clicked}>Click Me</button>
    )
}