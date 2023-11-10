import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WalletService from '../services/walletService';


function Wallet() {
    const [balance, setBalance] = useState(1000);
    const [transactionAmount, setTransactionAmount] = useState(0);
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetchWalletData(); // Fetch wallet data when the component mounts
    }, []);

    const fetchWalletData = async () => {
        const walletService = new WalletService();
        try {
            const walletData = await walletService.getWallet();
            setBalance(walletData.balance);
            setTransactions(walletData.transactions);
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
        // Your logic to update the backend balance here
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
            <ul>

                {/* wallet.transactions.map */}
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
