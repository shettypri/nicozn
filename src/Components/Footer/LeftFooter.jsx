import logo from '../../assets/nicozn/Nicozn_icon.png'
import Map from './Map'

const LeftFooter = () => {
  return (
    <>
        <div>
            <div className='footer-div'>
                <img src={logo} className='footer-icon'/>
            </div>
            <div className='footer-map'>
                <Map />

            </div>
        </div>
    </>
  )
}

export default LeftFooter