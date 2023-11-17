import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WalletService from '../services/walletService';
import "./wallet.css";


function Wallet() {
    const [balance, setBalance] = useState(1000);
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [showAll, setShowAll] = useState(false);

    const transactionsToShow = showAll ? transactions : transactions.slice(0, 5);

    useEffect(() => {
        fetchWalletData(); // Fetch wallet data when the component mounts
    }, []);

    const fetchWalletData = async () => {
        const walletService = new WalletService();
        try {
            const walletData = await walletService.getWallet();
            setBalance(walletData.balance);
            let transactionsData = await walletService.getTransactions()
            setTransactions(transactionsData);
            // setTransactions(walletData.transactions);
        } catch (error) {
            console.error('Error fetching wallet data:', error);
        }
    }

    const handleDeposit = () => {
        if (transactionAmount > 0) {
            setBalance(balance + transactionAmount);
            addTransaction(`Deposited $${transactionAmount}`);
            updateBackendBalance(balance + transactionAmount);
        }
    };

    const handleWithdraw = () => {
        if (transactionAmount > 0 && transactionAmount <= balance) {
            setBalance(balance - transactionAmount);
            addTransaction(`Withdrawn $${transactionAmount}`);
            updateBackendBalance(balance - transactionAmount);
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
    /**
     * 
     * 
     * use effect calls a loadWallet
     * loadWallet calls the walletService.js getMyWallet
     * put data on an state variables
     * render data from state
     * 
     * 
     * 
     */

    function updateBackendBalance(newBalance) {
    }

    return (
        <div className='wallet'>
            <div className="card">
                <h2>Wallet</h2>
                <p>Balance: ${balance}</p>

                <div>
                    <div>
                        <Link to="/pages/Deposit" class="submit-payment-button"> Deposit </Link>
                    </div>
                </div>
                <br />
                <div>
                    <div>
                        <Link to="/pages/Withdraw" class="submit-payment-button"> Withdraw</Link>
                    </div>
                </div>
                <br />

                <h3>Transaction History</h3>
                <div className='transaction'>
                    <h2 className='transaction h2'>Recent Transactions</h2>
                    {transactions.length > 0 ? (
                        <>
                            <ul className='transaction ul'>
                                {transactionsToShow.map((transaction) => (
                                    <li className='transaction li' key={transaction.id}>
                                        {transaction.type}: ${transaction.amount.toFixed(2)} - {new Date(transaction.date).toLocaleDateString()}
                                    </li>
                                ))}
                            </ul>
                            {!showAll && transactions.length > 5 && (
                                <button onClick={() => setShowAll(true)}>Show More</button>
                            )}
                            {showAll && (
                                <button onClick={() => setShowAll(false)}>Show Less</button>
                            )}
                        </>
                    ) : (
                        <p>No transactions found.</p>
                    )}
                </div>

            </div>
        </div>
    );
}

export default Wallet;
