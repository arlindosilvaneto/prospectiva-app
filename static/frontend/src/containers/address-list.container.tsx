import React, { useState } from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from 'react-redux';
import { translateFromString } from '../actions/address.action';
import { Address } from '../reducers/address.reducer';
import { State } from '../store/app.store';

interface StateToProps {
    addresses: Address[];
    loading: boolean;
}

interface DispatchToProps {
    translateFromString: Function;
}

const AddressListContainerBase: React.FC<StateToProps & DispatchToProps> = ({
    addresses,
    loading,
    translateFromString,
}) => {
    const [addressName, setAddressName] = useState<string>('');

    const handleAddressChange = (ev: React.FormEvent<HTMLInputElement>) => {
        setAddressName(ev.currentTarget.value);
    }

    const handleEmailSearch = () => {
        translateFromString(addressName);
    }

    return (
        <div className="address-list-container">
            <div className="search-container">
                <input name="addressName" placeholder="Search an address..." onChange={handleAddressChange} />
                <button onClick={handleEmailSearch} disabled={loading}>Search</button>
            </div>
        </div>
    )
}

const stateToProps: MapStateToProps<StateToProps, {}, State> = ({address}) => ({
    addresses: address.addresses,
    loading: address.loading,
});

const dispatchToProps: MapDispatchToProps<DispatchToProps, {}> = {
    translateFromString
}

export const AddressListContainer = connect(stateToProps, dispatchToProps)(AddressListContainerBase);