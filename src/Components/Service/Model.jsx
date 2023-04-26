/* eslint-disable react/prop-types */
import '../../Style/service.css'


export const Model = (props) => {
  // console.log(props.val);
  return (
    <>
        <div className='tech-main'>
          <div className='tech'>
            <div>
            <img src={props.tech.icon} className='tech-icon'/>
            <img src={props.tech.service} className='tech-service'/>
                <section className='tech-heading'>
              {props.tech.name}
            </section>
            </div>
          
              <ul>
              {
                props.tech.keyPoints.map((val,index)=>{
                  return(
                    <li key={index} className='tech-text'>
                        {val}
                    </li>
                  )
              })
            }
            
          </ul>
        </div>
        </div>
    </>
  )
}
