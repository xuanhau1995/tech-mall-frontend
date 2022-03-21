import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@src/app/service/auth.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  formGroup: FormGroup
  msgError: string = ''
  msgErrorName: string = ''
  msgErrorUserName: string = ''
  msgErrorEmail: string = ''
  msgErrorPhone: string = ''
  msgErrorPass: string = ''
  msgErrorConfirmPass: string = ''
  //
  isError: Boolean = false
  isErrorEmail: Boolean = false
  isErrorPhone: Boolean = false
  isErrorPass: Boolean = false
  isErrorUserName: Boolean = false
  isErrorPassConfirm: Boolean = false
  constructor(
    private auth: AuthService,
    private toastr: ToastrService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm()
  }
  initForm() {
    this.formGroup = new FormGroup({
      fullname: new FormControl('', [Validators.required]),
      username: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      phone: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }
  submitSignUp() {
    if (this.formGroup.value.fullname === '') {
      this.isError = true
      this.msgErrorName = 'Please Enter Your name'
    }
    if (this.formGroup.value.username === '') {
      this.isErrorUserName = true
      this.msgErrorUserName = 'Please Enter username '
    } else {
      this.isErrorUserName = false
    }
    //
    if (this.formGroup.value.email === '') {
      this.isErrorEmail = true
      this.msgErrorEmail = 'Please Enter email'
    } else {
      this.isErrorEmail = false
    }
    //
    if (this.formGroup.value.phone === '') {
      this.isErrorPhone = true
      this.msgErrorPhone = 'Please Enter email'
    } else {
      this.isErrorEmail = false
    }
    //
    if (this.formGroup.value.password === '') {
      this.isErrorPass = true
      this.msgErrorPass = 'Please Enter password'
    } else {
      this.isErrorPass = false
    }
    //
    if (this.formGroup.value.password.length <= 6) {
      this.isErrorPass = true
    }
    // 
    if (this.formGroup.value.password.length > 6) {
      this.isErrorPass = false
    }
    //
    if (this.formGroup.value.password !== this.formGroup.value.confirmPassword) {
      this.isErrorPassConfirm = true
      this.msgErrorConfirmPass = 'Password not match'
    }
    if (this.formGroup.valid) {
      this.auth.signUp(this.formGroup.value).subscribe((data) => {
        if (data['kq'] === 1) {
          this.router.navigate(["/login"])
          this.toastr.success('Sign Up Account Succesfully!')
        }
        if (data['kq'] === 0) {
          console.log(data)
          this.toastr.error(data.err)
        }
      })
    }
  }
}
