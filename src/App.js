import { useState } from 'react';
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

const App = (props, { index }) => {
	const [ todos, setTodos ] = useState([
		{
			text: 'Learn about React',
			isComplete: false
		},
		{
			text: 'Meet friend for lunch',
			isComplete: false
		},
		{
			text: 'Build really cool todo app',
			isComplete: false
		}
	]);

	const completeTodo = (index) => {
		const newTodos = [ ...todos ];
		newTodos[index].isComplete = !newTodos[index].isComplete;
		setTodos(newTodos);
	};

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
				{todos.map((todo, index) => (
					<Todo
						key={index}
						index={index}
						text={todo.text}
						isComplete={todo.isComplete}
						completeTodo={() => completeTodo(index)}
					/>
				))}
			</div>
		</div>
	);
};

export default App;
