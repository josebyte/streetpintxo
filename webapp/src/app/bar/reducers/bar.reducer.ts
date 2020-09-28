import { Action, createReducer, on } from '@ngrx/store';
import {CallState, LoadingState} from "../../shared/models/status";
import { Bar } from "../bar.model";
import { BarActions } from "../actions";
import {cityFeatureKey} from "../../city/reducers/city.reducer";

export const barFeatureKey = 'bar';

export interface State {
    callState: CallState;
    bars: Bar[];
    totalCount: number;
    form: any;
}

export const initialState: State = {
    callState: LoadingState.INIT,
    bars: [],
    totalCount: 0,
    form: {}
};

export const reducer = createReducer(
    initialState,
    on(BarActions.searchBars, (state, data) => ({
        ...state,
        bars: initialState.bars,
        totalCount: initialState.totalCount,
        callState: LoadingState.INIT,
        form: data
    })),
    on(BarActions.searchBarsSuccess, (state, {bars}) => ({
        ...state,
        bars: bars.results,
        totalCount: bars.totalCount,
        callState: LoadingState.LOADED,
    })),
    on(BarActions.searchBarsFailure, (state, {error}) => ({
        ...state,
        bars: initialState.bars,
        totalCount: initialState.totalCount,
        callState: { errorMsg: error },
    })),
);

export const getResults = (state: State) => state[barFeatureKey].bars;
export const getTotalRow = (state: State) => state[barFeatureKey].totalCount;
export const getForm = (state: State) => state[barFeatureKey].form;

export const isLoading = (state: State) => state[barFeatureKey].callState === LoadingState.LOADING;
