/* eslint-disable react/prop-types */
import { useState } from 'react';

import "./App.css"

function App() {

  const [count,setCount] = useState(0); //For number of cart items 

  const data = [ // Data for each products
    {
      productName:"Fancy product",
      price:"$299.99",
      rating:"\u2B50\u2B50\u2B50\u2B50\u2B50",
      sale:"sale",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Special Item",
      price:"$43.56",
      prePrice:"$85.00",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Sale Item",
      price:"$25.00",
      rating:"\u2B50\u2B50\u2B50\u2B50",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Popular Item",
      price:"$18.00",
      sale:"sale",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Special Item",
      price:"$80.00",
      prePrice:"$100.00",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Sale Item",
      price:"$54.25",
      rating:"\u2B50\u2B50\u2B50\u2B50",
      sale:"sale",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Popular Item",
      price:"$99.69",
      sale:"sale",
      prePrice:"$150.00",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },
    {
      productName:"Fancy product",
      price:"$125.29",
      rating:"\u2B50\u2B50\u2B50\u2B50\u2B50",
      img:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&q=80&w=1000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZHVjdHxlbnwwfHwwfHx8MA%3D%3D",
      alt:"product",
    },  
  ];

  return (
    <div className='main'>

      <Header count={count}/>

      <main className="main-container">
          {data.map((cards, idx) => 
          <ShoppingCard key={idx}
          Name = {cards.productName}
          price = {cards.price}
          rating = {cards.rating}
          setCount = {setCount}
          count = {count}
          sale = {cards.sale}
          img = {cards.img}
          alt = {cards.alt}
          prePrice = {cards.prePrice}
          />)}
      </main>

      <Footer/>
       
    </div>
  )
}

export default App

function Header(prop){
  //Showing Navigation when clicked
  const [navClick,setNavClick] = useState(false);

  function handleNavClick(){
    setNavClick(!navClick)
  }

  return (
    <>

    <div className={navClick ? "nav-container active": "nav-container"}>
        <nav className="nav-head">

            <span className="nav-name">MyShop.com</span>

            <div className={navClick ? "nav-menu active": "nav-menu"}>
                <ol>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li>
                        <a href="#">Shop</a>
                    </li>
                </ol>

                <div className="cart">
                    <span className="cart-img">&#128722;</span>
                    <span>Cart</span>
                    <span className="count">{prop.count}</span>
                </div>
            </div>

          <div className='menu-burger' onClick={handleNavClick}>&#9776;</div>

        </nav>
    </div>

    <div className="banner">
            <h2>Shop in Style</h2>
            <h5>Lorem ipsum dolor sit amet</h5>
    </div>

    </>
  )
}


//Card Components

function ShoppingCard({Name,price,rating,setCount,sale,img,alt,prePrice}){
  
  //Changing the state of the Button
  const [buttonName, setButtonName] = useState("Add to Cart");

  const handleClick = () => {
    if(buttonName === "Add to Cart"){
      setButtonName("Remove from Cart");
      setCount(count => count+1);
    }else{
      setButtonName("Add to Cart");
      setCount(count => count-1);
    }
  };

  return (
    <div className="card">

      <p className="card-image">
        <img src={img} alt={alt} />
        <span className={sale ? "sale active" : "sale"}>Sale</span>
      </p>

      <div className="card-content">

        <div className="card-details">
          <h3 className="product-name">{Name}</h3>
          <p className="rating" style={rating ? {} : {display: "none"}}>
            {rating}
          </p>
          <p className="price">
            <span className={prePrice ? "pre-price active": "pre-price"}>
              <del>{prePrice}</del> -</span>
            {price}
          </p>
        </div>

        <div className="btn-grp">
          <button className="btn" onClick={handleClick}>
            {buttonName}
          </button>
        </div>

      </div>

    </div>
  )
}

function Footer(){
  const date = new Date();
  return (
    <footer>
      <p>CopyRight &#169; Your Shopping Website {date.getFullYear()} </p>
    </footer>
  )
}
