import {
  Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper
  , Tooltip, IconButton
} from '@mui/material/'
import VisibilityIcon from '@mui/icons-material/Visibility'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import { orange } from '@mui/material/colors'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'
export const List = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    getAllData()
  },[])
  const getAllData = async () => {
    try {

      const student = await axios.get('http://localhost:3333/students')
      setStudents(student.data)

    } catch (error) {
      console.log('data not fetch');

    }
  }
  return (
    <>
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
            {
              students.map((stud:any, i:any) => {
                return (
                  <TableRow key={i}>
                    <TableCell align="center">{i+1}</TableCell>
                    <TableCell align="center">{stud.name}</TableCell>
                    <TableCell align="center">{stud.email}</TableCell>
                    <TableCell align="center">
                      <Tooltip title="View">
                        <IconButton><Link to={`/view/${stud.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
                      </Tooltip>
                      <Tooltip title="Edit">
                        <IconButton><Link to="/edit/1"><EditIcon /></Link></IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton ><DeleteIcon color="secondary" /></IconButton>
                      </Tooltip>
                    </TableCell>
                  </TableRow>

                )
              })
            }

          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
