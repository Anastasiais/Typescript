import React, {useState, useEffect} from 'react';
import {ITodo} from '../types/types';
import TodoItem from './TodoItem';
import List from "./List";
import axios from "axios";


const TodosPage: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([])

  useEffect(() => {
    fetchTodos()
}, [])



async function fetchTodos() {
    try {
        const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10')
        setTodos(response.data)
    } catch (e) {
        alert(e)
    }
}

  return (
    <List 
    items={todos} 
    renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />} 
/>
  )
}

export default TodosPage;