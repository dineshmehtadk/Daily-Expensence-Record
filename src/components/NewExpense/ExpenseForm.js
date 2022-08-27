import React, { useState } from 'react'
import './ExpenseForm.css'
function ExpenseForm(props) {

  

    const[Title, setTitle] = useState('');
    const[Amount, setAmount] = useState('');
    const[enteredDate, setDate] = useState('');


    
    function onHandleAdd(event){
      const id = 'm'+(props.expenses.length + 2);
        
        event.preventDefault();
        const ExpenseItem={id:id, title:Title, date: new Date(enteredDate),price:Amount}
        props.onAddExpense(ExpenseItem)
        setTitle('');
        setAmount('');
        setDate('')
        
        
    }
  return (
    <form onSubmit={onHandleAdd}>
        <div className="new-expense__control">
            <label>Title</label>
            <input type="text" value={Title} onChange={event => setTitle(event.target.value)} />
        </div>

        <div className="new-expense__control">
            <label>Amount</label>
            <input type="number" min="0.01" step="0.01" value={Amount} onChange={event => setAmount(event.target.value)} />
        </div>

        <div className="new-expense__control">
            <label>Date</label>
            <input type="date" min="2020-01-01" max="2022-12-31" value={enteredDate} onChange={event => setDate(event.target.value)}/>
        </div>
        <button type="submit">Add Expense</button>
    </form>
  )
}

export default ExpenseForm