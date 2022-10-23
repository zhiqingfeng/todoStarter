import React, { useState } from 'react';
import { AgGridReact } from'ag-grid-react'
import'ag-grid-community/dist/styles/ag-grid.css'
import'ag-grid-community/dist/styles/ag-theme-material.css';

function Todolist() {
  const [todo, setTodo] = useState({description: '', date: '', priority:''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setTodo({...todo, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    setTodos([...todos, todo]);
  }

  const columns = [
    {headerName: 'Date', field: 'date', sortable: true},
    {headerName: 'Description', field: 'description', sortable: true},
    {headerName: 'Priority', field:'priority', sortable: true, filter: true,
    cellStyle: params => params.value === "High" ? {color: 'red'} : {color: 'black'}},
  ]

  return (
    <div className='App'>
      <input type="date" name="date" value={todo.date} onChange={inputChanged} />
      <input type="text" name="description" value={todo.description} onChange={inputChanged} />
      <input type="text" name="priority" value={todo.priority} onChange={inputChanged} />
      <button onClick={addTodo}>Add</button>
      <div
        className="ag-theme-material"
        style={{
          height:'700px',
          width:'80%',
          margin: 'auto'}}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={todos}
        >
        </AgGridReact>
      </div>
    </div>
  );
};

export default Todolist;