import React from 'react'

function TransactionTable() {
  return (
    <table>
      <thead>
        <tr>
          <th>DESCRIPTION</th>
          <th>AMOUNT</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction,index)=>(
            <tr key={index}>
                <td>{transaction.description}</td>
                <td>{transaction.amount}</td>
            </tr>
        ))}
      </tbody>
      </table>
  )
}

export default TransactionTable