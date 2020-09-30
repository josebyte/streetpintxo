import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpResponse} from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, switchMap } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { BaseService } from '../../shared/services/base.service';
import { ToastController } from '@ionic/angular';
import { Bill } from '../bill.model';

@Injectable()
export class PrivateAreaServices extends BaseService {

    constructor(
        public toastController: ToastController,
        private http: HttpClient,
    ) {
        super(toastController);
    }

    loadBills(): Observable<Bill[]> {
        return this._manageResponse(
            this.http.get<any>(
                environment.api.bill.get
            )
        );
    }

    createBill(bill){
        let params = new HttpParams();
        for (const data in bill) {
            params = params.append(data, bill[data]);
        }

        return this._manageCUDresponses(
            this.http.post<any>(
                environment.api.bill.get,
                {} ,
                { observe: 'response', params}
            ),
            'The pintxo was successfully bought!'
        );
    }

    deleteBill(id){
        return this._manageCUDresponses(
            this.http.delete<any>(
                environment.api.bill.get + '/' + id
            ),
            'Deleted bill successfully'
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
                    return of(data["results"]);
                } else {
                    console.log('No data')
                    return throwError('No data');
                }
            })
        );
    }

    _manageCUDresponses(obs: Observable<HttpResponse<any>>, message?){
        obs.pipe(
            catchError(e => {
                this._showErrors(e.status);
                return throwError(e.status);
            })).subscribe(result => {
                this._presentToast(message, 'success');
        });
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
