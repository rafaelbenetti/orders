import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, catchError } from 'rxjs';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
})
export class SigninComponent {
  siginForm: FormGroup = new FormGroup({
    username: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  errorMessage: string | null;
  subscription: Subscription;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  signin(): void {
    this.errorMessage = null;
    const credentials = this.siginForm.value;

    this.subscription = this.authService
      .signin(credentials)
      .pipe(
        catchError((err, caught) => {
          this.errorMessage = 'Ocorreu um erro ao autenticar.';
          return caught;
        })
      )
      .subscribe(() => {
        this.router.navigateByUrl('orders');
      });
  }

  ngOnDestroy(): void {
    if (this.subscription && !this.subscription.closed) {
      this.subscription.unsubscribe();
    }
  }
}
