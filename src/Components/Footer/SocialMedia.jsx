

const SocialMedia = (props) => {
    console.log(props);
  return (
    <>
        <button className="social-btn">
            <img src={props.media} className="social-image"/>
        </button> 
    </>
  )
}

export default SocialMedia