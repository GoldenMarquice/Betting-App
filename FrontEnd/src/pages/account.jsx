import React from 'react';
import Login from '../components/Login';

function Account() {
    return (
        <div>
            <h1>Account</h1>
            <Login/>
            <form>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>

            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Active Bets</h5>
                <ul className="list-group">
                        <li className="list-group-item">
                        </li>
                </ul>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Current Games</h5>
                <ul className="list-group">
                        <li className="list-group-item">
                        </li>
                </ul>
            </div>
        </div>

        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Historical Data</h5>
                <ul className="list-group">
                        <li className="list-group-item">
                        </li>
                </ul>
            </div>
        </div>

        </div>


    );
}

export default Account;
