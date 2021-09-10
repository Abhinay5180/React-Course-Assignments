import React,{useState}from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };
   const [isClicked,setIsClicked]=useState();

   const ClickedHandler =()=>{
     setIsClicked(true);
   }
   const CancelHandler =()=>{
     setIsClicked(false);
   }

  return (
    <div className='new-expense'>
      {!isClicked &&<button onClick={ClickedHandler}>Add New Expense</button>}
    {isClicked && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={CancelHandler} />}
    </div>
  );
};

export default NewExpense;