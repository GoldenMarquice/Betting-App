import axios from 'axios';

class DataService {
    

    async getTeams() {
            // get data from API
            const response = await axios.get("http://127.0.0.1:8000/api/team/");
            return response.data;
    }

    async getPlayers() {
        // get data from API
        const response = await axios.get("http://127.0.0.1:8000/api/player/");
        return response.data;
}

}

export default new DataService() ;