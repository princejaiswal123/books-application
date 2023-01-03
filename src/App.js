import "./App.css";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import CartList from "./components/CartList";
import { useState } from "react";

function App() {
  const [product, setProduct] = useState([
    {
      id: 1,
      url:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
      name: "OSGi",
      seller: "AMZ Seller Ghz"
    },
    {
      id: 2,
      url:
        "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
      name: "Developer Guide",
      seller: "Watch Ltd Siyana"
    },
    {
      id: 3,
      url: "https://m.media-amazon.com/images/I/71PPPEfupGL.jpg",
      name: "Computer Awareness",
      seller: "Delhi Laptops"
    },
    {
      id: 4,
      url: "https://m.media-amazon.com/images/I/51wWwym5yeL.jpg",
      name: "The Great Quize Book",
      seller: "Camron LTD"
    },
    {
      id: 5,
      url: "https://m.media-amazon.com/images/I/814xZ0XB9aL.jpg",
      name: "Quize Book",
      seller: "Watch Ltd"
    },
    {
      id: 6,
      url: "https://sahitya.b-cdn.net/wp-content/uploads/2021/07/2327-2.jpg",
      name: "Hindi",
      seller: "Watch Ltd"
    },
    {
      id: 7,
      url: "https://m.media-amazon.com/images/I/91tRuaZWnrL.jpg",
      name: "Sample Papers",
      seller: "Watch Ltd"
    },
    {
      id: 8,
      url: "https://m.media-amazon.com/images/I/81DDgwNlkHL.jpg",
      name: "Accountancy",
      seller: "Watch Ltd"
    },
    {
      id: 9,
      url:
        "https://5.imimg.com/data5/JG/CE/MY-35641433/nursery-english-book-500x500.jpg",
      name: "Grammer",
      seller: "Watch Ltd"
    },
    {
      id: 10,
      url:
        "https://5.imimg.com/data5/JG/CE/MY-35641433/nursery-english-book-500x500.jpg",
      name: "English",
      seller: "Watch Ltd"
    },
    {
      id: 11,
      url:
        "http://cdn.shopify.com/s/files/1/0428/3763/9317/products/science_english_updated_123_1024x.jpg?v=1595849380",
      name: "Science",
      seller: "Watch Ltd"
    },
    {
      id: 12,
      url: "https://sahitya.b-cdn.net/wp-content/uploads/2021/07/2359.jpg",
      name: "Mathsmatics",
      seller: "Watch Ltd"
    }
  ]);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const addToCart = (data) => {
    setCart([...cart, { ...data, quantity: 1 }]);
  };
  const handleShow = (value) => {
    setShowCart(value);
  };
  return (
    <div>
      <Header count={cart.length} handleShow={handleShow}></Header>
      {showCart ? (
        <CartList cart={cart}></CartList>
      ) : (
        <ProductList product={product} addToCart={addToCart}></ProductList>
      )}
    </div>
  );
}
export default App;
