import React from 'react';

const TodoForm = (props, { addTodo }) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input
				type="text"
				className="input"
				value={props.value}
				onChange={props.setValue}
				placeholder="New Task..."
			/>
		</form>
	);
};

export default TodoForm;
