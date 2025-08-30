import './App.css';
import ButtonsGroup from './components/ButtonsGroup';
import { Button } from '@mui/material';

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Button
        variant='contained'
        sx={{borderRadius: "100%", padding: "14px", fontSize: "20px", backgroundColor:"purple", width: "40px"}}
      >
        +
      </Button>
      <ButtonsGroup />
    </div>
  )
}

export default App
