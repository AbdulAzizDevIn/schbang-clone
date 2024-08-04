

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
function Banner(){
    const bannerData=[{
        id:1,
        url:"https://i.ibb.co/jJWLrKw/655daa2654a0826a2891bd40-renewables-WEBSITE-CS-01.png"
    },
    {
        id:2,
        url:"https://i.ibb.co/P16kjs9/655da88f5ebcb0f7d393b360-madmix-WEBSITE-CS-01.png"
    },{
        id:3,
        url:"https://i.ibb.co/Tc8mvnv/655da6aed14f9d6e2cd82f61-coffeeverse-WEBSITE-CS-01.png"
    },{
        id:4,
        url:"https://i.ibb.co/VYFgFXb/655da74ca1a394efa1d6fbcf-centerfruit-WEBSITE-CS-01.png"
    },{
        id:5,
        url:"https://i.ibb.co/sb32kVF/655da828b0404cc1bd2d3476-mia-by-tanshiq-WEBSITE-CS-01.png"
    }

]
    return(
        <div style={{marginTop:110,cursor:"pointer"}}>
            <Carousel 
            responsive={responsive} 
            swipeable={false}
            draggable={false}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            keyBoardControl={true}
            slidesToSlide={1}
            pauseOnHover={true}
            
            >
              {
                bannerData.map(data =>(
                  <img key={data.id} style={{width:"100%"}} src={data.url} alt="banner" />
                ))
              } 
            </Carousel>
        </div>
    )
}

export default Banner;