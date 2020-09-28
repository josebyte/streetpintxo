import { Injectable } from '@angular/core';
import {HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from "../../../environments/environment";
import { Bar } from "../bar.model";
import { BaseService } from "../../shared/services/base.service";
import { ToastController } from "@ionic/angular";

@Injectable()
export class BarService extends BaseService {

    PAGELIMIT = 10;

    constructor(
        public toastController: ToastController,
        private http: HttpClient,
    ) {
        super(toastController);
    }

    searchBars(params?): Observable<Bar[]> {
        const parameters = this.getPageParams(params.pag, this.PAGELIMIT);

        if (params?.filters) {
            const where = {
                name: { contains: params.filters.name},
                veganFriendly: params.filters.veganFriendly
            };
            parameters.append('where', JSON.stringify(where));
        }

        return this._manageResponse(
            this.http.get<any>(
                environment.api.bar.get + '/find'
                , {params: parameters}
            )
        );
    }

    getBar(id): Observable<Bar[]> {
        return this._manageResponse(
            this.http.get<any>(
                environment.api.bar.get + '/' + id
            )
        );
    }

    _manageResponse(obs: Observable<HttpResponse<any>>): Observable<any> {
        return obs.pipe(
            catchError(e => {
                this._showErrors(e.status);
                return throwError(e.status);
            }),
            switchMap(data => {
                if (data) {
                    return of(data);
                } else {
                    console.log('No data')
                    return throwError('No data');
                }
            })
        );
    }

    private _showErrors(status) {
        console.log("ERROR: ");
        console.log(status);
        let message = '';
        switch (status) {
            case 500:
                message = 'Error, interno del servidor.';
                break;
            default:
                message = 'Error desconocido.';
                break;
        }

        this._presentToast(message, 'danger');
    }


}
