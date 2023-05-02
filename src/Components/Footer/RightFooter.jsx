
import emailIcon from "../../assets/icons/mail.png"
import phone from "../../assets/icons/Phone.png"
import Contact from "./Contact"

import instagram from '../../assets/Social_Media/Insta.png'
import facebook from '../../assets/Social_Media/Facebook.png'
import linkedin from '../../assets/Social_Media/linkedin.png'
import twitter from '../../assets/Social_Media/twitter.png'
import SocialMedia from "./SocialMedia"
const RightFooter = () => {
    const contactDetails=[
        {
            "icon" : emailIcon,
            "info" : "company@nicozn.com"
        },
        {
            "icon" : phone,
            "info" : "919364011711"
        }
    ]

    const social_media =[
            {
                "name":instagram,
                "link" :"https://instagram.com/nicozn_tech?igshid=YmMyMTA2M2Y="  
            },
            {
                "name":facebook,
                "link" :"https://www.facebook.com/NicoznLLP?mibextid=ZbWKwL"
            },
            {
                "name":linkedin,
                "link" :"https://www.linkedin.com/company/nicozn/"
                
            },
            {
                "name":twitter,
                "link" :"https://twitter.com/nicozn_tech?t=9U34a1cd9fQpgKYyUNmX2w&s=08"
                
            }
    ]
  return (
    <>
        <div className="contact-main">
            <p className="contact-heading">
                Contact-us
            </p>
            <div className="contact-type">
                {
                    contactDetails.map((val,index) =>{
                        return(
                            <>
                                <p key={index} >
                                    <Contact type={val} />
                                </p>
                            </>
                        )
                    })
                }
            </div>
            <div className="social-media">
                    {
                        social_media.map((media,index) =>{
                            return(
                                <div key={index} >
                                    <SocialMedia media={media} />
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    </>
  )
}

export default RightFooter