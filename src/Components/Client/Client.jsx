import React from 'react'

import deswonlogo from '../../assets/client/deswonlogo.png'
import nittelogo from '../../assets/client/nittelogo.png'

const clientlogos=[
  {deswonlogo},{nittelogo}

]

export const clients=()=>{
  return(
    <>{
      clientlogos.map((val,index)=>{
        return(
          <div key={index}></div>

        )
      })
    }
    </>
    

  )
}
// const Client = () => {
//   return (
//     <div>Client</div>
//   )
// }

export default Client