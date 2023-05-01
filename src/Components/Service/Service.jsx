import '../../Style/service.css'

import { Model } from "./Model"

// import apple from "../../assets/service/apple.jpg"
import android from "../../assets/service/Android.jpg"
import web from "../../assets/service/web.jpg"

import andriodIcon from '../../assets/work_icon/android_icon.png'
import webIcon from '../../assets/work_icon/website_icon.png'
// import appleIcon from '../../assets/work_icon/apple_icon.png'
import lmar1 from '../../assets/MorkUp/lamar/lamar1_iphone13blue_portrait.png'
import nigma1 from '../../assets/MorkUp/Nigma/Nigma2_iphone13blue_portrait.png'
import shisha1 from '../../assets/MorkUp/shisha/shisha1.png'
import Zed1 from '../../assets/MorkUp/Zed/Zed1_iphone13blue_portrait.png'
import Mockup from "./Mockup"
import Mobile from "./Mobile"
import shishaAndroid from '../../assets/MorkUp/Shisha Android/Shisha1.png'
import Web from './Web'

function Servie() {
    
    // const techStack = [
    // {
    //   "icon":andriodIcon,
    //   "service":android,
    //   "name":"Mobile App Development",
    //   "keyPoints" :[
    //                 "Multiple OS support",
    //                 "UI Design",
    //                 "Fast and smooth working",
    //                 "Easy Mainatinence"
    //       ],
    // },
    // {
    //   "icon":webIcon,
    //   "service":web,
    //   "name":"Web App Development",
    //   "keyPoints" :[
    //                 "Responsive UI for All devices",
    //                 "Safe & Secure",
    //                 "Free Domain Hosting"
    //     ],
    // }]

    const mockupArray =[
      // lmar1,nigma1,shisha1,Zed1
      shisha1,Zed1
      
    ]
    
  return (
    <>
    <div className="Service-main">
    <div className="service-header">
    <p className="service-heading">
      Our services
    </p>
    <p className="sub-heading">
    Were providing valuable IT services to our clients for Transforming technology, empowering businesses
    </p>
    </div>

    
          <div  className="servie-container" >
              <Mobile/>
          </div>

          <div className='servie-container'>
            <Web />
          </div>
    </div>


      {/* {techStack.map( (val,index)=>{
          return(
            <div key={index} >
              <Model  tech={val} />
            </div>
          )
        })
      } */}
       {/* <Model val='../assets/service/Mobile app develpment.jpg'/> */}
      {/* <div className="mock-up-div">
        {
          mockupArray.map((mobileImage,index)=>{
            return(
              <div className="div-mockup-images" key={index}>
                  <Mockup mockImage={mobileImage}/>
              </div>
            )
          })
        }
      </div> */}
    </>
  )
}

export default Servie