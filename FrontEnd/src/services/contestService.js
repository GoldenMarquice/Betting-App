

class ContestService {

    getContestServices() {
        // TODO: fetch data from server
        // axios.get(....)

        // temp. return mock data
        return [
            {
                id:'12345',
                title:'teams',
                image: 'http://',
            },
            {
                id:'12345',
                title:'teams',
                image: 'http://',
            },
            {
                id:'12345',
                title:'teams',
                image: 'http://',
            },
        ];
    }

}

export default new ContestService() ;