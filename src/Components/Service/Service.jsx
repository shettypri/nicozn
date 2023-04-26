// import React from 'react'

import { Model } from "./Model"

// import apple from "../../assets/service/apple.jpg"
import android from "../../assets/service/Android.jpg"
import web from "../../assets/service/web.jpg"

import andriodIcon from '../../assets/work_icon/android_icon.png'
import webIcon from '../../assets/work_icon/website_icon.png'
// import appleIcon from '../../assets/work_icon/apple_icon.png'

function Servie() {
    
    const techStack = [
    //   {
    //   "icon" : appleIcon,
    //   "service":apple
    // },
    {
      "icon":andriodIcon,
      "service":android,
      "name":"Mobile App Development",
      "keyPoints" :[
                    "Multiple OS support",
                    "UI Design",
                    "Fast and smooth working",
                    "Easy Mainatinence"
          ],
    },
    {
      "icon":webIcon,
      "service":web,
      "name":"Web App Development",
      "keyPoints" :[
                    "Responsive UI for All devices",
                    "Safe & Secure",
                    "Free Domain Hosting"
        ],
    }]
    
  return (
    <>
    <p className="service-heading service-text">
      Our services
    </p>
    <p className="sub-heading service-text">
    Were providing valuable IT services to our clients for Transforming technology, empowering businesses
    </p>
      {techStack.map( (val,index)=>{
        console.log(val);
        console.log("hello");
        console.log(index);
          return(
            <div key={index} >
              <Model  tech={val} />
            </div>
          )
        })
      }
       {/* <Model val='../assets/service/Mobile app develpment.jpg'/> */}
    </>
  )
}

export default Servie