
import '../../Style/portfolio.css'

import lmar1 from '../../assets/MorkUp/lamar/lamar1_iphone13blue_portrait.png'
import lmar2 from '../../assets/MorkUp/lamar/lamar2_iphone13blue_portrait.png'
import lmar3 from '../../assets/MorkUp/lamar/lamar3_iphone13blue_portrait.png'

import nigma1 from '../../assets/MorkUp/Nigma/Nigma2_iphone13blue_portrait.png'
import nigma2 from '../../assets/MorkUp/Nigma/Nigma3_iphone13blue_portrait.png'
import nigma3 from '../../assets/MorkUp/Nigma/unnamed_iphone13blue_portrait.png'

import shisha1 from '../../assets/MorkUp/shisha/shisha1.png'
import shisha2 from '../../assets/MorkUp/shisha/shisha2.png'
import shisha3 from '../../assets/MorkUp/shisha/shisha3.png'

import Zed1 from '../../assets/MorkUp/Zed/Zed1_iphone13blue_portrait.png'
import Zed2 from '../../assets/MorkUp/Zed/Zed2_iphone13blue_portrait.png'
import Zed3 from '../../assets/MorkUp/Zed/Zed3_iphone13blue_portrait.png'
import { Mobile } from './Mobile'
const portfolioImage =[
    {
        "app":[lmar1,lmar2,lmar3]
    },{
        "app":[nigma1,nigma2,nigma3]
    },{
        "app" :[shisha1,shisha2,shisha3]
    },{
        "app":[Zed1,Zed2,Zed3]
    }
]

export const Portfolio = () => {
  return (
    <>
        <h3 className='portfolio-heading'>
            Portfolio
        </h3>

        {
            portfolioImage.map((val,index) =>{
                return(
                    <div key={index}>
                        <Mobile workImage={val}/>
                    </div>
                )
            })
        }
    </>
  )
}
