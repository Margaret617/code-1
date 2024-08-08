import logo from './logo.svg';
import './App.css';

function App() {
  const [transactions,setTransactions] = useState([]);
  const [searchTerm,setSearchTerm]=useState('');

  useEffect(() =>{
    fetch('http://localhost:3000/transactions')
    .then(res =>res.json())
    .then(data =>setTransactions(data))
    .catch(error => console.log(error));
  } , []);

  function addTransaction(transaction){
    fetch('http://localhost:3000/transactions', {
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
    
      </div>
    )
    
}

export default App;
