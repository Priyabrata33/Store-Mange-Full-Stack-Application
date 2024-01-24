import React from 'react'
import Cards from "./cards/Cards.jsx";
import {Link,NavLink} from 'react-router-dom';
import './cards/cards.css';


function Home() {

    const storeObj = { 
        name: "Store",
        imageUrl: "src/component/cards/images/6859183.jpg"
      };
  
      const deliverObj = {
        name: "Delivery",
        imageUrl: "src/component/cards/images/6180696.jpg"
      };
  
  return (
    <>      
    <div className="justify-center" >
        <NavLink to = '' className="flex items-center">
            <div className='cards'> 
              <NavLink to="/storeMangement" style={{textDecoration:'none'}}>
                <Cards cardDetailObj= {storeObj} />
              </NavLink>
                <Cards cardDetailObj= {deliverObj}/>
            </div>
        </NavLink>
      </div>  
    </>
  )
}

export default Home
