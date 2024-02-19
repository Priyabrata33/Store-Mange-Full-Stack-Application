import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import PlusIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import StoreIcon from '@mui/icons-material/Store';
import {useState} from 'react';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  height:200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function FormForStoreAddition() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  //Storing of store by using use state and event
    const [sName, setSname] = useState('');
    const toStoreSName = (event) => {
        setSname(event.target.value);
    };

 //Storing of number by using use state and event
  const [sAddrs, setSaddrs]  = useState('');
    const toStoreSAddrs = (event) => {
      setSaddrs(event.target.value);
    };


  const addNewStore = () => {
    
   const store= {
                sName: sName, 
                sAddrs: sAddrs
              };

       fetch('https://localhost:4000/stores/saveStores', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(store )
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          console.log('Response Type:', response.headers.get('content-type'));
          return response.json();
        })
        .catch(error => {
          console.error('Error message', error);
        });
        window.location.reload();
 };
 


  return (
    <>
        <div style={{ position: 'fixed', bottom: 10, left: 20 }}>
            <Button variant="contained" startIcon={<PlusIcon />} sx={{ borderRadius: '100px' }}  onClick={handleOpen}>Create Store</Button>    
        </div>
      <Modal
        open={open}
        onClose={handleClose}
   
      >
        <Box sx={style}>

            {/* Add the Form For creation of the Stores and all  */}
            <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                      marginLeft:'20px',
                      height: '40px',
                      width: '150px',
                      borderRadius: '10px'
                    }}
                  >
                      <StoreIcon style={{ color: '#1565c0' }}/>
                  
                    <Typography id="CreateStoreID" style={{ marginLeft: '10px', fontWeight: 'bold' }}>
                      Create Store
                    </Typography>
             </div>



            {/* Form for the Creation of the store with address and name */}
            <div style={{ marginTop: '10px' }}>
                <TextField required id="outlined-required" label="Store Name" value={sName} onChange={toStoreSName} />
              </div>
              <div style={{ marginTop: '10px' }}>
                <TextField required id="outlined-required" label="Address" value={sAddrs} onChange={toStoreSAddrs} />
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:'10px' }}>
              <Button variant="contained" onClick={addNewStore} >Create Store</Button>
            </div>
        </Box>
      </Modal>
    </>
  );
}
