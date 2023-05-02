

const Contact = (props) => {
    console.log(props.type);
  return (
    <>
        <a className="contact-btn" href="#" target="_blank" >
            <img src={props.type.icon} className="contact-icon"/>
                <p>
                  {props.type.info}
                </p>
        </a>
    </>
  )
}

export default Contact