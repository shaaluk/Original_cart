import React, { useState, useRef} from "react";
import "../component2/Dash.css";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import {Pagination} from 'swiper/modules';
import Home from "../container/Home";



const Dash=() =>{
   const state= useState();
   
   // const [count, setCount] = useState(0);
   // //  count >= 0;
   // const incNum1=()=>{
   //    setCount(count + 1);
   // };

   // const [counter, setCount1] =useState(0);
   // const decNum1=()=>{
   //    setCount(count - 1) ;
   // }


   // const [count1, setCount2] = useState(0);
   // const incNum2=()=>{
   //    setCount2(count1 + 1);
   // };

   // const [counta, setCount3] =useState(0);
   // const decNum2=()=>{
   //    setCount2(count1 - 1) ;
   // }
   

   // const [count2, setCount4] = useState(0);
   // const incNum3=()=>{
   //    setCount4(count2 + 1);
   // };

   // const [counter2, setCount5] =useState(0);
   // const decNum3=()=>{
   //    setCount4(count2 - 1) ;
   // }

 return (
    <div>
    <Swiper
        slidesPerView={4}
        centeredSlides={true}
        spaceBetween={12}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="order"
      >

<SwiperSlide>
        <div className="order-child">
         <p><b>Vinicius Bayu</b> <span id="number">#12343</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnRed">Cancelled</button>
      </div>
</SwiperSlide>

<SwiperSlide>
<div className="order-child">
      <p><b>Chreyl Mjiayu</b> <span id="number">#18900</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnGreen">Ready to Serve</button>
      </div>

</SwiperSlide>

 <SwiperSlide>
 <div className="order-child">
      <p><b>Abdul Reddy </b> <span id="number">#128903</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnOrange">Waiting</button>
      </div>
 </SwiperSlide>

   <SwiperSlide><div className="order-child">
      <p><b>Vinicius Smile</b> <span id="number">#12908</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnRed">Cancelled</button>
       </div>
   </SwiperSlide>
        
        <SwiperSlide><div className="order-child">
      <p><b>Vinicius Smile</b> <span id="number">#12908</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnRed">Cancelled</button>

      </div>
      </SwiperSlide>
      
        <SwiperSlide> <div className="order-child">
         <p><b>Vinicius Bayu</b> <span id="number">#12343</span></p>
         <p className="item">3 items </p>
         
         <button className="btns" id="btnRed">Cancelled</button>
         </div>
      </SwiperSlide>
   
        
      </Swiper>
    

 {/* <div className="main">
       <div className="left">
    <h4>Order List</h4>
 */}

   
                   <div className="nav">
                    <a href="https://www.tajhotels.com/content/dam/luxury/hotels/Taj_Mahal_Delhi/documents/restaurants-menu/varq-menu.pdf" target="_blank" className="para">Appetizer</a>
                    <a href="https://www.hotelmilestone.com/download/Restaurentmenu.pdf" target="_blank" className="para">Main Course</a>
                    <a href="https://www.cafecoffeeday.com/cafe-menu/beverages" target="_blank" className="para">Beverages</a>
                    <a href="https://www.yumpu.com/en/document/view/24340255/dessert-menu" target="_blank" className="para">Dessert</a>

                   </div>
       
       <h2 className="naving">Menu</h2>  
       <Home/>
   
      <div className="newOne">
      

    {/* <div className="menu">
      <div className="left"> */}
     
         
     {/* <div className="child-menu">
     <div className="photo">
      
         <img src={Images} alt="not found" id="pic" />
         <p id="dollarSign"><b>$102.00</b></p>
      </div>
      <div className="material">
         <p id="headings">Kopag Benedict</p>
         <p>Lorem ipsum dolor sinj jikll mouth-watering</p>
         <p>12 available </p>
         <p> items </p>
         
         <div className="newBtn">
         <button className="btn"> <span className="sum">+</span></button><span id="numb">4</span>
         <button className="btn"><span className="sum">-</span></button>
         </div>
      </div>
     </div> */}
     
     {/*   */}
     
     {/* <div className="child-menu">
     <div className="photo">
         <img src={Images} alt="not found" id="pic" />
         <p id="dollarSign"><b>$102.00</b></p>
      </div>
      <div className="material">
         <p id="headings">Kopag Benedict</p>
         <p>Lorem ipsum dolor sinj jikll mouth-watering</p>
         <p>12 available </p>
         <p> items </p>
         <div className="newBtn">
         <button className="btn"><span className="sum">+</span></button><span id="numb">2</span>
         <button className="btn"><span className="sum">-</span></button>
         </div>
      </div>
     </div>
 */}

     {/* <div className="child-menu">

     <div className="photo">
         <img src={Images} alt="not found" id="pic" />
         <p id="dollarSign"><b>$102.00</b></p>
      </div>
      <div className="material">
         <p id="headings">Kopag Benedict</p>
         <p>Lorem ipsum dolor sinj jikll mouth-watering</p>
         <p>12 available </p>
         <p> items </p>
         <div className="newBtn">
         <button className="btn"><span className="sum">+</span></button><span id="numb"></span>
         <button className="btn"><span className="sum">-</span></button>
         </div>
      </div>
     </div> */}
     {/* <div className="child-menu">
     <div className="photo">
         <img src={Images} alt="not found" id="pic" />
         <p id="dollarSign"><b>$102.00</b></p>
      </div>
      <div className="material">
         <p id="headings">Kopag Benedict</p>
         <p>Lorem ipsum dolor sinj jikll mouth-watering</p>
         <p>12 available </p>
         <p> items </p>

         <div className="newBtn">
         <button className="btn"><span className="sum">+</span></button><span id="numb">0</span>
         <button className="btn"><span className="sum">-</span></button>
         </div>
      </div>

     </div> */}

     {/* <div className="child-menu">
     <div className="photo">
         <img src={Images} alt="not found" id="pic" />
         <p id="dollarSign"><b>$102.00</b></p>
      </div>
      <div className="material">
         <p id="headings">Kopag Benedict</p>
         <p>Lorem ipsum dolor sinj jikll mouth-watering</p>
         <p>12 available </p>
         <p> items </p>
         
         <div className="newBtn">
         <button className="btn"><span className="sum">+</span></button><span id="numb">4</span>
         <button className="btn"><span className="sum">-</span></button>
         </div>
      </div>
      </div> */}
      {/* </div> 
      </div> */}

     

     
   

    <div className="right">
        {/* <h4>Customer Information</h4>
        <div className="info">
         <input type="text" className="text" placeholder="Customer Name" /><br/>
         <input type="text" className="text" placeholder="Select Table" /><br/>
         <hr/> */}

         {/* <h4>Order Details</h4> */}
          
         {/* <div className="box">
            <div className="img">
         <img src={Images} alt="not found" id="image" />
            </div>
            <div className="content">
               <h5>Cripsy Sambhar and Dosa</h5>
               <button onClick= {incNum1} className="btn1"><p className="side" id="inc">+</p></button>
               <span>{count}</span>
               <button onClick={decNum1} className="btn1" id="decr"><p className="side" id="dec">-</p></button>
            </div>
            
         </div>
         <hr/> */}

         {/* <div className="box">
            <div className="img">
         <img src={Images} alt="not found" id="image" />
            </div>
            <div className="content">
               <h5>Cripsy Sambhar and Dosa</h5>
               <button onClick={incNum2} className="btn1"><p className="side" id="inc">+</p></button>
               <span>{count1}</span>
               <button onClick={decNum2} className="btn1" id="decr"><p className="side" id="dec">-</p></button>
            </div>
         </div>
         <hr/> */}
         
         {/* <div className="box">
            <div className="img">
         <img src={Images} alt="not found" id="image" />
            </div>
            <div className="content">
               <h5>Cripsy Sambhar and Dosa</h5>
               <button onClick= {incNum3} className="btn1"><p className="side" id="inc">+</p></button>
               <span>{count2}</span>
               <button onClick={decNum3} className="btn1" id="decr"><p className="side" id="dec">-</p></button>
            </div>
         </div>
         <hr/> */}
         
         {/* </div> */}

    </div>
    
    
  

</div>
</div>
  
 )
};

export default Dash;