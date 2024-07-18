import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function ToDo() {

  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('low');
  const [searchQuery, setSearchQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      const newTodo = {
        id: uuidv4(),
        title,
        description,
        priority,
      };
      setTodos([...todos, newTodo]);
      setTitle('');
      setDescription('');
      setPriority('low');
    }
  };

  const priorityColors = {
    low: 'green',
    medium: 'yellow',
    high: 'red',
  };

  const filteredTodos = todos.filter(todo =>
    todo.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        /><br/>
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        /><br/>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </select>
        <button type="submit">Add Todo</button>
      </form>
      <input
        type="text"
        placeholder="Search todos..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <div>
        {filteredTodos.map(todo => (
          <div
            key={todo.id}
            style={{
              backgroundColor: priorityColors[todo.priority],
              padding: '10px',
              margin: '10px 0',
              borderRadius: '5px',
              color: 'white',
            }}
          >
            <h3>{todo.title}</h3>
            <p>{todo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default ToDo
