import { createReducer } from "@reduxjs/toolkit";
import { addAddress, removeAddress, setLoading, setError, setDistance } from "../actions/address.action";

export interface Address {
    id: number;
    lat: number;
    lng: number;
    address: string;
    picture: string;
    distance: number;
}

export interface AddressState {
    addresses: Address[];
    loading: boolean;
    error: string;
}

const initialState: AddressState = {
    addresses: [],
    loading: false,
    error: ''
};

export const addressReducer = createReducer(initialState, builder => 
    builder
    .addCase(addAddress, (state: AddressState, {payload}) => {
        payload.id = new Date().getTime();
        
        state.addresses = [...state.addresses, payload]
    })
    .addCase(removeAddress, (state: AddressState, {payload}) => {
        state.addresses = state.addresses.filter(address => address.address === payload);
    })
    .addCase(setLoading, (state: AddressState, {payload}) => {
        state.loading = payload;
    })
    .addCase(setError, (state, {payload}) => {
        state.error = payload;
    })
    .addCase(setDistance, (state, {payload}) => {
        const {id, distance} = payload;
        const {addresses} = state;
        
        addresses.forEach(address => {
            if(address.id === id) {
                address.distance = distance
            }
        })
    })
);
