
import '../../Style/portfolio.css'

import lmar1 from '../../assets/MorkUp/lamar/lamar1_iphone13blue_portrait.png'
import lmar2 from '../../assets/MorkUp/lamar/lamar2_iphone13blue_portrait.png'

import nigma1 from '../../assets/MorkUp/Nigma/Nigma2_iphone13blue_portrait.png'
import nigma2 from '../../assets/MorkUp/Nigma/Nigma3_iphone13blue_portrait.png'

import shisha1 from '../../assets/MorkUp/shisha/shisha1.png'
import shisha2 from '../../assets/MorkUp/shisha/shisha2.png'

import Zed1 from '../../assets/MorkUp/Zed/Zed1_iphone13blue_portrait.png'
import Zed2 from '../../assets/MorkUp/Zed/Zed2_iphone13blue_portrait.png'

import { Mobile } from './Mobile'
const portfolioImage =[
    {
        "app":[shisha1,shisha2],
        "name": " Shisha Food Hub",
        "playstore":"https://play.google.com/store/apps/details?id=com.alnaaf.shisha"
    },
    {
        "app":[nigma1,nigma2],
        "name":"Nigma",
        "playstore":"https://play.google.com/store/apps/details?id=com.nicozn.nigma"
    },
    {
        "app":[Zed1,Zed2],
        "name":"Zed",
        "playstore":"https://play.google.com/store/apps/details?id=com.zed.userapp"
    },
    {
        "app":[lmar1,lmar2],
        "name":"Lamar",
        "playstore":"https://play.google.com/store/apps/details?id=com.lamar.app"
    }
]
export const Portfolio = () => {
    return (
        <>
            <div className="portfolio-main" id='portfolio'>
                <div className='portfolio-heading'>
                    <p>
                        Portfolio
                    </p>
                </div>

            <div className='port-div'>
            <div className="portfolio-content">
                {
                    portfolioImage.map((val,index) =>{
                        return(
                            <section key={index} className='portfolio-projects'>
                                <Mobile workImage={val}/>
                            </section>
                        )
                    })
                }
            </div>
            </div>
            </div>
        </>
    )
}
