import './btn.css'
import React,{useState} from 'react'

function MyContent(props){
    const handleClick=()=>{
        setText("i am changed now")
    }
    const [Text,setText]=useState("i can changed")
    return(
        <div className="fatherbtn">
            <div className="b">
                <div className="text">{Text}</div>
                <button className='clickme' onClick={handleClick}>{props.title}</button>
            </div>
        </div>
    )
}

export default MyContent