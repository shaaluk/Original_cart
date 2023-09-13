
import { useState } from "react";
import Basket from "../component3/Basket";
import Main from "../component3/Main";
import products from "../component3/Pro";

function Home(){
    const [basketData,setBasketData]=useState([]);

    const deleteItem= (itemId) =>{
      const updatedBasketData = basketData.filter((item) => item.id !== itemId);
    setBasketData(updatedBasketData);
    }
    
  //  const totalPrice= products.reduce((a,c)=>a+c.price *c.qty, 0);
  //  console.log(totalPrice);
  return (
  <div>
    
   
   <div className="row">
    <Main products={products} setBasketData={setBasketData} basketData={basketData}/>
    <Basket basketData={basketData} onDelete={deleteItem} setBasketData={setBasketData}/>
     
   
    </div>

   </div>
  );
}

export default Home;