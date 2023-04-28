/* eslint-disable react/prop-types */
// import { useState ,useEffect} from "react";
import '../../Style/MObile.css'
export const Mobile = (props) => {
   
    
    // const imageChange = ()=>{
    //     setWork(props.workImage.app[1])
        
    // }
    // const imageOld =()=>{
    //     setWork(props.workImage.app[0])
    // }
    
    // const [work, setWork] = useState(props.workImage.app[0])
  return (
    <>
    <div className="portfolio-mobile">
      {
        props.workImage.app.map((views,index)=>{
          return(
            <img src={views} 
            key={index}  className="portfolio-mockup"/>
          
          )
        })
      }
    </div>
        {/* <img src={work}  
        className="portfolio-mockup"
        onMouseOver={imageChange}
        onMouseOut={imageOld}
        /> */}
    </>
    
    
  )
}
