import {
  Typography, Box, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper
  , Tooltip, IconButton, Button
} from '@mui/material/'
import { orange } from '@mui/material/colors'

export const View = () => {
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
              <TableCell align="center">1</TableCell>
              <TableCell align="center">2</TableCell>
              <TableCell align="center">3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
      <Box m={3} textAlign="center">
        <Button variant="contained" color="primary" >Back to Home</Button>
      </Box>
    </>
  )
}
