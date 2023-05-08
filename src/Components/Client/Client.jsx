import React from 'react'
import nitte from '../../assets/client/nittelogo.png'
import deswon from '../../assets/client/deswon.png'
import "../../Style/Client.css"

const Client = () => {
  const clientImages =[
    nitte,nitte,deswon 
  ]
  return (
   <>
    <div className="client-main">
      <div className="client-heading">
        <p>
          Our clients
        </p>
      </div>

      <div className="client-images">
        {
          clientImages.map( (val,index)=>{
            return(
              <img src={val} alt="img"  key={index}/> 
            )
          })
        }
      </div>
    </div>
   </>
  )
}

export default Client