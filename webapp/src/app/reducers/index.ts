import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { storeFreeze } from 'ngrx-store-freeze';

import * as fromCity from '../city/reducers/city.reducer';

//export const stateFeatureKey = 'state';

export interface State {
  city: fromCity.State
}

export const reducers: ActionReducerMap<State> = {
  city: fromCity.reducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger, storeFreeze] : [];

/**
 * Debug Reducers
 */
export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state: State, action: any): State => {
    // console.log('state', state);
    // console.log('action', action);
    return reducer(state, action);
  };
}
