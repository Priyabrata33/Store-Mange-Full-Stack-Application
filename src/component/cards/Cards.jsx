import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
// import './cards.css'

export default function Cards(props) {
  return (

    <div >

      <Card sx={{ maxWidth: 345 }} className='delivery'>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            sx={{
              width: '120', // Set width to 100% for responsiveness
              objectFit: 'cover',
              '@media (min-width: 600px)': {
                height: '100', // Adjust height for tablet view
              },
              '@media (min-width: 960px)': {
                height: '80', // Adjust height for larger screens
              },
            }}
            image = {props.cardDetailObj.imageUrl}
            alt= {props.cardDetailObj.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" style={{ textAlign: 'center' }}>
              {props.cardDetailObj.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>

    </div>
  );
}