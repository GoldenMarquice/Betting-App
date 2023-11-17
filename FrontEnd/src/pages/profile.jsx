import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import PromotionService from "../services/promotionService";
import WalletService from "../services/walletService";
import "./profile.css";

function Profile() {
    const [balance, setBalance] = useState(0);
    const [selectedPromotion, setSelectedPromotion] = useState(null);
    const [availablePromotions, setAvailablePromotions] = useState([]);

    const walletService = new WalletService();
    const promotionService = new PromotionService();

    const fetchWalletData = async () => {
        try {
            const walletData = await walletService.getWallet();
            setBalance(walletData.balance);
        } catch (error) {
            console.error('Error fetching wallet data:', error);
        }
    }

    const fetchAvailablePromotions = () => {
        const promotions = promotionService.getPromotionServices();
        setAvailablePromotions(promotions);
    }

    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const selectedPromotionIndex = params.get('selectedPromotion');

    // Define the function to get promotion data by index
    const getPromotionDataByIndex = async (index) => {
        if (index !== null) {
            try {
                const promotionData = await promotionService.getPromotionByIndex(index);
                return promotionData;
            } catch (error) {
                console.error('Error fetching promotion data:', error);
            }
        }
        return null;
    }

    useEffect(() => {
        fetchWalletData();
        fetchAvailablePromotions();
    }, []);

    useEffect(() => {
        if (selectedPromotionIndex !== null) {
            // Fetch the selected promotion data based on the index
            getPromotionDataByIndex(parseInt(selectedPromotionIndex))
                .then((promotionData) => {
                    setSelectedPromotion(promotionData);
                });
        }
    }, [selectedPromotionIndex]);


    return (
        <div className="profile">
            <h1>Profile</h1>

            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="/img/wallet.webp" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Wallet</h5>
                                <p className="card-text">Balance</p>
                                <a href="/pages/wallet" className="submit-payment-button">Your Wallet</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="/img/ATM.webp" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Add Funds</h5>
                                <p className="card-text"></p>
                                <div><a href="/pages/Deposit" className="submit-payment-button">Deposit</a></div>
                                
                                <br />
                                <div><a href="/pages/withdraw" className="submit-payment-button">Withdraw</a></div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="/img/DisplayFunds.jpeg" className="card-img-top" alt="Card" />
                            <div className="card-body">
                                <h5 className="card-title">Display Funds</h5>
                                <p className="card-text">Funds ${balance}</p>
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <img src="/img/Promotions.jpg" className="card-img-top" alt="Card" />
                                <h5 className="card-title">Promotion Code</h5>
                                <br />
                                {/* <input type="text" placeholder="Promotion Code" />
                                <p className="card-text">This is the Promotion Entered</p> */}
                                <Link to="/pages/Promotions" className="submit-payment-button">
                                    Add Promotion
                                </Link>
                                <br />
                                <br />
                            
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Selected Promotion</h5>
                                {selectedPromotion ? (
                                    <>
                                        <h6>{selectedPromotion.promotionName}</h6>
                                        <p>Price: ${selectedPromotion.price}</p>
                                        <p>Code: {selectedPromotion.code}</p>
                                    </>
                                ) : (
                                    <p>No promotion selected</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-6 col-md-4">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Avaliable Promotions</h5>
                                {availablePromotions.length > 0 ? (
                                    availablePromotions.map((promotion) => (
                                        <div key={promotion.id}>
                                            <h6>{promotion.promotionName}</h6>
                                            <p>Price: ${promotion.price}</p>
                                            <p>Code: {promotion.code}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p>No promotions available</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Profile;