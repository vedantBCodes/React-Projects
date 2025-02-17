import '../App.css'
const Cart = ({
  cartAllProduct,
  SetCartAllProduct
}) => {
    const handleDeleteItem = (id) => {
        const filteredItem = cartAllProduct.filter((item) => item?.id !== id);
        SetCartAllProduct(filteredItem);
      };
      const increment = (id) => {
        SetCartAllProduct((prevCart) =>
          prevCart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
          )
        );
      };
      const decrement = (id) => {
        SetCartAllProduct((prevCart) =>
          prevCart.map((item) =>
            item.id === id && item.count > 1
              ? { ...item, count: item.count - 1 }
              : item
          )
        );
      };
  return (
    <div>
      {cartAllProduct.length == 0 && (
        <div style={{ fontSize: "40px", textAlign: "center" }}>
          No Products Availabe in Cart
        </div>
      )}
      {cartAllProduct.map((product, index) => {
        return (
          <div className="cartContainer" key={index}>
            <div>
              <img src={product.img} alt="" />
            </div>
            <div className="cartBrandAndItem">
              <span>{product.model}</span>
              <span id="prize">₹ {product.price}</span>
              <span>{product.space}</span>
              <span>{product.camera}</span>
              <div id='itemCount'> 
                <button onClick={()=>decrement(product.id)}>-</button>
                {product.count}
                <button onClick={()=>increment(product.id)}>+</button>
            </div>
            </div>
            <div style={{fontSize:'25px'}}>
              <span>{product.description}</span>
            </div>
            <div onClick={() => handleDeleteItem(product.id)}>
            <i className="fa-solid fa-trash text-danger pointer" style={{color:'red'}}></i>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
