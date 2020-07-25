import React from 'react';
import { Address } from '../reducers/address.reducer';

import './address-card.component.scss';

interface AddressCardProps {
    address: Address;
}

export const AddressCard: React.FC<AddressCardProps> = ({
    address,
}) => {
    return (
        <>
            {address.distance && 
                <div className="address-card_distance">
                    <div>|</div>
                    <div><span>{address.distance.toFixed(2)} Kilometers</span></div>
                    <div>|</div>
                </div>
            }
            <div className="address-card-wrapper">
                <div className="address-card_address">
                    <span>Address:{' '}<span>{address.address}</span></span>
                </div>
                <div className="address-card_location">
                    <span>Lat: <span className="small">{address.lat}</span></span>
                    <span>Lng: <span className="small">{address.lng}</span></span>
                </div>
                <div className="address-card_image">
                    <img src={address.picture} alt={address.address} />
                </div>
            </div>
        </>
    )
};