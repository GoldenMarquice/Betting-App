import axios from 'axios';

class BlogService {

    async getBlogPosts() {
        // get data from API
        const response = await axios.get("http://127.0.0.1:8000/api/blog/");
        return response.data;
    }

    async getContestServices() {
            // get data from API
            const response = await axios.get("http://127.0.0.1:8000/api/team/");
            return response.data;


        // TODO: fetch data from server
        // axios.get(....)

        // temp. return mock data
        // return [
        //     {
        //         id:'12345',
        //         title:'teams',
        //         image: 'http://',
        //     },
        //     {
        //         id:'12345',
        //         title:'teams',
        //         image: 'http://',
        //     },
        //     {
        //         id:'12345',
        //         title:'teams',
        //         image: 'http://',
        //     },
        // ];
    }

    async getPlayers() {
        const response = await axios.get("http://127.0.0.1:8000/api/player/loadData/");
        return response.data; 
    }

    async saveBlogPost(post) {
        const response = await axios.post("http://127.0.0.1:8000/api/blog/", post);
        return response.data;
    }
    
    getContestList() {
        return [
            {
                id: 1,
                league: "NFL",
                name: "$40K Sun NFL All Rookie",
                date: "10/29/2023 13:00",
                prize: 40000
            },
            {
                id: 2,
                league: "NFL",
                name: "$50K NFL Thu Night Special",
                date: "10/29/2023 13:00",
                prize: 50000
            },
            {
                id: 3,
                league: "NFL",
                name: "$30K Sun NFL Bomb",
                date: "10/29/2023 13:00",
                prize: 30000
            },
            {
                id: 4,
                league: "NFL",
                name: "$60K Sun NFL Rush",
                date: "10/29/2023 13:00",
                prize: 60000
            },
            {
                id: 5,
                league: "NBA",
                name: "$130K Tue NBA Shot",
                date: "TUE 1:00PM ET (MAIN)",
                prize: 130000
            },
            {
                id: 6,
                league: "NBA",
                name: "$8K Tue NBA Slam",
                date: "TUE 1:00PM ET (MAIN)",
                prize: 8000
            },
            {
                id: 7,
                league: "NBA",
                name: "$6K Tue NBA Monster",
                date: "TUE 1:00PM ET (MAIN)",
                prize: 6000
            },
            {
                id: 8,
                league: "NBA",
                name: "$4K Tue NBA Block",
                date: "TUE 1:00PM ET (MAIN)",
                prize: 4000
            },
            {
                id: 9,
                league: "UCL",
                name: "$20K Sun UCL Kicker",
                date: "SUN 1:00PM ET (MAIN)",
                prize: 20000
            },
            {
                id: 10,
                league: "MLB",
                name: "$6K Wed MLB Slugger",
                date: "WED 1:00PM ET (MAIN)",
                prize: 6000
            },
            {
                id: 11,
                league: "MLB",
                name: "$40K Wed MLB Squeeze",
                date: "WED 1:00PM ET (MAIN)",
                prize: 40000
            },
            {
                id: 12,
                league: "MLB",
                name: "$15K Wed MLB Rally",
                date: "WED 1:00PM ET (MAIN)",
                prize: 15000
            },
            {
                id: 13,
                league: "MLB",
                name: "$4K Wed MLB Grand Slam",
                date: "WED 1:00PM ET (MAIN)",
                prize: 4000
            },
            {
                id: 14,
                league: "CFB",
                name: "$10K Wed CFB Wishbone",
                date: "WED 1:00PM ET (MAIN)",
                prize: 10000
            },
            {
                id: 15,
                league: "CFB",
                name: "$1K Wed CFB Granddaddy",
                date: "WED 1:00PM ET (MAIN)",
                prize: 1000
            },
            {
                id: 16,
                league: "CFB",
                name: "$2K Wed CFB Fight Song",
                date: "WED 1:00PM ET (MAIN)",
                prize: 2000
            },
            {
                id: 16,
                league: "CFB",
                name: "$700 Wed CFB Flea Flicker",
                date: "WED 1:00PM ET (MAIN)",
                prize: 700
            }
        ]
    }

}

export default new BlogService() ;