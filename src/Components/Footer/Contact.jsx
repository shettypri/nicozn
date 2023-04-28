

const Contact = (props) => {
    console.log(props.type);
  return (
    <>
        {/* <p className="contact-main"> */}
        <button className="contact-btn">
            <img src={props.type.icon} className="contact-icon"/>
                {props.type.info}
        </button>
    </>
  )
}

export default Contact