import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Copyright } from "../../components/copyright/copyright";
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth-service';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  imports: [RouterLink, Copyright, ReactiveFormsModule, CommonModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
  loginForm!: FormGroup;
  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router) {
      this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) return;
      Swal.fire({
      title: 'Logging In...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });
    this.auth.login(this.loginForm.value).subscribe({
      next: (res: any) => this.handleSuccess(res),
      error: () => this.handleError()
    });
  }

  private handleSuccess(res: any): void {
  this.auth.saveToken(res.token);
  Swal.fire({
    icon: 'success',
    title: 'Login Successful',
    text: 'You have successfully logged in.',
    timer: 1800,
    showConfirmButton: false
  });
   const role = this.auth.getRole();
        if (role === 'Admin') this.router.navigate(['/admin']);
        else if (role === 'Owner') this.router.navigate(['/owner']);
        else if (role === 'Bidder') this.router.navigate(['/bidder']);
}

private handleError(): void {
  setTimeout(() => {
    Swal.fire({
    icon: 'error',
    title: 'Login Failed',
    text: 'Failed to log in.',
    timer: 1800,
    showConfirmButton: false
  });
    }, 3000); // Hide after 3s
}
}
