import { createAction } from "@reduxjs/toolkit";
import { Address } from "../reducers/address.reducer";
import { AppDispatch, GetState } from "../store/app.store";
import { fetchAddressByString, fetchDistance } from "../services/address.service";

interface DistancePayload {
    id: number;
    distance: number;
}

export const addAddress = createAction<Address>('address/add');
export const removeAddress = createAction<string>('address/remove');
export const setLoading = createAction<boolean>('address/loading/set');
export const setError = createAction<string>('address/error/set');
export const setDistance = createAction<DistancePayload>('address/distance/set');

export const translateFromString = (address: string) => (dispatch: AppDispatch) => {
    dispatch(setError(''));
    dispatch(setLoading(true));

    fetchAddressByString(address)
        .then(address => {
            dispatch(addAddress(address));
            dispatch(getDistances());
        })
        .catch((ex: Error) => {
            dispatch(setError(ex.message));
        }) 
        .finally(() => {
            dispatch(setLoading(false));
        });
}

export const getDistances = () => (dispatch: AppDispatch, getState: GetState) => {
    const {address: {addresses}} = getState();

    if(addresses.length < 2) {
        return;
    }

    const [source, dest] = addresses.slice(-2);

    fetchDistance(source, dest)
        .then(distance => {
            
            dispatch(setDistance({
                id: dest.id,
                distance
            }));
        });
}
