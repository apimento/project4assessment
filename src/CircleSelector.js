import React from 'react'

export default function CircleSelector(props) {
  return (
    <div className="CircleSelector">
        <button className={props.button === 1 ? "selected" : ""} onClick={() => props.handleSelect(1)}>{props.button === 1 ? "CIRCLE 1 SELECTED" : "SELECT CIRCLE 1"}</button>
        <button className={props.button === 2 ? "selected" : ""} onClick={() => props.handleSelect(2)}>{props.button === 2 ? "CIRCLE 2 SELECTED" : "SELECT CIRCLE 2"}</button> 
        <button className={props.button === 3 ? "selected" : ""} onClick={() => props.handleSelect(3)}>{props.button === 3 ? "CIRCLE 3 SELECTED" : "SELECT CIRCLE 3"}</button>
        <button className={props.button === 4 ? "selected" : ""} onClick={() => props.handleSelect(4)}>{props.button === 4 ? "CIRCLE 4 SELECTED" : "SELECT CIRCLE 4"}</button>
    </div>
  )
}