import React from 'react'
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

          <Box textAlign="center" p={2} sx={{
            backgroundColor: orange[400],
            color: "white"
          }}>
            <Typography variant="h4">Student List</Typography>
          </Box>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow style={{ backgroundColor: "#616161" }}>
                  <TableCell align="center" sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>No</TableCell>
                  <TableCell align="center" sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Name</TableCell>
                  <TableCell align="center" sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Email</TableCell>
                  <TableCell align="center" sx={{
                    color: "white",
                    fontWeight: "bold",
                    fontSize: 16
                  }}>Action</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
              <TableRow>
          <TableCell align="center">1</TableCell>
          <TableCell align="center">Amit Safi</TableCell>
          <TableCell align="center">amitsafiData@gmail.com</TableCell>
          <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to="/view/1"><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to="/edit/1"><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton ><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell>
         </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
        </Grid>    
    </>
  )
}
