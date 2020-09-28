import { createAction, props } from '@ngrx/store';

export const searchBars = createAction(
  '[Bar] Search Bars',
    props<{ pag: number, filters?: any }>()
);

export const searchBarsSuccess = createAction(
  '[Bar] Search Bars Success',
  props<{ bars: any }>()
);

export const searchBarsFailure = createAction(
  '[Bar] Search Bars Failure',
  props<{ error: any }>()
);
