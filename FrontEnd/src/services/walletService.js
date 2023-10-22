

class WalletService {

    getServices () {
        //TODO: ferch data from server

        //temp. return mock data
        return[
            {
                id: '1234532',
                title: "Basic Wash",
                image: "http://",
                price: 56.83
            },
            {
                id: '4532',
                title: "Polish",
                image: "http://",
                price: 6.83
            },
            {
                id: '1234532',
                title: "Supreme",
                image: "http://",
                price: 56.83
            },
        ];
    }
}


export default new WalletService();