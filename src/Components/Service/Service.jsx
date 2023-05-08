import '../../Style/service.css'
import Mobile from "./Mobile"
import Web from './Web'

function Servie() {
  return (
    <>
    <div className="Service-main" id='service'>
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


      
    </>
  )
}

export default Servie