import { PayPalButtons, PayPalScriptProvider } from '@paypal/react-paypal-js';
import React, { useState } from 'react';
import "./Deposit.css";

function Deposit() {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [selectedPaymentType, setSelectedPaymentType] = useState(''); // Initialize with an empty string
    const [paymentStatus, setPaymentStatus] = useState(null);


    const depositOptions = [
        { amount: 50, label: '$50' },
        { amount: 100, label: '$100' },
        { amount: 150, label: '$150' },
        { amount: 250, label: '$250' },
        { amount: 500, label: '$500' },
    ];

    const createPayPalOrder = async (amount) => {
        try {
            // Make an API request to your server to create a PayPal order
            const response = await fetch('YOUR_SERVER_ENDPOINT_TO_CREATE_ORDER', {
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

    const handlePaymentSubmit = () => {
        // Add the logic to handle payment submission here
        // You can use the selectedAmount and selectedPaymentType to process the payment
    };

    function handlePaymentTypeChange(event) {
        const selectedPaymentType = event.target.value;
        setSelectedPaymentType(selectedPaymentType);
    }

    const handlePayPalPayment = async () => {
        try {
            // Create an order using the createPayPalOrder function
            const orderID = await createPayPalOrder(selectedAmount);

            // Use the PayPal API to execute the payment and capture the funds
            const actions = window.paypal.getActions();

            const details = {
                purchase_units: [
                    {
                        amount: {
                            currency_code: 'USD',
                            value: selectedAmount.toFixed(2), // Format the amount
                        },
                    },
                ],
            };

            // Execute the payment
            const result = await actions.order.capture();

            // Handle the payment success
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
                            <legend className="deposit-amount-legend">Payment Amount</legend>
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
                            // Handle the payment approval here
                        }}
                    />
                </PayPalScriptProvider>

                {/* <section className="deposit-product-info">
                    <div className="deposit-wallet-switcher" id="deposit-switch-product">
                        <div>
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
                    <button onClick={handlePaymentSubmit} className="submit-payment-button">Submit Payment</button>
                </section> */}
            </main>
        </div>
    );
}

export default Deposit;
