import ExpenseItem from "./ExpenseItem";
import './Expenses.css';

function Expenses(props){
    return (<div className="expenses">
        {props.expenses.map((expense, i) => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
    </div>);
}

export default Expenses;