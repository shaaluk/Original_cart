import React from "react";
import "./Product.css"


function Product(props) {
    const { product, setBasketData, basketData } = props;

        let newProduct = product;
      newProduct.total = product?.price * product?.qty;
               
    return (
        
            <div className="left">

                <div className="child-menu">

                    <div className="photo">
                        <img src={product.image} alt="not found" id="pic" />
                        <p id="dollarSign"><b>${product.price}</b></p>
                    </div>

                    <div className="material">
                        <p id="headings">{product.name}</p>
                        <p>{product.content}</p>
                        <p className="Avail"> Available </p>
                    
                    <div className="addItem">
                        <button className="cartBtn" onClick={() => {
                            let uniqueData = basketData?.find((data) => data?.id === product?.id)
                            console.log("basketData", uniqueData)
                            if (uniqueData === null || uniqueData === undefined) {
                                setBasketData((data) => [...data, product]);
                            }
                            else {
                                window.alert("Item is already added");
                            }
                        }}>Add to Cart</button>

                   </div>    
                    </div>
                    
                </div>
            </div>
        


    );

}
export default Product;
