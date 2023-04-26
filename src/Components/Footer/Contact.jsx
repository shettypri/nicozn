

const Contact = (props) => {
    console.log(props.type);
  return (
    <>
        <div className="contact-main">
            <img src={props.type.icon} className="contact-icon"/>
                {props.type.info}
        </div>
    </>
  )
}

export default Contact