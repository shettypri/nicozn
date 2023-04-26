
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
            instagram,facebook,linkedin,twitter
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
                            <p key={index}>
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