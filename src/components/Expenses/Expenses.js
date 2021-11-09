import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import './Expenses.css';
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = props => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterChangeHandler = selectedYear => {
        console.log('Expenses.js');
        console.log(selectedYear);
        setFilteredYear(selectedYear);
    }

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                {
                    props.items.map((expense, i) =>
                        <ExpenseItem 
                            key={"expense-" + i}
                            title={expense.title}
                            amount={expense.amount}
                            date={expense.date}
                        />
                    )
                }
            </Card>
        </div>
    );
}

export default Expenses;