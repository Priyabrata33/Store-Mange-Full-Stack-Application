import React, { useState, useEffect } from 'react'
import StoreManageCard from './store card/StoreCards';
import './storeManage.css'
import AddButton from './AddButton.jsx';
import AlertMessage from './AlertMessage.jsx';

function StoreManage() {
  const [stores, setStores] = useState([]);
  const [numberOfStores, setNumberOfStores] = useState(0);
  const [showAlert, setShowAlert] = useState(false);

/* 


its working but the below code gives and optimise code write way

const getStoreLIst  = async () => {
    const url = 'http://localhost:4000/stores/getAllAddressAndName';
    const response = await fetch (url);
            try {
                const responseJson = await response.json();
                console.log(responseJson);
                setNumberOfStores(responseJson.length);
                // setMovieData = (responseJson.results);
            } catch (err) {
                console.error(err);
            }
};

getStoreLIst();

*/


useEffect(() => {
  fetch('https://localhost:4000/stores/getAllStore') //here the URL for the of All store manaement 
  .then((response)=> {
    return response.json();
  }).then((storeData)=>{
    setNumberOfStores(storeData.length);   
    setStores(storeData);
    setShowAlert(storeData.length === 0);
  })
  .catch((error)=> console.log(error))
}, [numberOfStores]);


const generateCards = (array) => {
  return array.map((stores, index) => {
    return <div key={index} className="card">
      <StoreManageCard storeDetailObj = {stores}/>
      </div>;
  });
};


  return (
   <>
      {/* Using Alert to add the AlertMessage and the different message on it for the checker of the alert message  */}
     
      {showAlert && (
        <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(0, 0, 0, 0.5)', zIndex: 1 }}>
          <AlertMessage/>
        </div>
      )}
      <div className='storeManage'>
      
     {/* // Need to generate the cards in that way so that the Number of Card generate as per the number of store in the Store one */}
      {generateCards(stores)}
      </div>
     <AddButton/>
   
     
   </>
  )
}

export default StoreManage
