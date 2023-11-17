
import axiosInstance from './axiosService';

class PaypalService {
    async createPayPalOrder(amount) {
        try {
            // Make an API request to your server to create an order
            const response = await axiosInstance.post('http://127.0.0.1:8000/admin/wallet/transaction/', {
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