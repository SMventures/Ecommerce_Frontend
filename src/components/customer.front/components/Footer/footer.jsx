import { Grid, Link, Typography, button } from '@mui/material';

const Footer = () => {
  return (
    <Grid className='bg-black text-white mt-10 text-center' container color={'white' } sx={{ bgcolor: 'black', color: 'white', py: 3 }}>
      <Grid  item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" >
          About us
        </Typography>
       <div> <button className='pb-5' variant="h6" gutterBottom>Company</button></div>
        <div><button className='pb-5' variant="h6" gutterBottom> Products</button></div>
        <div><button className='pb-5'variant="h6"  gutterBottom>Team</button></div>
        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Support
        </Typography>
        <div>
        <button className='pb-5' variant="h6"  gutterBottom>
          Terms&Privacy
        </button></div>
       <div> <button className='pb-5' variant="h6"  gutterBottom>
          Pricing
        </button></div>
        <div><button className='pb-5' variant="h6"  gutterBottom>
          FAQ</button></div>
        
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Typography className='pb-5' variant="h6" gutterBottom>
          Contact Us
        </Typography>

        <div><button className='pb-5' variant="h6"  gutterBottom>
          Send us a message</button></div>
        <div><button className='pb-5' variant="h6"  gutterBottom>
          Email us</button></div>
        <div><button className='pb-5' variant="h6"  gutterBottom>
          Call us
        </button></div>
      </Grid>
      
      <Grid className='pt-20' item xs={12} >
        <Typography variant="body2" component="p" align="center">
          &copy; 2023 My Company. All rights reserved.
        </Typography>
       
      </Grid>
    </Grid>
  );
};

export default Footer;
