import React,  {useState} from 'react'


function TransactionForm({onAdd}) {
    const [description,setDescription] = useState('');
    const [amount,setAmount]= useState('');
    
function handleSubmit (e){
    e.preventDefault();
        if(description && amount){
            onAdd({description , amount});
            setDescription('');
            setAmount('');
        }
    }; 
    
    return(
        <form onSubmit={handleSubmit}>
            <input   type="text" value={description}  placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
            <input type="number" value={amount}  placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
            <button  className="submit" type="submit">Add Transaction</button>
        </form>
    )
   
}

export default TransactionForm
