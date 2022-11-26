import {
    Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper
    , Tooltip, IconButton
  } from '@mui/material/'
  import VisibilityIcon from '@mui/icons-material/Visibility'
  import EditIcon from '@mui/icons-material/Edit'
  import DeleteIcon from '@mui/icons-material/Delete'
  import {  orange } from '@mui/material/colors'
  import {Link} from 'react-router-dom'
export const List = () => {
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
    </>
  )
}
