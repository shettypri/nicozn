/* eslint-disable no-unused-vars */
import React from 'react'
import webDev from '../../assets/MorkUp/Web/webdev.png'

const Web = () => {
    const webPoints = [
        {
            "heading":"Responsive UI for Desktop & Mobile devices",
            "sub":"We provide websites with designs that run based on both Desktop and Mobile screens."
        },
        {
            "heading":"Safe and Secure",
            "sub":"We develop websites using frameworks that ensure safty and security for clients and users."
        },
        {
            "heading":"Free Domain Hosting",
            "sub":"We provide website hosting as compant.web.app without extra domain charges."
        },
    ]
  return (
    <>
       <div className='web-dev-container'>
        <di className='web-heading'>
            <p className="heading">
            Web App Development
            </p>

            <p className="mobile-sub-heading">
            We provide Web Apps with designs that are good, attractive & responsive.  
          </p>
        

        <div className='mobile-points'>
        <ul>
        {
            webPoints.map((val,index) => {
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
      </di>

        <div className='web-dev-div'>
            <img src={webDev} />
        </div>
       </div>
    </>
  )
}

export default Web