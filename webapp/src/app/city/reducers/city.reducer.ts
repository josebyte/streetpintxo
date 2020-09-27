import { Action, createReducer, on } from '@ngrx/store';
import { City } from "../city.model";
import { CityActions } from "../actions";
import { CallState, LoadingState } from "../../shared/models/status";

export const cityFeatureKey = 'city';

export interface State {
    callState: CallState;
    cities: City[];
}

export const initialState: State = {
    callState: LoadingState.INIT,
    cities: []
};

export const reducer = createReducer(
    initialState,
    on(CityActions.loadCities, (state) => ({
        ...state,
        cities: initialState.cities,
        callState: LoadingState.INIT,
    })),
    on(CityActions.loadCitiesSuccess, (state, {cities}) => ({
        ...state,
        cities: cities,
        callState: LoadingState.LOADED,
    })),
    on(CityActions.loadCitiesFailure, (state, {error}) => ({
        ...state,
        cities: initialState.cities,
        callState: { errorMsg: error },
    })),
);

export const getCities = (state: State) => state[cityFeatureKey].cities;
export const isLoading = (state: State) => state[cityFeatureKey].callState === LoadingState.LOADING;

