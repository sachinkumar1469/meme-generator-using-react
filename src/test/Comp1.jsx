import React from "react"
import Comp2 from "./Comp2"
export default function Comp1(props){
    const [count,setCount] = React.useState(0);
    console.log("render comp1")
    function handleClick(){
        console.log("handle Event clicked in comp3");
        setCount(count+1);
    }
    return(
        <Comp2 Count={count} handleEvent={handleClick}/>
    )
}