import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import React from 'react';
import { Link } from 'react-router-dom';
import PromotionService from '../services/promotionService';

function Promotions() {
    const promotionService = new PromotionService();
    const promotionServices = promotionService.getPromotionServices();

    return (
        <div>
            <h2>Promotions</h2>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                {promotionServices.map((promotion, index) => (
                    <Card key={index} style={{ margin: '10px', minWidth: '200px' }}>
                        <CardActionArea>
                            <CardContent>
                                <h3>{promotion.promotionName}</h3>
                                <p>Price: ${promotion.price}</p>
                                <p>Code: {promotion.code}</p>
                                <Link
                                    to={{
                                        pathname: "/pages/profile",
                                        search: `?selectedPromotion=${index}`,
                                        state: { selectedPromotion: promotion },
                                    }}
                                    className="select-promotion-button"
                                >
                                    Select Promotion
                                </Link>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default Promotions;
