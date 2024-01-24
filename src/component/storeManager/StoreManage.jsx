import React, { useState } from 'react'
import Cards from '../cards/Cards'
import Page from '../page/Page'
import './storeManage.css'


function StoreManage() {
  const [stores, steStores] = useState(null);
  const getStoreLIst  = async () => {

    const url = 'http://localhost:4000/stores/getAllAddressAndName';

    const response = await fetch (url);
            try {
                const responseJson = await response.json();
                console.log(responseJson);
                setMovieData = (responseJson.results);
            } catch (err) {
                console.error(err);
            }

};
function check(){
  getStoreLIst();
}

  return (

   <>
      <div className='storeManage'>
      <h1>heoo</h1>
      {check()}

      </div>
   </>
  )
}

export default StoreManage
