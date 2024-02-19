import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FormForStoreAddition from './store card/FormForStoreAddition';



export default function AlertMessage() {

    return (
      <>
        <div style={{  display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh'}}>
          <Alert severity="info">
            <AlertTitle>Info</AlertTitle>
              There is no store listed right now, please add store.
          </Alert>
          <FormForStoreAddition/>
        </div> 
      </>
    );
}
