import React from "react";
import "./Order.css";
import Product from "../component3/Product";

const Order=() =>{
    return(
    <>
   
   
    <h1 >Order</h1>
    <h4 className="orderAl">Customer Information</h4>
        <div className="info">
            <label>Customer Name:</label>
         <input type="text" className="text" placeholder="Customer Name" /><br/>
            <label>Table Number:</label>
         <input type="number" className="text" placeholder="Select Table" /><br/>

         <div className="selecting">
             <label>Current Status:</label>
             
             <select >
                <option>Pending</option>
                <option>Ready</option>
                <option>Cancelled</option>
             </select>
             </div>
         </div>
    
    </>
    );
}

export default Order;