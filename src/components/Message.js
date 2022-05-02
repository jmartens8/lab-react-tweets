
function Message(props) {
    // console.log("This is the clg of Message: ", props);
    return(
        <p className="message">
          {props.message}
        </p>
    )
}

export default Message

