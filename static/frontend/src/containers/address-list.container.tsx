import React, { useState } from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';
import { translateFromString } from '../actions/address.action';
import { Address } from '../reducers/address.reducer';
import { State } from '../store/app.store';

import './address-list.container.scss';
import { AddressCard } from '../components/address-card.component';

interface StateToProps {
    addresses: Address[];
    loading: boolean;
    error: string;
}

interface DispatchToProps {
    translateFromString: Function;
}

const AddressListContainerBase: React.FC<StateToProps & DispatchToProps> = ({
    addresses,
    loading,
    error,
    translateFromString,
}) => {
    const [addressName, setAddressName] = useState<string>('');

    const handleAddressChange = (ev: React.FormEvent<HTMLInputElement>) => {
        setAddressName(ev.currentTarget.value);
    }

    const handleEmailSearch = () => {
        translateFromString(addressName, (promise: Promise<any>) => {
            promise.then(() => {
                setAddressName('');
            })
        });
    }

    return (
        <div className="address-list-container">
            {error && <div className="error-container">{error}</div>}
            <div className="search-container">
                <input name="addressName" placeholder="Search an address..." onChange={handleAddressChange} />
                <button onClick={handleEmailSearch} disabled={loading}>Search</button>
            </div>
            <div className="address-card-container">
                {addresses.map((address, index) => <AddressCard key={`${index}-${address.lat}`} address={address} />)}
            </div>
        </div>
    )
}

const stateToProps: MapStateToProps<StateToProps, {}, State> = ({address}) => ({
    addresses: address.addresses,
    loading: address.loading,
    error: address.error,
});

const dispatchToProps: MapDispatchToProps<DispatchToProps, {}> = {
    translateFromString
}

export const AddressListContainer = connect(stateToProps, dispatchToProps)(AddressListContainerBase);