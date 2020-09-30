import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {StylingService} from '../../../shared/services/styling.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  error: boolean;
  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor(
      private authService: AuthService,
      private stylingService: StylingService
  ) { }

  ngOnInit() {
    this.stylingService.setTheme(null);
  }

  login(form){
    this.error = this.authService.login(form.value);
  }

}
