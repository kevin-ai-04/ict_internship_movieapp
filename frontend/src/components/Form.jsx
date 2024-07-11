import * as React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useState } from "react";

const Form = ({ movie }) => {
  const [form, setForm] = useState(
    {
      name: movie?.name || '',
      year: movie?.year || '',
      category: movie?.category || '',
      director: movie?.director || ''
    }
  );

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  let handleSubmit = () => {
    console.log(form);
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
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <p>Year:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="year"
              value={form.year}
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
            <p>Director:</p>
            <TextField
              required
              id="outlined-required"
              label="Required"
              name="director"
              value={form.director}
              onChange={handleChange}
            />
          </div>
        </Box>
        <div>
          <Stack direction="row" spacing={2}>
            <Button variant="contained" onClick={handleSubmit}>Submit</Button>
          </Stack>
          <br/>
        </div>
      </div>
    </>
  )
}

export default Form;
