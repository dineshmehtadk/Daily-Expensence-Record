
import Expenses from './components/Expenses';
import './App.css';
import { Route } from 'react-router';
import NewExpense from './components/NewExpense/NewExpense';
import { useState } from 'react';




function App() {
  const DummyExpenses=[{
    id:'e1',
    title:'Macbook Air m1',
    date:new Date(2022, 7, 18),
    price:'634'
  },
    
    {
      id:'e2',
      title:'iPad Air 2021',
      date:new Date(2021, 3, 19),
      price:'431'
    },
    {
      id:'e3',
      title:'LG 4k monitor Ultra wide',
      date:new Date(2020, 1, 25),
      price: '532'
    }]
  

  const [expenses, setExpenses] = useState(DummyExpenses)
  
  const AddExpenses=(expenseData)=>{
    
    setExpenses((prexpense)=>{
      return[ ...prexpense,expenseData]
    })
    
  }
  
  return (
    <div>
   

    <Route  path="/add"><NewExpense expenses={expenses} addOnExpenses={AddExpenses}/></Route>
    <Route path="/"><Expenses expenses={expenses} /></Route>
    

    </div>
  
  );
}

export default App;
