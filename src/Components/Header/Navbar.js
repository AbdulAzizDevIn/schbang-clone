import EastIcon from "@mui/icons-material/East";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img
            alt="logo"
            src="https://cdn.prod.website-files.com/64081b3f2fda69c80b5566e5/64804f295294d986354397af_logo%20animation1%20updated1.gif"
          ></img>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent:"space-between",
            alignItems: "center",
            fontSize:"14px",
            minWidth: "900px",
          }}
        >
          <div className="btn1">Work</div>
          <div className="btn2">Solutions <KeyboardArrowDownIcon/></div>
          <div className="btn3">About <KeyboardArrowDownIcon/></div>
          <div className="btn4">Resources <KeyboardArrowDownIcon/></div>
          <div className="btn5">Careers</div>
          <div>
            <button className="btn6">
              Contact Us <EastIcon />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
