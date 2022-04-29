import React from 'react'

export default function Boxes(props) {
  return (
    <div className="Circles">
        <div className={props.button === 1 ? "selected" : ""}>1</div>
        <div className={props.button === 2 ? "selected" : ""}>2</div> 
        <div className={props.button === 3 ? "selected" : ""}>3</div>
        <div className={props.button === 4 ? "selected" : ""}>4</div>
    </div>
  )
}

