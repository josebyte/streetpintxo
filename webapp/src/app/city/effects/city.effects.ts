import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { CityActions } from "../actions";
import {catchError, map, switchMap, tap} from "rxjs/operators";
import {of} from "rxjs";
import {CityService} from "../services/city.services";

@Injectable()
export class CityEffects {

  constructor(
      private actions$: Actions,
      private cityService: CityService
  ) {}

  loadCities$ = createEffect(() =>
      this.actions$.pipe(
          ofType(CityActions.loadCities),
          switchMap(() =>
              this.cityService.loadCities().pipe(
                  map(cities => CityActions.loadCitiesSuccess({cities})),
                  catchError(err => of(CityActions.loadCitiesFailure(err)))
              )
          )
      )
  );

}
