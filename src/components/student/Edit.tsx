import {
  Typography, Box, Grid, 
   TextField, Button,
} from '@mui/material/'
import { deepPurple, green, } from '@mui/material/colors'

export const Edit = () => {
  return (
    <>

<Box textAlign='center' sx={{
        backgroundColor: deepPurple[400],
        color: "white"
      }} p={2} mb={2}>
        <Typography variant='h1'>React CRUD with API Call</Typography>
      </Box>
      <Grid container justifyContent='center'>
        <Grid item md={6} xs={12} >
          <Box textAlign="center" p={2} sx={{ backgroundColor: green[400], colo: "white" }} mb={2}>
            <Typography variant="h4">Edit student Detail</Typography>

          </Box>
          <form noValidate>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={6} >
                <TextField autoComplete='id' name='id' variant='outlined' required fullWidth id="stuId" label="ID" disabled autoFocus />
              </Grid>
              <Grid item xs={12} sm={6} >
                <TextField autoComplete='stuName' name='stuName' variant='outlined' required fullWidth id="stuName" label="Name" />
              </Grid>
              <Grid item xs={12} >
                <TextField autoComplete='email' name='email' variant='outlined' required fullWidth id="email" label="email" />
              </Grid>

            </Grid>
            <Box m={3} textAlign='center'>
              <Button type="submit" variant='contained' color="primary" fullWidth>Update</Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
      <Button variant="contained" color="primary" >Back to Home</Button>
     </Box>
        </Grid>
        </Grid>


    </>
  )
}
