
import video from "../assets/pexel3.mp4";
import image from "../assets/logo.png";
import '../Components/background.css';

 

function background(){
    return(
       <div className="bgcontainer">

        <div className="overlay">

            <video src={video} autoPlay loop muted></video>

            <div className="container">
            <div className="logo">
                <img src={image} className="icon-nicozn"/>
                <img src={image} className="icon-nicozn"/>
            </div>
                
            <button>let Us Have a Talk</button>
            </div>
            

        </div>
       </div>

     
    );
}

export default background;