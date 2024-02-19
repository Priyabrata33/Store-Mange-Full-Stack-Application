import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { TextField,Alert,AlertTitle } from '@mui/material';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import { useState } from 'react';
import sha256 from 'crypto-js/sha256';
import { Outlet } from 'react-router-dom';
import './logIn.css';


const style = {
  formStyle: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '30ch',
    height: '30ch',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    
  },

  avStyle:{
    position: 'absolute',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    margin: '10px',  
  },
  textSt: {
    marginLeft: '10',
  },
  textFieldStyle :{
    paddingTop:'50px'
  },

  
};


export default function LogIn() {

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const buttonStyle = {
    color: 'white'
  };

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [hashedPassword, setHashedPassword] = useState('');
  const [alrtChk, setAlrtChk] = React.useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };


  // here is the hash generator for the password which is not required
  const handlePasswordChange = (event) => {
    const inputPassword = event.target.value;
    setPassword(inputPassword);
    // const hash = sha256(inputPassword);
    // setHashedPassword(hash.toString());
  };

  const handleSignIn = () => {
    if (password.length < 8 || !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      // Display an error alert
      setAlrtChk(true);
    }else{
      // Here you can perform your sign-in logic using the username and password
      const userData = {
        username: username,
        password: password
      };
      const jsonData = JSON.stringify(userData);
      console.log('User data in JSON format:', jsonData);

    }

    
    // Here you can perform further actions with the JSON data, such as sending it to a server or storing it locally.
   };

  return (
    
    <>
    
        <Button onClick={handleOpen} style={buttonStyle}>LogIn</Button>
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description"className= 'logIn'>
      
      
          <Box sx={style.formStyle} >
            <div style={style.avStyle}>
                <Avatar src="/broken-image.jpg" />
                <span sx={style.textSt}>SignIn</span>
            </div>
          
            <Stack component="form" sx={style.textFieldStyle}  spacing={2} noValidate autoComplete="off" >
                <TextField label="Username" variant="outlined" className = 'entryField' value={username} onChange={handleUsernameChange} />

                <FormControl  variant="outlined" value={password} onChange={handlePasswordChange}>
                  <InputLabel htmlFor="outlined-adornment-password"  >Password</InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
              
              </FormControl>
              <Button variant="contained" onClick={handleSignIn}>LogIn</Button>
                <p style={{color:'blue'}}>Forget Password?</p>
                
                
                {alrtChk && (
                  <Alert severity="info" onClose={() => setAlrtChk (false)} >
                    <AlertTitle>Info</AlertTitle>
                    Password should contain at least one special character <strong>check it out!</strong>
                  </Alert>
                )}

            </Stack>
        
          </Box>
        </Modal>
    </>
  );
}
