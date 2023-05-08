import '../../Style/Footer.css'
import LeftFooter from './LeftFooter'
import RightFooter from './RightFooter'
const Footer = () => {
  return (
    <>
      <div className="footer-main" id="contact">
        <LeftFooter />
        <RightFooter />
      </div>
    </>
  )
}

export default Footer