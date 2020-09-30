import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {StylingService} from '../../../shared/services/styling.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  error: boolean;

  form: FormGroup = new FormGroup({

    firstName: new FormControl('', [Validators.required]),
    lastName: new FormControl('', [Validators.required]),
    username: new FormControl('', [Validators.required]),
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

  register(form){
    this.error = this.authService.register(form.value);
  }
}
