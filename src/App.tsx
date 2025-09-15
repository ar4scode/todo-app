import { useEffect, useState } from 'react';
import './App.css';
// import ButtonsGroup from './components/ButtonsGroup';
import IconButton from "@mui/material/IconButton"; 
import DeleteIcon from "@mui/icons-material/Delete"; 
import Checkbox from "@mui/material/Checkbox"; 
import { TextField, Button } from '@mui/material';
import { nanoid } from 'nanoid';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {

  interface Todo {
    id: string;
    inputValue: string;
    isChecked: boolean;
  }

  const saved = localStorage.getItem("todoList");
  const getTodoListItems = saved ? JSON.parse(saved) : [];



  // input should be a string
  const [inputValue, setInputValue] = useState<string>("");
  const [todoList, setTodoList] = useState<Todo[]>(getTodoListItems);

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
  }, [todoList])

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
        isChecked : false
      },
    ]);
    setInputValue(""); // clear input after adding
  };

  const handleDelete = (id: string) => {
      const newTodos = todoList.filter(todo => todo.id !== id);
      setTodoList(newTodos);
  };

  const handleCheckboxChange = (id: string) => {
    setTodoList(prev =>
      prev.map(todo =>
        todo.id === id ? { ...todo, isChecked: !todo.isChecked } : todo
      )
    );
  };

  return (
    <>
      <Header />
      <div className='flex flex-col items-center mb-70'>
        <form className='flex' onSubmit={(e) => e.preventDefault()}>
          <TextField
            id="todo-value"
            label="To-Do"
            variant="outlined"
            value={inputValue}
            onChange={handleInputChange}
            sx={{
              background: "#1b2432",
              borderTopLeftRadius: "15px",
              borderBottomLeftRadius: "15px",
              "& .MuiOutlinedInput-root": {
                "& fieldset": { border: "none" },             // remove default border
                "&:hover fieldset": { border: "none" },       // remove on hover
                "&.Mui-focused fieldset": { border: "none" }, // remove on focus
              },
              "& .MuiInputLabel-root" : {
                color: "white"
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "white"
              },
              "& .MuiInputBase-input" : {
                color: "#fff"
              }
            }}
          />
          <Button id='add-btn' onClick={handleAddToTodo} sx={{background: "#1b2432" , color: "white", borderTopRightRadius: "15px", borderBottomRightRadius: "15px", marginLeft: "-3px"}}>ADD</Button>
        </form>
        {/* <ButtonsGroup /> */}

        {/* To Do list */}
        {todoList.length >= 1 && 
          <div className='bg-gray-800 mt-10 rounded-2xl shadow-xl '>
          <p className='px-5 mt-4 text-gray-400'>Number of tasks : {todoList.filter(todo => todo.isChecked).length} / {todoList.length}</p>
          <ul className='mt-10 p-4'>
            {todoList.map((todo) => (
              <li 
                key={todo.id}
                className='flex justify-between items-center w-70 text-gray-300 font-bold p-2 rounded-xl shadow-md text-sm mb-3 duration-75 hover:scale-110'
              >
                <div className='flex items-center'>
                  <Checkbox color="success" sx={{color : "white"}} value={todo.isChecked} onChange={() => handleCheckboxChange(todo.id)}/>
                    <p style={{textDecoration : todo.isChecked ? "line-through" : "none"}}>
                      {todo.inputValue}
                    </p>
                </div>
                <IconButton aria-label="delete" size="small" onClick={() => handleDelete(todo.id)}>
                  <DeleteIcon fontSize="small" sx={{ color: "white" }} />
                </IconButton>
              </li>
            ))}
          </ul>
        </div>
        }
      </div>
      <Footer />
    </>
  );
}

export default App;
