import {
  Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper
  , Button
} from '@mui/material/'
import { orange } from '@mui/material/colors'
import axios from 'axios'
import { useEffect, useState } from 'react'
import {unstable_HistoryRouter, useNavigate, useParams} from 'react-router-dom'
export const View = () => {
  const {id}=useParams()
  let navigate = useNavigate();
  function handleClick() {
    navigate("/");}
  const [students,setStudents]:any=useState([])
useEffect(()=>{
   getData()
},[])

async function getData() {
  const stu=await axios.get(`http://localhost:3333/students/${id}`)
  setStudents(stu.data)
}  
  return (
    <>
      <Box textAlign="center" p={2} sx={{
        backgroundColor: orange[400],
        color: "white"
      }}>
        <Typography variant="h4">Student Detail</Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow style={{ backgroundColor: "#616161" }}>
              <TableCell align="center" sx={{
                color: "white",
                fontWeight: "bold",
                fontSize: 16
              }}>ID</TableCell>
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
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell align="center">{students.id}</TableCell>
              <TableCell align="center">{students.name}</TableCell>
              <TableCell align="center">{students.email}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClick} >Back to Home</Button>
      </Box>
    </>
  )
}
