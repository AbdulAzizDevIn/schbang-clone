import ReactPlayer from "react-player/vimeo";

import EastIcon from "@mui/icons-material/East";
import Banner from "./Banner";

function Home() {
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
        <ReactPlayer
          url="https://vimeo.com/865485976"
          playing={true}
          muted={false}
          width="100%"
          height="100vh"
          config={{
            vimeo: {
              playerOptions: { background: 1, autoplay: true, loop: true },
            },
          }}
        />
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
            Dive Into Our Culture <EastIcon style={{padding:"0"}}/>
          </button>
        </div>
      </div>

      <div className="banner">
            <Banner/>
      </div>
    </div>
  );
}

export default Home;
