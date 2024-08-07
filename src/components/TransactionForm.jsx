import React from 'react'

function TransactionForm() {
    const [description,setDescription] = useState('');
    const [amount,setAmount]=useState('');
  
        e.preventDefault()
        if(description && amount){
            onAdd({description , amount});
            setDescription('');
            setAmount('');
        }
    };const handleSubmit = (e) => {

        return(
            <form onSubmit={handleSubmit}>
                <input   type="text" value={description}  placeholder="Description" onChange={(e) => setDescription(e.target.value)}/>
                <input type="number" value={amount}  placeholder="Amount" onChange={(e) => setAmount(e.target.value)}/>
                <button  className="submit"type="submit">Add Transaction</button>
            </form>
        )


    }
  

export default TransactionForm