import { createAction } from "@reduxjs/toolkit";
import { Address } from "../reducers/address.reducer";
import { AppDispatch } from "../store/app.store";
import { fetchAddressByString } from "../services/address.service";

export const addAddress = createAction<Address>('address/add');
export const removeAddress = createAction<string>('address/remove');
export const setLoading = createAction<boolean>('address/loading/set');
export const setError = createAction<string>('address/error/set');

export const translateFromString = (address: string, consumer?: (promise: Promise<any>) => void) => (dispatch: AppDispatch) => {
    dispatch(setError(''));
    dispatch(setLoading(true));

    const promise = fetchAddressByString(address)
        .then(address => {
            dispatch(addAddress(address));            
        })
        .catch((ex: Error) => {
            dispatch(setError(ex.message));
        }) 
        .finally(() => {
            dispatch(setLoading(false));
        });

    if(consumer) {
        consumer(promise);
    }
}

export const translateFromPoint =(lat: number, lng: number) => (dispatch: AppDispatch) => {

}