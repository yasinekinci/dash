import * as React from 'react';
import Button from '@mui/material/Button';
import { Checkbox } from '@mui/material';

function App() {
  return (
    <div >
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
      <Checkbox/>
    </div>
  );
}

export default App;
