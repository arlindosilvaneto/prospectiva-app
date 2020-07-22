import { configureStore, Action, AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { addressReducer, AddressState } from "../reducers/address.reducer";

export interface State {
    address: AddressState;
}

export const store = configureStore({
    reducer: {
        address: addressReducer,
    }
});

export type AppDispatch<R extends Action<any> = AnyAction, E = void> = ThunkDispatch<State, E, R>;