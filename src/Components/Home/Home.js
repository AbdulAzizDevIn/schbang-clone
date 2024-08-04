import EastIcon from "@mui/icons-material/East";
import Banner from "./Banner";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import Worldclock from "./Worldclock";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5
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
const smallBannerData=[{
  id:1,
  url:"https://i.ibb.co/nR52Jv7/Screenshot-2024-08-04-173521.png"
},
{
  id:2,
  url:"https://i.ibb.co/nRL7q8y/Screenshot-2024-08-04-173539.png"
},{
  id:3,
  url:"https://i.ibb.co/DMrYSQv/Screenshot-2024-08-04-173606.png"
},{
  id:4,
  url:"https://i.ibb.co/k9zPCXp/Screenshot-2024-08-04-173622.png"
},{
  id:5,
  url:"https://i.ibb.co/4dhcVSn/Screenshot-2024-08-04-173644.png"
},{
  id:6,
  url:"https://i.ibb.co/Z6mDB4m/Screenshot-2024-08-04-173712.png"
},{
  id:7,
  url:"https://i.ibb.co/zV4Xz35/Screenshot-2024-08-04-173736.png"
}

]

const newsItems = [
  {
    title: 'Schbang appoints Jitto George as Executive Vice President - Media Solutions',
    time: '3 Minutes',
    image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/65856cccf4acae46f5371507_WhatsApp-Image-2023-12-22-at-16.29.08-p-500.webp' 
  },
  {
    title: 'Britannia forays into the Metaverse with the launch of ‘Britannia Coffeeverse’',
    time: '2.5 Minutes',
    image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/6557247d770dca61e0c887be_Untitled%20design%20(9)-p-500.png'
  },
  {
    title: 'Kotak811 shares a reminder about ROI on self-care',
    time: '2 Minutes',
    image: 'https://cdn.prod.website-files.com/64117da520cdfb7ab62144a5/655721aca38b966c46b74a5c_Untitled%20design%20(8)-p-500.png'
  }
];

function Home() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="home">
      <div className="headline">
        <div
          style={{
            fontSize: "60px",
            fontWeight: "bold",
            paddingLeft: "5%",
            paddingTop: "78px",
          }}
        >
          Your Creative, Media & Technology Transformation <br />
          Partner
        </div>
        <p
          style={{ 
            fontSize: "20px",
            paddingLeft: "5%",
            margin: "40px 0 20px 0",
          }}
        >
          We're a team of 1000+ Specialists delivering award-winning work for
          300+ brands worldwide, 8 years and counting!
        </p>
      </div>

      <div className="moving-text">
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
        <div>IT'S TIME TO CREATE A SCHBANG</div>
        <img
          src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/649531f111407d44a30fb06a_download1.png"
          alt="loading"
          loading="lazy"
        />
      </div>

      <div className="bg-video">
        <iframe
          src="https://player.vimeo.com/video/865485976?background=2&autoplay=1&muted=1&loop=1"
          frameborder="0"
        ></iframe>
      </div>
      <div className="heading-container">
        <div className="heading">
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/646c6bb7c939a9d0173be0eb_bg%20pattern-01.png"
            alt=""
          />
          <h2>What defines us</h2>
          <EastIcon
            style={{
              fontSize: "380px ",
            }}
          />
        </div>
        <div className="sub-heading">
          <p>
            We’re brand builders at heart, creators by design, tech enthusiasts
            in <span> practice, and integrated at our core.</span>
          </p>
          <p>
            We're on a mission to take the very best of Indian creative talent
            to the world. Driven by a ferocious hunger to create tangible impact
            for your business, we work with in-house specialists, industry
            partners and technology leaders to push the boundaries of creativity
            and put your brand on the global stage.
          </p>
          <button>
            Dive Into Our Culture <EastIcon style={{ padding: "0" }} />
          </button>
        </div>
      </div>

      <div className="banner">
        <Banner />
      </div>

      <div className="section-solution">
        <div className="solution">
          <div className="sol-item sol-item-brand">
            <div className="solution-title">
              Brand
              <br /> Solution
            </div>
            <div className="content_para">
              <p>
                We provide customised solutions to meet partner needs. We
                understand the objectives and requirements to develop strategies
                &amp; create holistic consumer experiences and fully serve
                clients.
              </p>
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.png"
                loading="lazy"
                alt="Brand Solution"
              />
            </div>
          </div>
        </div>
        <div className="solution">
          <div className="sol-item sol-item-tech">
            <div className="solution-title">
              Tech
              <br /> Solution
            </div>
            <div className="content_para">
              <p>
                We optimise People, Processes and Technology. Map processes,
                align to objectives and maximise team efficiency with tech to
                improve the customer experience.
              </p>
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.png"
                loading="lazy"
                alt="Tech Solution"
              />
            </div>
          </div>
        </div>
        <div className="solution">
          <div className="sol-item sol-item-media">
            <div className="solution-title">
              Media
              <br /> Solution
            </div>
            <div className="content_para">
              <p>
                Drive results through strategic, audience-aligned ad placement
                across channels using the right messaging at the optimal time.
              </p>
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.png"
                loading="lazy"
                alt="Media Solution"
              />
            </div>
          </div>
        </div>
        <div className="solution ">
          <div className="sol-item sol-item-research">
            <div className="solution-title">
              Research
              <br /> Solution
            </div>
            <div className="content_para">
              <p>
                We provide specialised market research for businesses using
                qualitative and quantitative methods. We integrate market
                research with our services to connect research, strategy and
                implementation.
              </p>
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.png"
                loading="lazy"
                alt="Research Solution"
              />
            </div>
          </div>
        </div>
        <div className="solution">
          <div className="sol-item sol-item-flim">
            <div className="solution-title">Film &amp; Photography</div>
            <div className="content_para">
              <p>
                Schbang Motion Pictures, Global Content Hub and Schbang 808
                produce and launch high-quality ad films, rapid video content
                and branded audio.
              </p>
              <img
                src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64d8ef1c098a351cea42b97b_screenshot-www.schbang.com-2023.08.13-20_21_34-removebg-preview.png"
                loading="lazy"
                alt="Film & Photography"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="brands">
        <div className="brands1">
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a43f9be7214cf9de3678_Xiaomi_logo_(2021-).svg-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a49c3f6ba1683142721c_rio%20sanitary%20pads-02%20-%20Archana%20Goyal-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a4c4041bb767ea0590c6_jio-logo%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5033f6ba168314307c3_Logo%202-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a52e7e03b0faa8614a73_glow_and_lovely_logo%20-%20Prajna%20Anchan-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5430076accc9932ee19_final%20logo%20Short%20story%20c2c-01%20-%20Tanaya%20Shirke%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a570dac066179044655b_fevicreate_logo_png-01%20-%20Prajna%20Anchan%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a57ea93d52282ec5f982_Cordelia-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5936194e83c48e76c9b_date%20crown%20logo-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5aaa1ed9ddfeb688754_Dhampur%20Logo%20Asset%203%402x%20-%20Alankrit%20Johri%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6481c0de324e32f8eb2ef61d_mia-01-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a5ded3b6b46a21c8201e_Fixit-Logo%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64817bf4ebfcd0967249b19c_prime-video-logo-prime-video-icon-transparent-logo-free-png-p-500.webp"
            alt=""
          />
        </div>
        <div className="brands2">
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a654eb26aa9e17e57f7b_White%20bg%20logo-01%20-%20Aniket%20Sharma%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6767bca0de38568fef7_Tata%20Communications%20Logo-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a688dc557cbd3f8764d2_PayTM-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6b985072710b1ea7df9_Hershey%E2%80%99s%20(1)-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6cc6bdce5668caed640_JnJ%20India%20Logo%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6ddd221531d22d33d6c_Dominos_Logo_png%20(1)-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a6f2a558edee2439a56e_Cipla%20logo-01.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a7032718a7b0dd310388_by-Garnier-Naturally-black%20(3)%20-%20Copy%20-%20Richa%20Nadkarni%20(1)-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a7116b25b30b3bea9763_Bblunt_Logo_png%20(1)-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a71f7e03b0faa862befb_Bodycraft_Logo_png-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a72e66f54a74b2a0d218_Britannia_Industries_logo-p-500.webp"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a73c7e31051a480a655e_B_BW-Logo-p-500.png"
            alt=""
          />
          <img
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/6470a7508f24096486ef7faf_AL-logo-Blue-p-500.webp"
            alt=""
          />
        </div>
      </div>

      
      <div className="trending">
        <div className="trd-list">
          <div
            style={{
              fontSize: "30px",
              fontWeight: "bold",
              paddingBottom: "20px",
            }}
          >
            Trending now
          </div>
          {newsItems.map((item, index) => (
            <div
              key={index}
              className="news"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button>Press Release</button>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  padding: "30px 0",
                  borderBottom: "1px solid black",
                }}
              >
                <p style={{ fontWeight: "bold" }}>{item.title}</p>
                <p style={{ fontSize: "14px" }}>{item.time}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="trd-prev">
          {hoveredIndex !== null && (
            <img
              src={newsItems[hoveredIndex].image}
              alt="Trending"
              style={{ width: '100%', height: 'auto' }} // Adjust styles as needed
            />
          )}
        </div>
      </div>

      <div style={{marginTop:110,cursor:"pointer",padding:"5%"}}>
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
                smallBannerData.map(data =>(
                  <img key={data.id} style={{width:"100%"}} src={data.url} alt="banner" />
                ))
              } 
            </Carousel>
        </div>
              
        <div>
          <Worldclock/>
        </div>
    </div>
  );
}

export default Home;
