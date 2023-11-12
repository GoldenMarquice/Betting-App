import React from 'react';

function ThankYou() {
    return (
        <div className="thankyou">
            <h2>Thank You for Signing Up!</h2>
            <p>Your registration was successful. You can now log in and access our services.</p>
            <a href="/pages/profile">Go to your page</a>
        </div>
    );
}

export default ThankYou;