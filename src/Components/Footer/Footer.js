import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import FacebookIcon from "@mui/icons-material/Facebook";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-img">
        <img
        src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/641d89ea977db9180d1e206a_Schbang%20white1.png"
        alt=""
      />
      </div>
      
      <div>
        <div
          style={{
            color: "white",
            cursor:"pointer" 
          }}
        >
          <LinkedInIcon style={{ fontSize: "50px", paddingRight: "10px" }} />
          <InstagramIcon style={{ fontSize: "50px", paddingRight: "10px" }} />
          <YouTubeIcon style={{ fontSize: "50px", paddingRight: "10px" }} />
          <FacebookIcon style={{ fontSize: "50px", paddingRight: "10px" }} />
        </div>
        <div className="about">
          <p>About</p>
          <p>Contact</p>
          <p>Case Studies</p>
          <p>Blog</p>
          <p>Privacy</p>
        </div>
        <div className="aziz">
          <p>Created by Abdul Aziz</p>
  
          <p>All Right Reserved, All Wrong Reversed.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
