import React from "react";
import {FaInstagram,FaFacebook,FaLinkedin,FaTwitter, FaEnvelope, FaPhone  } from "react-icons/fa";
import '../Components/Footer.css'
function Footer(){
    return(
    <>
   
       <div className="footercol">

        {/* firtscolumn */}
       <div className="clo-1">
        <h3>Nicozn logo</h3>
       </div>

       {/* secondcolumn */}

       <div className="clo-2">
       <h3> Contact Us On</h3>
         <div>
        <FaEnvelope></FaEnvelope>   company@nicozn.com
        </div>
        <div>
        <FaPhone></FaPhone>  +919364011711
        </div>

        <div className="footer-iocn" id="social-icons">
        <h4>Follow Us On</h4>
        <a href=""> <FaFacebook FaFacebook className="icons"> </FaFacebook></a>
        <a href=""><FaInstagram className="icons"></FaInstagram> </a>
        <a href=""><FaLinkedin className="icons"></FaLinkedin></a>
        <a href=""><FaTwitter className="icons"></FaTwitter></a>
        </div>
        
      </div>
        
    </div>

    </>

      
    )
}
export default Footer;