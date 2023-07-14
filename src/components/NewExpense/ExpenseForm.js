import { useState } from 'react';
import './ExpenseForm.css';
function ExpenseForm(props) {
	const [enteredTitle, setEnteredTitle] = useState('');
	const [enteredAmount, setEnteredAmount] = useState('');
	const [enteredDate, setEnteredDate] = useState('');
	// multiple state at the same time can update using object
	// all value pass in use state as string because it has default value string
	/* const [userInput, setUserInput] = useState({
		enteredTitle: '',
		enteredAmount: '',
		enteredDate: '',
	}); */
	const titleChangeHandler = (event) => {
		setEnteredTitle(event.target.value);
		/* setUserInput({
			...userInput,
			enteredTitle: event.target.value,
		}); // not hold the current state in this function
		setUserInput((prevState) => {
			return {
				...prevState,
				enteredTitle: event.target.value,
			};
		}); */
	};
	const amountChangeHandler = (event) => {
		setEnteredAmount(event.target.value);
		/* setUserInput({
			...userInput,
			enteredAmount: event.target.value,
		}); */
	};
	const dateChangeHandler = (event) => {
		setEnteredDate(event.target.value);
		/* setUserInput({
			...userInput,
			enteredDate: event.target.value,
		}); */
	};
	// to handle multiple input share values using if else
	/* 	const inputHandlerChange = (identifier, value) => {
		if (identifier == 'title') {
			setEnteredTitle(value);
		} else if (identifier == 'amount') {
			setEnteredAmount(value);
		} else {
			setEnteredDate(value);
		}
		// use in the form onChange like this for multiple inputs
		// onChange={(event) => inputHandlerChange('title', event.target.value) }
	}; */
	// to handle form use event.preventDefault()
	// to assign values in the hooks of the current values use object
	const submitHandler = (event) => {
		event.preventDefault();

		const expenseData = {
			title: enteredTitle,
			amount: enteredAmount,
			date: new Date(enteredDate),
		};
		//	console.log(expenseData);
		// passing data from child to parent
		props.onSaveExpenseData(expenseData);
		// two way data binding which used to clear the values which is not listen the click
		// by setting value in the form
		setEnteredTitle('');
		setEnteredAmount('');
		setEnteredDate('');
	};

	return (
		<form onSubmit={submitHandler}>
			<div className="new-expense__controls">
				<div className="new-expense__control">
					<label>Title</label>
					<input
						type="text"
						value={enteredTitle}
						onChange={titleChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Amount</label>
					<input
						type="number"
						min="0.01"
						step="0.01"
						value={enteredAmount}
						onChange={amountChangeHandler}
					/>
				</div>
				<div className="new-expense__control">
					<label>Date</label>
					<input
						type="date"
						min="2019-01-01"
						max="2022-12-31"
						value={enteredDate}
						onChange={dateChangeHandler}
					/>
				</div>
			</div>
			<div className="new-expense__actions">
				<button type="submit">Add Expense</button>
			</div>
		</form>
	);
}
export default ExpenseForm;
