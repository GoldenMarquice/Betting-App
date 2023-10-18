import React from "react";
import "./profile.css";

function Profile() {
    return (
        <div>
            <h1>Profile</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="card-image.jpg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Wallet</h5>
                                <p className="card-text">Balance</p>
                                <a href="#" className="btn btn-primary">Update</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="card-image.jpg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Add Funds</h5>
                                <p className="card-text">Needed</p>
                                <a href="#" className="btn btn-primary">Learn More</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="card-image.jpg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Display Funds</h5>
                                <p className="card-text">Funds</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="card-image.jpg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Promotion Code</h5>
                                <input type="text" maxLength={10} placeholder="Promotion Code" />
                                <p className="card-text">This is the Promotion Entered</p>
                                <a href="#" className="btn btn-primary">Submit Code</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="card-image.jpg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Checkup Promotion Codes</h5>
                                <p className="card-text">New Promotion</p>
                                <a href="#" className="btn btn-primary">Add</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;
