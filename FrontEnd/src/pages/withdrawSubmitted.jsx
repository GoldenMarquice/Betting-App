import React from 'react';

function WithdrawSubmitted() {
    return (
        <div className="thankyou">
            <h2>Your Withdrawal has been submitted</h2>
            <p> Your new balance is </p>
            <a href="/pages/profile">Go to your page to see your balacnce</a>
        </div>
    );
}

export default WithdrawSubmitted;