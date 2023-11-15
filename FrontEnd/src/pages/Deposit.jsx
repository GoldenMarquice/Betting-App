import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import WalletService from '../services/walletService';
import "./Deposit.css";

function Deposit() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [selectedPaymentType, setSelectedPaymentType] = useState('');
    const [paymentStatus, setPaymentStatus] = useState(null);
    const [balance, setBalance] = useState(0);
    const [walletId, setWalletId] = useState(0);
    const [transactions, setTransactions] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAll, setShowAll] = useState(false);
    const transactionsToShow = showAll ? transactions : transactions.slice(0, 5);




    const depositOptions = [
        { amount: 50, label: '$50' },
        { amount: 100, label: '$100' },
        { amount: 150, label: '$150' },
        { amount: 250, label: '$250' },
        { amount: 500, label: '$500' },
    ];

    const createPayPalOrder = async (amount) => {
        try {
            const response = await fetch('https://127.0.0.1:8000/api/wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();

            if (response.ok) {
                return data.orderId;
            } else {
                throw new Error(data.error);
            }
        } catch (error) {
            console.error('Error creating PayPal order:', error);
            throw error;
        }
    };

    const handlePaymentSubmit = async () => {
        try {

            // create the transaction object
            // send it to service
            let transaction = {
                wallet: walletId,
                type: 'Deposit',
                payment_method: 'Paypal',
                amount: parseFloat(selectedAmount),
                date: new Date(),
                element_id: 1
            }
            let service = new WalletService();
            await service.saveTransaction(transaction);

            // update your balance
            fetchWallet();

        } catch (error) {
            console.error('Error submitting payment:', error);
        }
    };

    function handlePaymentTypeChange(event) {
        const selectedPaymentType = event.target.value;
        setSelectedPaymentType(selectedPaymentType);
    }

    const handlePayPalPayment = async () => {
        try {

            const orderID = await createPayPalOrder(selectedAmount);

            const actions = window.paypal.getActions();

            const details = {
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: selectedAmount.toFixed(2),
                        },
                    },
                ],
            };

            const result = await actions.order.capture();

            if (result.status === 'COMPLETED') {
                setPaymentStatus('Payment successful');
            } else {
                setPaymentStatus('Payment failed');
            }
        } catch (error) {
            console.error('PayPal payment error:', error);
            setPaymentStatus('Payment failed');
        }
    };

    const paypalId = 'AZVxLd5K3GbtiUvjySewvUkANu9YiF6jGYbcuamXQH27pgspnX73b3LooRMfFrPtArqylQDHDS86iURx';

    const clientId = paypalId;

    const updateBalance = async (amount) => {
        try {
            const response = await fetch('https://127.0.0.1:8000/api/wallet', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ amount }),
            });

            const data = await response.json();

            console.log('Server response:', data);

            if (response.ok) {
                setBalance(data.newBalance);
                console.log('Balance updated successfully');
            } else {
                console.error('Failed to update balance:', data.error);
            }
        } catch (error) {
            console.error('Error updating balance:', error);
        }
    };

    const fetchWallet = async () => {
        let service = new WalletService();
        let response = await service.getWallet();
        console.log("my wallet", response);
        setBalance(response?.balance || 0);
        setWalletId(response?.id || 0);
    }

    const fetchTransactions = async () => {
        try {
            let service = new WalletService();
            let response = await service.getTransactions();
            if (response) {
                setTransactions(response);
                setLoading(false);
            } else {
                console.error('No transactions found.');
                setLoading(false);
            }
        } catch (error) {
            console.error('Error fetching transactions:', error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchWallet();
        fetchTransactions();

        // fetchTransactions
    }, []);

    return (
        <div className="deposit">
            <main>
                <section className="deposit banner" role="banner">
                    <span>Quick Bets</span>
                </section>
                <div className="deposit-amount">
                    <h2 id="deposit-select-amount">Select Amount (USD)</h2>
                    <section className="deposit-amount-container" id="deposit-options-container">
                        <fieldset className="deposit-options-group">
                            <legend className="deposit-amount-legend">Deposit Amount</legend>
                            <div className="deposit-amount-options-inner">
                                {depositOptions.map((option, index) => (
                                    <div
                                        key={index}
                                        className={`deposit-amount-card ${selectedAmount === option.amount ? 'selected' : ''}`}
                                        onClick={() => setSelectedAmount(option.amount)}
                                    >
                                        <span className="deposit-amount-value">{option.label}</span>
                                        {selectedAmount === option.amount && (
                                            <div className="deposit-amount-recommended">Recommended</div>
                                        )}
                                    </div>
                                ))}
                            </div>

                        </fieldset>
                    </section>
                </div>
                {/* <section className="deposit-payment-details">
                    <h2 className="deposit-header-payment-details">Add Payment Details</h2>
                    <div className="deposit-payment-type">
                        <label className="deposit-payment-label" htmlFor="paymentType">Select Payment Type:</label>
                        <select id="paymentType" name="paymentType" className="deposit-payment-select" onChange={handlePaymentTypeChange}>
                            <option value="">Select Payment Type</option>
                            <option value="debit-card">Debit Card</option>
                            <option value="credit-card">Credit Card</option>
                            <option value="venmo">Venmo</option>
                            <option value="paypal">Paypal</option>
                        </select>
                    </div>
                </section>

                {['credit-card', 'debit-card'].includes(selectedPaymentType) && (
                    <section className="custom-payment-details">
                        <div className="custom-payment-form">
                            <div className="custom-form-group">
                                <label htmlFor="creditCardNumber">Card Number</label>
                                <input
                                    type="text"
                                    id="creditCardNumber"
                                    name="creditCardNumber"
                                    placeholder="1234 1234 1234 1234"
                                    required
                                />
                            </div>
                            <div className="custom-form-group">
                                <label htmlFor="expirationDate">Expiration Date (mm/yy)</label>
                                <input
                                    type="text"
                                    id="expirationDate"
                                    name="expirationDate"
                                    placeholder="mm/yy"
                                    required
                                />
                            </div>
                            <div className="custom-form-group">
                                <label htmlFor="cvv">CVV</label>
                                <input
                                    type="text"
                                    id="cvv"
                                    name="cvv"
                                    placeholder="123"
                                    required
                                />
                            </div>
                            <div className="custom-form-group">
                                <input type="checkbox" id="rememberCard" name="rememberCard" checked />
                                <label htmlFor="rememberCard">Remember Card For Future Use</label>
                            </div>
                        </div>
                    </section>
                )} */}

                <PayPalScriptProvider options={{ 'client-id': clientId }}>
                    <PayPalButtons
                        createOrder={(data, actions) => {
                            return createPayPalOrder(selectedAmount);
                        }}
                        onApprove={(data, actions) => {
                            updateBalance(selectedAmount);
                        }}
                    />

                </PayPalScriptProvider>

                {/* <div>
    <label htmlFor="customAmount">Custom Amount:</label>
    <input
        type="number"
        id="customAmount"
        placeholder="Enter custom amount"
        value={selectedAmount || ''}
        onChange={(e) => setSelectedAmount(parseFloat(e.target.value))}
    />
</div> */}

                <section className="deposit-product-info">
                    <div className="deposit-wallet-switcher" id="deposit-switch-product">
                        <div><label htmlFor=""> How much would you like to Deposit:</label></div>
                        <div><input type="value" placeholder='Deposit amount' value={selectedAmount}
                            onChange={(e) => setSelectedAmount(e.target.value)} /> </div>
                        <br />
                        <Link to="/pages/deposit" onClick={handlePaymentSubmit} className="submit-payment-button">Submit Payment</Link>
                        <p className="deposit-responsible-gaming" id="deposit-link-responsible-gaming">
                            Your current balance: ${balance.toFixed(2)}
                        </p>

                        {/* <div>
                            <button className="submit-payment-button" onClick={handlePayPalPayment}>Pay with PayPal</button>
                            {paymentStatus && <div>Payment Status: {paymentStatus}</div>}
                        </div>
                    </div>
                    <div className="deposit-minimum-amount">
                        <p>
                            <strong>Minimum Deposit:</strong> $50.00
                        </p>
                    </div>
                    
                    <p className="deposit-responsible-gaming" id="deposit-link-responsible-gaming"></p>
                  */}
                    </div>
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

                </section>
            </main>
        </div>
    );
}

export default Deposit;
