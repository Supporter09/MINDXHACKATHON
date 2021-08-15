import React from 'react'
import './MenuBtn.css'
export default function Navbar(props) {
    var containerClasses=["container"];
    if (!props.state){
      containerClasses.push("close")
    }
    return (
        <span className={containerClasses.join(' ')}>
        <div className={"bar1"}></div>
        <div className={"bar2"}></div>
        <div className={"bar3"}></div>
        </span>
    )
}
