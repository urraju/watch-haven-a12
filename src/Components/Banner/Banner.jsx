
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import slider1 from '../../assets/banner/banner1.png'
import slider2 from '../../assets/banner/banner2.png'
import slider3 from '../../assets/banner/banner3.jpg'
import slider4 from '../../assets/banner/banner4.png'
import slider5 from '../../assets/banner/banner5.jpg'
import slider6 from '../../assets/banner/banner6.jpg'
 
const Banner = () => {
    return(
        <div className="max-w-screen-2xl px-1 md:px-5 mx-auto">
               <Carousel infiniteLoop={Boolean} dynamicHeight={Boolean} autoPlay={Boolean}   >
                <div>
                    <img className="rounded-lg bg-cover   bg-no-repeat" src={slider1} />
                    
                </div>
                <div>
                    <img className="rounded-lg bg-cover bg-no-repeat" src={slider2} />
                    
                </div>
                <div>
                    <img className="rounded-lg bg-cover bg-no-repeat" src={slider3} />
                    
                </div>
                <div>
                    <img className="rounded-lg bg-cover bg-no-repeat" src={slider4} />
                    
                </div>
                <div className="h-[500px]">
                    <img className="rounded-lg " src={slider5} />
                    
                </div>
                <div className="">
                    <img className="rounded-lg  bg-cover bg-no-repeat" src={slider6} />
                    
                </div>
            </Carousel>
        </div>
    )}
export default Banner;