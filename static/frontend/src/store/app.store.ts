import { configureStore, Action, AnyAction, ThunkDispatch, getDefaultMiddleware } from "@reduxjs/toolkit";
import { addressReducer, AddressState } from "../reducers/address.reducer";

export interface State {
    address: AddressState;
}

export const AppStore = configureStore({
    reducer: {
        address: addressReducer,
    },
    middleware: getDefaultMiddleware()
});

export type AppDispatch<R extends Action<any> = AnyAction, E = void> = ThunkDispatch<State, E, R>;