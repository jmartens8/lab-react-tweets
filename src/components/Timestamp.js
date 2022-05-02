
function Timestamp(props) {
    console.log("This is the clg of Timestamp: ", props);
    return(
        <span className="timestamp">{props.time}</span>
    )
}

export default Timestamp

