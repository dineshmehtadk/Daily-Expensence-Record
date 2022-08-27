import React, { useState } from 'react';


import './Expenses.css'
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';

import Card from './Card';
import { Link } from 'react-router-dom';

function Expenses(props) {
 
  const expenses= props.expenses;
  const [FilteredYear, setExpenseFilter]=useState('2022')
  
  const filterHandleChange=(selectedYear)=>{
    setExpenseFilter(selectedYear)
      
  }
  const FilteredExpenses= expenses.filter((expense)=>{
    return expense.date.getFullYear().toString()===FilteredYear
  })



  return (<div>
    <Link to="/add"><button className="expense-item__price" type="button">
    Add New Item
     </button></Link>
    
    
    <Card className="expenses">
      <ExpensesFilter selected={FilteredYear} onChangeFilter={filterHandleChange} />
        
        {FilteredExpenses.map((item =><ExpenseItem id={item.id} title={item.title} date={item.date} price={item.price} /> ))}
    </Card>
    </div>
  )
}

export default Expenses