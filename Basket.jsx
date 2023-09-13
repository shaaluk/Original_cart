import Items from "./Items";
import "../component3/Basket.css"

function Basket({ basketData, onDelete,setBasketData }) {
  //console.log(basketData);

  const total = basketData.reduce((accumulator, item) => accumulator + item.total, 0);

  console.log("basketData",basketData)
  return (
    <>
      <div className="basketData">
        <h2 className="cart">Cart</h2>
        {basketData?.map((cart, idx) => {
          return (
            <Items
              key={idx}
              {...cart}
              onDelete={() => onDelete(cart.id)}
              qty={cart.qty}
              setBasketData={setBasketData}
              basketData={basketData}
              idx={idx}
            />
          );
        })}
        <div>
          
          <h3>Total Price of Cart = ${total} </h3>
        </div>
      </div>
    </>
  );
}

export default Basket;