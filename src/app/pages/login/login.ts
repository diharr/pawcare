import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SupabaseService } from '../../core/services/supabase';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html', // sesuaikan jika nama filenya login.component.html
  styleUrl: './login.css'     // sesuaikan jika nama filenya login.component.css
})
export class LoginComponent {
  email = '';
  password = '';
  isRegisterMode = false;
  loading = false;
  errorMessage = '';

  constructor(private supabase: SupabaseService, private router: Router) {}

  async handleAuth() {
    this.loading = true;
    this.errorMessage = '';

    try {
      if (this.isRegisterMode) {
        const { error } = await this.supabase.client.auth.signUp({
          email: this.email,
          password: this.password,
        });
        if (error) throw error;
        alert('Akun berhasil dibuat! Silakan masuk.');
        this.isRegisterMode = false;
      } else {
        const { error } = await this.supabase.client.auth.signInWithPassword({
          email: this.email,
          password: this.password,
        });
        if (error) throw error;
        this.router.navigate(['/dashboard']);
      }
    } catch (err: any) {
      this.errorMessage = err.message || 'Terjadi kesalahan autentikasi.';
    } finally {
      this.loading = false;
    }
  }
}