import { createReducer } from "@reduxjs/toolkit";
import { addAddress, removeAddress, setLoading } from "../actions/address.action";

export interface Address {
    lat: number;
    lng: number;
    address: string;
}

export interface AddressState {
    addresses: Address[];
    loading: boolean;
}

const initialState: AddressState = {
    addresses: [],
    loading: false,
};

export const addressReducer = createReducer(initialState, builder => 
    builder
    .addCase(addAddress, (state: AddressState, {payload}) => {
        state.addresses = [...state.addresses, payload]
    })
    .addCase(removeAddress, (state: AddressState, {payload}) => {
        state.addresses = state.addresses.filter(address => address.address === payload);
    })
    .addCase(setLoading, (state: AddressState, {payload}) => {
        state.loading = payload;
    })
);
