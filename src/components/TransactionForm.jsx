import React from 'react'

function TransactionForm() {
    const [description,setDescription] = useState('');
    const [amount,setAmount]=useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault()
        if(description && amount){
            onAdd({description , amount});
            setDescription('');
            setAmount('');
        }
    };


    }
  

export default TransactionForm