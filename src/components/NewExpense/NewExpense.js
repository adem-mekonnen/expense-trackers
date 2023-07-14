import './NewExpense.css';
import ExpenseForm from './ExpenseForm';
const NewExpense = (props) => {
	const saveExpenseDataHandler = (enteredExpanseData) => {
		const expenseData = {
			...enteredExpanseData,
			id: Math.random().toString(),
		};
		//console.log(expenseData);
		props.onAddExpense(expenseData);
	};

	return (
		<div className="new-expense">
			<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
		</div>
	);
};
export default NewExpense;
