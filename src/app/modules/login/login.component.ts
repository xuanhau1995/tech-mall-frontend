import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup
  msgError: string = 'Please Enter username and password'
  isError: Boolean = false
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initForm()
    this.checkMiddleWareLogined()
  }
  initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    })
  }
  login() {
    if (this.formGroup.value.email === '' || this.formGroup.value.password === '') {
      this.isError = true
      this.msgError = 'Please Enter email and password'
    }
    if (this.formGroup.valid) {
      this.auth.login(this.formGroup.value).subscribe((data) => {
        if (data['kq'] === 1) {
          const token = data['data'].token
          const userId = data['data'].id_user
          localStorage.setItem('token_tech_mall', token)
          localStorage.setItem('user_id', userId)
          this.toastr.success('Login Successfully');
          this.router.navigate(['/'])
        } if (data['kq'] === 0) {
          this.isError = true
          this.msgError = 'email or Password incorrect'
        }
      })
    }
  }

  checkMiddleWareLogined() {
    const userId = localStorage.getItem('user_id')
    if (userId) {
      this.router.navigate(['/'])
    }
  }

  goToSignUp() {
    this.router.navigate(['/sign-up'])
  }
}
