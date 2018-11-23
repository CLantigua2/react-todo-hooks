import React from 'react';

const Todo = (props) => {
	return (
		<div className="todo" style={{ textDecoration: props.isComplete ? 'line-through' : '' }}>
			{props.text}
			<div>
				<button onClick={props.completeTodo}>Complete</button>
			</div>
		</div>
	);
};

export default Todo;
