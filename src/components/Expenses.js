import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "./Card";

function Expenses(props){
    return (<Card className="expenses">
        {props.expenses.map((expense, i) => <ExpenseItem key={"expense-" + i} title={expense.title} amount={expense.amount} date={expense.date}></ExpenseItem>)}
    </Card>);
}

export default Expenses;