import { useState } from 'react';
import './App.css';
import ButtonsGroup from './components/ButtonsGroup';
import IconButton from "@mui/material/IconButton"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import Checkbox from "@mui/material/Checkbox"; 
import { TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';

function App() {
  interface Todo {
    id: string;
    inputValue: string;
  }

  // input should be a string
  const [inputValue, setInputValue] = useState<string>("");

  // todoList should be an array of Todo objects
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddToTodo = () => {
    if (inputValue.trim() === "") return; // avoid empty todos
    setTodoList((prev) => [
      ...prev,
      {
        id: nanoid(),
        inputValue: inputValue,
      },
    ]);
    setInputValue(""); // clear input after adding
  };

  return (
    <div className='flex flex-col items-center mb-70'>
      <form className='flex' onSubmit={(e) => e.preventDefault()}>
        <TextField 
          id="todo-value" 
          label="To-Do" 
          variant="standard" 
          value={inputValue} 
          onChange={handleInputChange} 
        />
        <Button id='add-btn' onClick={handleAddToTodo}>ADD</Button>
      </form>
      <ButtonsGroup />

      {/* To Do list */}
      <div>
        <ul className='mt-10'>
          {todoList.map((todo) => (
            <li 
              key={todo.id}
              className='flex justify-between items-center w-70 text-purple-800 font-bold border-2 p-2 rounded-xl shadow-xl text-sm mb-3'
            >
              <div>
                <Checkbox color="success" />
                {todo.inputValue}
              </div>
              <IconButton aria-label="delete" size="small">
                <DeleteIcon fontSize="small" sx={{ color: "purple" }} />
              </IconButton>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
