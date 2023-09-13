import React from "react";
import Logo from "../images/logonew.jpg";
import Img2 from "../images/profilr.png";
import { Link} from "react-router-dom";
import {TbHistory} from "react-icons/tb";
import {MdDashboard} from "react-icons/md";
import {FaMoneyBills} from "react-icons/fa6";
import {BsCardList} from "react-icons/bs";
import "../component/Menu.css";
import {BiSolidBellRing} from "react-icons/bi";
// import {PiHamburgerBold} from "react-icons/pi";

const Menu=()=>{


  return(
    <>
    <nav className="navbar">
        <div>    
   <a href="./"><img src={Logo} alt="not found" id="img" url="./home"/></a>
        </div>
     
    

    <div className="header">
        <ul id="head">
          <Link style={{textDecoration:"none"}} to="/"> <li style={{color:"grey"}} className="menu1"><a><MdDashboard id="icon1"/>Dashboard</a></li></Link> 
          <Link style={{textDecoration:"none"}} to="/order"> <li style={{color:"grey"}} className="menu1"><a><BsCardList id="icon2"/>Order List</a></li></Link>
          <Link style={{textDecoration:"none"}} to="/history"> <li style={{color:"grey"}} className="menu1" id="menu3"><a><TbHistory id="icon3"/>History</a></li></Link> 
          <Link style={{textDecoration:"none"}} to="/bills"> <li style={{color:"grey"}} className="menu1" id="menu4"><a><FaMoneyBills id="icon4"/>Bills</a></li></Link> 
          
        </ul>
        {/* <Link style={{textDecoration:"none"}} to="/"> <li style={{color:"grey"}}><GiHamburgerMenu id="iconHam"/></li></Link> */}
    </div>
      

<div id="sideImg">
{/* <img src={Img1} alt="not found" id="img" /> */}
<BiSolidBellRing id="bellIcon"></BiSolidBellRing>

<img src={Img2} alt="not found" id="img" />
</div>
    </nav>
  

  </>   
  )
}

export default Menu;