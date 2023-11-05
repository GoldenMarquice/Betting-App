import {useEffect, useState} from 'react';
import ContestService from "../services/contestService";

function ContestServices() {
    const [allData, setAllData] = useState([]);
    

    async function loadData(){
        const data = await ContestService.getContestServices();
        setAllData(data);

    }

    function handleSelection(item) {
        console.log("Selected, item");
    }
     // on loading, call the service
    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="services page">
            <h1>test for data services</h1>
            <div className='row'>
            {allData.map(item =>
                <div className='col' key={item.id} onClick={() => handleSelection(item)}>
                    <img src={item.image} alt="" />
                    <h5>{item.title}</h5> 
                    <h4>{item.id}</h4>
                </div>
            )}
            </div>
    </div>

        
    )
}

export default ContestServices;