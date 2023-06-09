import video from '../../assets/nicozn/pexel3.mp4'
import logo1 from '../../assets/nicozn/Nicozn_icon_n.png'
import logo2 from '../../assets/nicozn/Nicozn_name_icon.png'
import '../../Style/Home.css'

export const Home = () => {

    const companyIcon = [logo1,logo2]
  return (
    <>
        <div className='bgcontainer ' id='home'>
            <div className='home-video'>
                <video src={video} autoPlay loop muted/>
            </div>
            <div className='container'>
                <div className='logo'>
                    {companyIcon.map((val,index)=>{
                        return(
                            <img src={val} key={index}  className='icon-nicozn'/>
                        )
                    })}
                </div>

                <div className='home-btn-div'>
                    <button className='home-btn'>
                        Let us Talk
                    </button>
                </div>
            </div>
        </div>
    </>
  )
}
