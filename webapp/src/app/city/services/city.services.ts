import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { City } from "../city.model";
import { environment } from "../../../environments/environment";

@Injectable()
export class CityService {
    constructor(
        private http: HttpClient,
        public toastController: ToastController
    ) {}

    loadCities(): Observable<City[]> {
        return this._manageResponse(
            this.http.get<any>(
                environment.api.city.get
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

    private async _presentToast(message, type) {
        const toast = await this.toastController.create({
            message,
            duration: 4500,
            color: type
        });
        toast.present();
    }
}
