import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [PaginatorComponent, HeaderComponent],
  imports: [
      RouterModule
  ],
    exports: [
        CommonModule,
        TranslateModule,
        FormsModule,
        ReactiveFormsModule,
        IonicModule,
        PaginatorComponent,
        HeaderComponent
    ]
})
export class SharedModule { }
