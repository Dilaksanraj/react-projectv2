import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function ContactForm() {
  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
      <TextField
          required
          id="outlined-required"
          label="Name"
        />
        <TextField
          required
          id="outlined-required"
          label="Phone"
        />
      </div>
      <div>
        <TextField
          required
          id="outlined-required"
          label="Email"
        />
        </div>

        <div>
        <TextField
          id="outlined-multiline-static"
          label="Message"
          multiline
          rows={4}
        />
        </div>

        <div>
        <Button variant="contained">Submit</Button>
        </div>
    </Box>
  );
}
