import { useEffect, useState } from "react";
import DataService from "../services/walletService";


function Services(){
    const [allData, setAllData] = useState([]);

    async function loadData(){
        const data = await DataService.getServices();
        setAllData(data)
    }

    function handleSelection(item){
        console.log("selected", item);
    }

    // on loading, call the service
    useEffect(() =>{
        loadData();
    }, [])

    return (
        <div className="services page">
            <h1>Test for data services</h1>

            <div className="row">
            {allData.map(item => <div className="col" onClick= {() => handleSelection(item)}>
            <h5>{item.title} </h5>
                <h4>{item.price}</h4>
                <div>{item.image}</div>
                </div>)}
                </div>
        </div>
    )
}

export default Services;