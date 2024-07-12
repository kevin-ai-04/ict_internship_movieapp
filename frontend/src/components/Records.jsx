import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';
import { useState, useEffect } from 'react'
import { Button } from '@mui/material';



const Records = () => {
  const [rows,setRows]=useState([]);
  useEffect(()=>{
    axios.get('http://localhost:4000/movies').then((res)=>{
      console.log(res)
      setRows(res.data)
    })
  })

function deleteMovie{
  axios.delete('http://localhost:4000/movieremoval').then((res)=>{
    alert('Data deleted');
    window.location.reload()
  }).catch((error)=>{
    console.log(error)
  })
}

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Movie Name</TableCell>
            <TableCell>Director</TableCell>
            <TableCell align="left">Category</TableCell>
            <TableCell align="left">Release Year</TableCell>
          
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.movieName}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.movieName}
              </TableCell>
              <TableCell>{row.movieDirector}</TableCell>
              <TableCell>{row.category}</TableCell>
              <TableCell align="left">{row.releaseYear}</TableCell>
              <TableCell><Button variant="contained" color="secondary">Edit</Button></TableCell>
              <TableCell><Button variant="contained" color="error" onClick={deleteMovie(row._id)}>Delete</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default Records