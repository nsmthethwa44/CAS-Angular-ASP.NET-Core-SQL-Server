import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../../services/user-service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Copyright } from "../../components/copyright/copyright";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [RouterLink, Copyright, CommonModule, ReactiveFormsModule],
  templateUrl: './register.html',
  styleUrl: './register.scss'
})
export class Register implements OnInit{
 registerForm!: FormGroup;
  selectedFile: File | null = null;

  constructor(
    private fb: FormBuilder,
    private userSer: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(5)]],
      role: ['', Validators.required],
      image: [null]
    });
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    if (this.registerForm.invalid) return;

    const formData = new FormData();
    formData.append('Name', this.registerForm.value.name);
    formData.append('Email', this.registerForm.value.email);
    formData.append('Password', this.registerForm.value.password);
    formData.append('Role', this.registerForm.value.role);
    if (this.selectedFile) formData.append('ImageUrl', this.selectedFile);

    Swal.fire({
      title: 'Creating account...',
      allowOutsideClick: false,
      didOpen: () => Swal.showLoading()
    });

    this.userSer.register(formData).subscribe({
      next: () => {
        Swal.fire({
          icon: 'success',
          title: 'Account Created!',
          text: 'You can now log in.',
          timer: 2000,
          showConfirmButton: false
        });
        this.router.navigate(['/login']);
      },
      error: (err) => {
        Swal.fire({
          icon: 'error',
          title: 'Registration failed',
          text: err.error?.message || 'Please try again later.',
          timer: 2000,
          showConfirmButton: false
        });
      }
    });
  }
}
