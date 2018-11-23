import { useState } from 'react';
import React from 'react';
import Todo from './Todo';
import TodoForm from './TodoForm';
import './App.css';

const App = (props) => {
	// fake test data
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

	// complete a task
	const completeTodo = (index) => {
		// make a copy of current todoes
		const newTodos = [ ...todos ];
		// toggle isComplete status based on index
		newTodos[index].isComplete = !newTodos[index].isComplete;
		// set list to the new copie of Todos with the toggled
		// complete state
		setTodos(newTodos);
	};

	// set state for form values
	const [ value, setValue ] = useState('');
	// handle the submit function for the forms
	const handleSubmit = (e) => {
		e.preventDefault();
		//initialize a clear value state
		const clearValues = '';
		if (!value) return;
		addTodo(value);
		// clear the vlaues (this doesn't work and I don't know why)
		setValue(clearValues);
	};

	// adds a todo by taking in the text as a param
	const addTodo = (text) => {
		// returns new list with the text added
		const newTodos = [ ...todos, { text } ];
		// sets the todo as this new list
		setTodos(newTodos);
	};

	// remove function for the todo
	const removeTodo = (index) => {
		const newTodos = [ ...todos ];
		if (newTodos[index].isComplete) {
			newTodos.splice(index, 1);
			setTodos(newTodos);
		} else {
			alert('Please complete the task first');
		}
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
				<div className="card-content">
					{todos.map((todo, index) => (
						<Todo
							key={index}
							index={index}
							text={todo.text}
							isComplete={todo.isComplete}
							completeTodo={() => completeTodo(index)}
							removeTodo={() => removeTodo(index)}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default App;
