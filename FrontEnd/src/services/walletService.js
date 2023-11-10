import axios from 'axios';

class WalletService {
    async getWallet() {
        // Get data from the API
        try {
            const response = await axios.get("https://127.0.0.1:8000/api/wallet/");
            return response.data;
        } catch (error) {
            console.error('Error fetching wallet data:', error);
            throw error; // You may want to handle this error in your component
        }
    }

    updateBackendBalance(newBalance) {
        return axios.post('/update_balance/', { new_balance: newBalance })
            .then(response => {
                console.log(response.data.message);
                return response.data; // Return data for further handling in your component
            })
            .catch(error => {
                console.error('Error updating balance:', error);
                throw error; // You may want to handle this error in your component
            });
    }
}

export default WalletService;
