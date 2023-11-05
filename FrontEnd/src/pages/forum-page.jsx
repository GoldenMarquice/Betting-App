import {useEffect, useState} from 'react';
import BlogService from "../services/contestService";
import Forum from './forum';
import Blog from './blog';

function ForumPage() {
    const [allData, setAllData] = useState([]);
     

    async function loadData(){
        const data = await BlogService.getBlogPosts();
        setAllData(data);
    }

    function handleSelection(item) {
        console.log("Selected, item");
    }
     // on loading, call the service
    useEffect(() => {
        loadData();
    }, [allData]);

    return (
        <div className="services page">
        <Forum loadData ={loadData}/>
    
        <Blog allData ={allData}/>
            </div>
    

        
    )
}

export default ForumPage;