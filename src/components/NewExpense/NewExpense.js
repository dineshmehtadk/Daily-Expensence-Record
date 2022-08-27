import React from 'react';
import ExpenseForm from './ExpenseForm';


import './NewExpense.css'

function NewExpense(props) {
  const AddExpenses=(expenseItem)=>{
  
   
    props.addOnExpenses(expenseItem)
  }
  return (
    <div className="new-expense">
        <ExpenseForm onAddExpense={AddExpenses} expenses={props.expenses}/>
    </div>
  )
}

export default NewExpense