const imageUrl =
  'https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?dpr=2&h=480&w=640';
const productPrice = 10.99;

export const Product = () => {
    return (
     <div>
            <img src={imageUrl} alt="Tacos With Lime" width="640" />
    <h1>Hello world</h1>
            
    <h2>Tacos With Lime</h2>
    <p>Price: {productPrice}$</p>
    <button type="button">Add to cart</button>
  </div>   
   ) 
}
  

