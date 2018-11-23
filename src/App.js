import { useState } from 'react';
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

const App = (props) => {
	const [ todos, setTodos ] = useState([
		{ text: 'Learn about React' },
		{ text: 'Meet friend for lunch' },
		{ text: 'Build really cool todo app' }
	]);

	const [ value, setValue ] = useState('');

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!value) return;
		addTodo(value);
		setValue('');
	};

	const addTodo = (text) => {
		const newTodos = [ ...todos, { text } ];
		setTodos(newTodos);
	};

	return (
		<div className="app">
			<div className="todo-list">
				<TodoForm
					addtodo={addTodo}
					{...props}
					handleSubmit={handleSubmit}
					setValue={(e) => setValue(e.target.value)}
				/>
				{todos.map((todo, index) => <Todo key={index} index={index} todo={todo} />)}
			</div>
		</div>
	);
};

export default App;
