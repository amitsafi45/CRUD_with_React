import {
  Typography, Box, Grid, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper
  , Tooltip, TextField, Button, IconButton
} from '@mui/material/'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { deepPurple, green, orange } from '@mui/material/colors'
import { makeStyles, Theme, createStyles } from '@mui/material/styles';
import {Link} from 'react-router-dom'
import { List } from '../student/List'
// const useStyles:any=makeStyles({
//   headingColor:{
//     backgroundColor: deepPurple[400],
//     color:"white"
//   }
// })
export const Home = () => {
  return (
    <>
      <Box textAlign='center' sx={{
        backgroundColor: deepPurple[400],
        color: "white"
      }} p={2} mb={2}>
        <Typography variant='h1'>React CRUD with API Call</Typography>
      </Box>
      <Grid container>
        <Grid item md={6} xs={12} >
          <Box textAlign="center" p={2} sx={{ backgroundColor: green[400], colo: "white" }} mb={2}>
            <Typography variant="h4">Add student Detail</Typography>

          </Box>
          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} >
                <TextField autoComplete='stuName' name='stuName' variant='outlined' required fullWidth id="stuName" label="Name" />
              </Grid>
              <Grid item xs={12} >
                <TextField autoComplete='email' name='email' variant='outlined' required fullWidth id="email" label="email" />
              </Grid>

            </Grid>
            <Box m={1}>
              <Button type="submit" variant='contained' color="primary" fullWidth>Add</Button>
            </Box>
          </form>
        </Grid>
        
        <Grid item md={6} xs={12} >
           <List/>
          
        </Grid>
        </Grid>    
    </>
  )
}
