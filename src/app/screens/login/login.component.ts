import { Component, inject } from '@angular/core';
import { AuthService } from '../../services/AuthService/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    const data = this.loginForm.getRawValue();
    console.log(data);

    this.authService.login(data.email, data.password).subscribe({
      next: () => this.router.navigateByUrl('/'),
      error: () => console.log('error'),
    });
  }
}
