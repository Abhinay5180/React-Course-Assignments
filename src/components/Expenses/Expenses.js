import React, {useState} from 'react';

import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';
import './Expenses.css';
import ExpensesList from './ExpensesList'

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");
      
    const SaveFilterDataHandler =(enteredFilterData)=>{
    setFilteredYear(enteredFilterData);
  console.log(enteredFilterData);
  }
  // Make use of filter to filter things
  const filteredExepenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear;
  });


  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onSaveFilterData ={SaveFilterDataHandler}/>
      <ExpensesList items={filteredExepenses}/>
      </Card>
        
    </div>
  );
}

export default Expenses;