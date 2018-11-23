import React from 'react';

const TodoForm = (props) => {
	return (
		<form onSubmit={props.handleSubmit}>
			<input type="text" className="input" onChange={props.setValue} placeholder="New Task..." />
		</form>
	);
};

export default TodoForm;
