import { useState } from 'react';
import './App.css';
import ButtonsGroup from './components/ButtonsGroup';
import IconButton from "@mui/material/IconButton"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import Checkbox from "@mui/material/Checkbox"; 

function App() {
  return (
    <div className='flex flex-col items-center mb-70'>
      <ButtonsGroup />

      {/* To Do list */}
      <div>
        <ul className='mt-10'>
          <li className='flex justify-between items-center w-70 text-purple-800 font-bold border-1 p-2 rounded-md shadow-md text-sm'>
            <div>
              <Checkbox  color="success" />
              do my job
            </div>
            <IconButton aria-label="delete" size="small">
              <DeleteIcon fontSize="small" sx={{ color: "purple" }} />
            </IconButton>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
