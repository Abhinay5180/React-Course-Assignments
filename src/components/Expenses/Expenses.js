import React, {useState} from 'react';

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
      
    const SaveFilterDataHandler =(enteredFilterData)=>{
    setFilteredYear(enteredFilterData);
  console.log(enteredFilterData);
  }
  // Make use of filter to filter things
  const filteredExepenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  })
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSaveFilterData ={SaveFilterDataHandler}/>
      { filteredExepenses.map((expense) => (
      <ExpenseItem
      key={expense.id}
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    />
      )) }
      </Card>
        
    </div>
  );
}

export default Expenses;