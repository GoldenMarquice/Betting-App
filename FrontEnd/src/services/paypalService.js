import axios from 'axios';

class PaypalService {
    async createPayPalOrder(amount) {
        try {
            // Make an API request to your server to create an order
            const response = await axios.post('YOUR_SERVER_ENDPOINT_TO_CREATE_ORDER', {
                amount: amount,
            });

            // Return the order ID from the response
            return response.data.orderId;
        } catch (error) {
            console.error('Error creating PayPal order:', error);
            throw error;
        }
    }
}

export default PaypalService;