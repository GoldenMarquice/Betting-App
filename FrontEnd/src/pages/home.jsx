import "./home.css";

function Home() {
    return (
        <div className="home page">
            <h1>Home Page</h1>

            <div className="box"> Info </div>

            <div className="row">
                {/* {MD = cellphones}
                LG= tablets
                XL = laptops/desktop or bigger */}
                <div className="col col-md-3 col-lg-2 col-xl-4 green">Test 1</div>
                <div className="col col-md-4 col-lg-4 col-xl-4 blue">Test 1</div>
                <div className="col col-md-4 col-lg-4 col-xl-4 green">Test 1</div>
            </div>
        </div>
    );
}

export default Home;
