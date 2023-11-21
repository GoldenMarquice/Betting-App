import axiosInstance from "./axiosService";

class WalletService {
    async getWallet() {
        // Get data from the API
        try {
            const response = await axiosInstance.get("/api/wallet/my_wallet/");
            return response.data;
        } catch (error) {
            console.error('Error fetching wallet data:', error);
            throw error; // You may want to handle this error in your component
        }
    }

    async getTransactions() {
        try {
            const response = await axiosInstance.get('/api/transactions/'); // Update the endpoint
            return response.data;
        } catch (error) {
            console.error('Error fetching transactions:', error);
            throw error;
        }
    }

    async saveTransaction(trans) {
        try {
            const response = await axiosInstance.post("/api/transactions/", trans);
            return response.data;
        } catch (error) {
            console.error('Error saving transaction data:', error);
            throw error; // You may want to handle this error in your component
        }
    }

    updateBackendBalance(newBalance) {
        return axiosInstance.post('/update_balance/', { new_balance: newBalance })
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
