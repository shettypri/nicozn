/* eslint-disable react/prop-types */
import '../../Style/MObile.css'
export const Mobile = (props) => {
  return (
    <>
      <div className="portfolio-mobile-div">
          <div className="mockup-images">
            {
              props.workImage.app.map((views,index)=>{
                return(
                  <span key={index}>
                    <img src={views} className="portfolio-mockup"/>
                  </span>
                )
              })
            }
          </div>
          <div className="portfolio-app-details">
              <div className="portfolio-app-name">
              <a href={props.workImage.playstore} target='_blank' rel='noreferrer'>
                  {props.workImage.name}
                </a>
              </div>
      </div>
    </div>
    </>
  )
}
