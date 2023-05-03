import React from 'react'
import shisha1 from '../../assets/MorkUp/shisha/shisha1.png'
import Zed1 from '../../assets/MorkUp/Zed/Zed1_iphone13blue_portrait.png'
const Mobile = (props) => {

  const mockupArray =[
    shisha1,Zed1
  ]

  const mobilePoints =[
    {
      "heading":"Multiple OS support",
      "sub":"We develop apps for Android, Harmony & IOS"
  },
    {
      "heading":"Native and cross-platform solutions ",
      "sub":"We develop  robust apps for multi-platform solutions for Mobile (iOS, Android), Web, Desktop and other devices."
    },
    { 
    "heading":"UI Design",
      "sub":"We provide apps with design that is responsive and use attractive."
  },
    {"heading":"Fast and smooth working",
    "sub":"We provide apps which work smoothly and runs fast."
  },
    {"heading":"Easy Maintenance",
    "sub":"We provide apps that are easy to maintain wwith future servicing facillities."
  }
]

  return (
    <>
    <div className='mobile-div' >
      {mockupArray.map( (val,index)=>{
          return(
            <img src={val} key={index}/>
            ) 
          })
      }
      </div>
      <div className='mobile-content'>
      <div className="mobile-heading">
          <p className="heading">
            Mobile App Development
          </p>
          <p className="mobile-sub-heading">
          We provide mobile apps that have the best possible user interface design and smooth working. 
          </p>
      </div>
      <div className='mobile-points'>
        <ul>
        {
            mobilePoints.map((val,index) => {
              return(
                <div className="mobile-points" key={index}>
                <li className='list-points'>
                  <p>
                    {val.heading}
                    </p>
                  <section>
                    {val.sub}
                  </section>
                </li>
              </div>
              )
            })
        }
        </ul>
      </div>
      </div>
        
    </>
  )
}

export default Mobile