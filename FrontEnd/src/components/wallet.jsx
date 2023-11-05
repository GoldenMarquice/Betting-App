import React, { useState } from 'react';

function Wallet() {
    const [balance, setBalance] = useState(1000);
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);

    const handleDeposit = () => {
        if (transactionAmount > 0) {
            setBalance(balance + transactionAmount);
            addTransaction(`Deposited $${transactionAmount}`);
        }
    };

    const handleWithdraw = () => {
        if (transactionAmount > 0 && transactionAmount <= balance) {
            setBalance(balance - transactionAmount);
            addTransaction(`Withdrawn $${transactionAmount}`);
        }
    };

    const addTransaction = (description) => {
        const newTransaction = {
            description,
            amount: transactionAmount,
            timestamp: new Date().toLocaleString(),
        };
        setTransactions([...transactions, newTransaction]);
        setTransactionAmount(0);
    };

    return (
        <div className='wallet'>
        <div className="card">
            <h2>Wallet</h2>
            <p>Balance: ${balance}</p>

            <div>
                <input
                    type="number"
                    placeholder="Enter amount"
                    value={transactionAmount}
                    onChange={(e) => setTransactionAmount(parseFloat(e.target.value))}
                />
                
                <div>
                <button onClick={handleDeposit}>Deposit</button>
                </div>
                <div>
                <button onClick={handleWithdraw}>Withdraw</button>
                </div>
            </div>

            <h3>Transaction History</h3>
            <ul>
                {transactions.map((transaction, index) => (
                    <li key={index}>
                        {transaction.description} ({transaction.timestamp})
                    </li>
                ))}
            </ul>
        </div>
        </div>
    );
}

export default Wallet;
