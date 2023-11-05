import axios from 'axios';

class BlogService {

    async getBlogPosts() {
        // get data from API
        const response = await axios.get("http://127.0.0.1:8000/api/blog/");
        return response.data;

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

    async saveBlogPost(post) {
        const response = await axios.post("http://127.0.0.1:8000/api/blog/", post);
        return response.data;
    }

}

export default new BlogService() ;