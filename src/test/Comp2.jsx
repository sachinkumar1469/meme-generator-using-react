import React from "react"
import Comp3 from "./Comp3"
export default function Comp2(props){
    console.log("render comp2")

    return (
        <Comp3 Count={props.Count} handleEvent={props.handleEvent}/>
    )
}