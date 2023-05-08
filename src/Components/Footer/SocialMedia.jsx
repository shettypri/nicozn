

const SocialMedia = (props) => {
    console.log(props);
  return (
    <>
        <a className="social-btn" 
        href={props.media.link}
        target="_blank" rel="noreferrer">
            <img src={props.media.name} className="social-image"/>
        </a> 
    </>
  )
}

export default SocialMedia