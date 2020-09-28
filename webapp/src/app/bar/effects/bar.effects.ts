import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { BarService } from "../services/bar.services";
import { catchError, map, switchMap} from "rxjs/operators";
import { of } from "rxjs";
import {BarActions} from "../actions";



@Injectable()
export class BarEffects {

  constructor(
      private actions$: Actions,
      private barService: BarService
  ) {}

  searchBars$ = createEffect(() =>
      this.actions$.pipe(
          ofType(BarActions.searchBars),
          switchMap((params) =>
              this.barService.searchBars(params).pipe(
                  map(bars => BarActions.searchBarsSuccess({bars})),
                  catchError(err => of(BarActions.searchBarsFailure(err)))
              )
          )
      )
  );
}
