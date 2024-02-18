import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
 
const DeliveryAddressForm = () => {
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
    const data = new FormData(e.currentTarget);
 
    const address = {
      firstName: data.get("firstNamee"),
      lastName: data.get("lastName"),
      address: data.get("address"),
      city: data.get("city"),
      state: data.get("state"),
      zipcode: data.get("zipcode"),
      phoneNumber: data.get("phoneNumber")
    }
    console.log("address", data)
  }
 
  return (
    <Grid container spacing={4} justifyContent="center">
      <Grid item xs={12} lg={7}>
        <Box className="border rounded-s-md shadow-md p-5" sx={{ marginRight: '24px' }}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="firstName"
                  name="firstName"
                  label="First Name"
                  fullWidth
                  autoComplete="given-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="lastName"
                  name="lastName"
                  label="Last Name"
                  fullWidth
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="address"
                  name="address"
                  label="Address"
                  fullWidth
                  autoComplete="address-line1"
                  multiline
                  rows={4}
                  sx={{ width: '100%' }} // Adjust the width here
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="city"
                  name="city"
                  label="City"
                  fullWidth
                  autoComplete="address-level2"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="state"
                  name="state"
                  label="State/Province/Region"
                  fullWidth
                  autoComplete="address-level1"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="zipcode"
                  name="zipcode"
                  label="Zip/Postal Code"
                  fullWidth
                  autoComplete="postal-code"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="phoneNumber"
                  name="phoneNumber"
                  label="Phone Number"
                  fullWidth
                  autoComplete="tel"
                />
              </Grid>
              <Grid item xs={12}>
                <Button sx={{ py:1.5, mt:2, bgcolor:"Blue", size:"large", variant:"contained",color:'white' }} type='submit'>Deliver Here</Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}
 
export default DeliveryAddressForm;
