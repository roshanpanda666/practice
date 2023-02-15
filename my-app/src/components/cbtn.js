import './btn.css'
function MyContent(props){
    return(
        <div className="fatherbtn">
            <div className="b">
                <button className='clickme'>{props.title}</button>
            </div>
        </div>
    )
}

export default MyContent