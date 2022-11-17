import React from "react";
export default function Comp3(props){
    console.log("render comp3")

    return(
        <h1 onClick={props.handleEvent}>Hello Comp3 {props.Count}</h1>
    )
}