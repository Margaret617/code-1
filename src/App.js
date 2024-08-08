import React from 'react';
import { Route,Routes } from 'react-router-dom';
import './App.css';
import SearchBar from './components/SearchBar';
import TransactionForm from './components/TransactionForm';
import TransactionTable from './components/TransactionTable';
import { useEffect , useState } from 'react';

function App() {
  const [transactions,setTransactions] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  useEffect(() =>{
    fetch('https://challenge-jade.vercel.app/transactions')
    .then((res) =>res.json())
    .then((data) =>setTransactions(data))
    //.catch(error => console.log(error));
  } , []);
console.log(transactions);
  function addTransaction(transaction){
    fetch('https://challenge-jade.vercel.app/transactions', {
      method: 'POST',
      headers:{
  'Content-Type':'application/json',
  'Accept':'application/json'
    },
    body:JSON.stringify(transaction),
    
  })
  .then(res =>res.json())
  .then(data =>{setTransactions(prevTransactions=>[data,...prevTransactions]);
    })
    .catch(error=>{console.log('Error adding transaction...')})
    }
  
    const handleSearch =(term)=>{
      setSearchTerm(term);
    };
    
    
    const filteredTransactions = transactions.filter(transaction=>
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    return(
      <div className='App'>
      <h1>BANK OF FLATIRON!</h1>
      <h2>~Your Finances , Our Priority~</h2>
      <SearchBar onSearch={handleSearch}/>
      <TransactionForm onAdd={addTransaction}/>
      <TransactionTable transactions={filteredTransactions}/>
      </div>
    )
    
}

export default App;
