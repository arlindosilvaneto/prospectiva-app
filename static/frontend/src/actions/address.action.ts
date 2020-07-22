import { createAction } from "@reduxjs/toolkit";
import { Address } from "../reducers/address.reducer";
import { AppDispatch } from "../store/app.store";

export const addAddress = createAction<Address>('address/add');
export const removeAddress = createAction<string>('address/remove');
export const setLoading = createAction<boolean>('address/loading/set');

export const fetchAddress = (address: string) => (dispatch: AppDispatch) => {
    
}