import React, { useState } from 'react';
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem = (props) => {
	const [title, setTitle] = useState(props.title);
	/* const clickHandler = () => {
		setTitle('updated');
		console.log(title);
	}; */ //<button onClick={clickHandler}> Change Title </button>;
	return (
		<Card className="expense-item">
			<div>
				<ExpenseDate date={props.date} />
			</div>
			<div className="expense-item__description">
				<h2>{props.title}</h2>
				<div className="expense-item__price">${props.amount}</div>
			</div>
		</Card>
	);
};
export default ExpenseItem;
