import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";
import axios from 'axios';


const Form = ({ movie }) => {
  const [form, setForm] = useState({
    movieName: '',
    movieDirector: '',
    category: '',
    releaseYear: ''
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    console.log(form);
    // Add logic to send form data to backend or handle further actions
  }

  return (
    <>
      <div id="formcard">
        <h2>Movie Form</h2>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <p>Movie Name:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="movieName"
              value={form.movieName}
              onChange={handleChange}
            />
          </div> 
          <div>
            <p>Director:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="movieDirector"
              value={form.movieDirector}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Category:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="category"
              value={form.category}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Year:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="releaseYear"
              value={form.releaseYear}
              onChange={handleChange}
            />
          </div>
        </Box>
        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSubmit}>Send Data</Button>
          </Stack>
          <br/>
        </div>
      </div>
    </>
  )
}

export default Form;