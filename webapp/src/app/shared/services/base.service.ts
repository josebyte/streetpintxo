import {ToastController} from "@ionic/angular";
import {HttpParams} from '@angular/common/http';

export abstract class BaseService{
    constructor(
        public toastController: ToastController
    ) {
    }

    public getPageParams(page, limit): HttpParams{
        let skip = 0;
        if (page > 1) {
            skip = (page - 1) * limit;
        }

        return new HttpParams()
            .set('limit', limit)
            .set('skip', skip.toString());
    }

    public async _presentToast(message, type) {
        const toast = await this.toastController.create({
            message,
            duration: 4500,
            color: type
        });
        toast.present();
    }
}
