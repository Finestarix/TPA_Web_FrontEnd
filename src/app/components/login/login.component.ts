import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription, Observable} from 'rxjs';
import {LoginService} from '../../services/login.service';
import {GoogleSigninService} from '../../services/google-signin.service';
import {MatDialogRef} from '@angular/material';

import featureLoginRegister from '../../models/login-register';
import {phoneEmailData, passwordData} from './login';
import {Validator} from '../../helpers/validator';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  featureLoginRegister: object[];

  userLogin$: Subscription;
  userLoginData: any;

  isUserExist: boolean;

  phoneemail: string;
  password: string;
  phoneEmailData: object;
  passwordData: object;

  errorText: string;

  constructor(private dialogRef: MatDialogRef<LoginComponent>,
              private loginService: LoginService,
              private googleSignInService: GoogleSigninService) {
    this.featureLoginRegister = featureLoginRegister;
    this.isUserExist = false;
    this.phoneemail = this.password = '';
    this.phoneEmailData = phoneEmailData;
    this.passwordData = passwordData;


  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    if (this.userLogin$) {
      this.userLogin$.unsubscribe();
    }
  }

  setPhonePhoneEmail(email: string): void {
    this.phoneemail = email;
  }

  setPassword(password: string): void {
    this.password = password;
  }

  handleSearchUser(query): void {

    this.userLoginData = query.data.UserByEmailAndPhone;

    if (this.userLoginData.id === 0) {

      if (confirm('Continue registering with ' + this.phoneemail + ' ?')) {
        this.dialogRef.close({
          phoneemail: this.phoneemail,
          status: true,
          data: (Validator.isNumeric(this.phoneemail)) ? 'phone' : 'email',
        });
      }

    } else if (!this.isUserExist) {

      document.getElementById('password').style.display = 'block';
      this.isUserExist = true;

    }
  }

  handleUserLogin(query): void {

    this.userLoginData = query.data.UserLogin;

    if (this.userLoginData.id === 0) {
      this.setError('Email or password doesn\'t match !');
    } else {
      this.setError('Login Success!');
      // TODO: `Refresh and Change Navbar`
    }

  }

  checkValidity(checkData: string): boolean {
    return checkData !== 'Error' &&
      !Validator.isNoValue(checkData);
  }

  setError(error: string): void {
    this.errorText = error;

    document.getElementById('error-text').classList.add('pop-up-error-show');
    setTimeout(() => {
      document.getElementById('error-text').classList.remove('pop-up-error-show');
    }, 2000);
  }

  loginAction(): void {

    if ((!this.checkValidity(this.phoneemail) && !this.isUserExist) ||
      (!this.checkValidity(this.password) && this.isUserExist)) {
      this.setError('Fill All Field !');
      return;
    }

    if (this.checkValidity(this.phoneemail) &&
      !this.isUserExist) {

      this.errorText = '';

      this.phoneemail = (this.phoneemail[0] === '0') ? this.phoneemail.substring(1) : this.phoneemail;
      this.userLogin$ = this.loginService.getUser(this.phoneemail).subscribe(async query => {
        await this.handleSearchUser(query);
      });

    } else if (this.checkValidity(this.phoneemail) &&
      this.checkValidity(this.password) &&
      this.isUserExist) {

      this.errorText = '';

      this.phoneemail = (this.phoneemail[0] === '0') ? this.phoneemail.substring(1) : this.phoneemail;
      this.userLogin$ = this.loginService.getValidUser(this.phoneemail, this.password).subscribe(async query => {
        await this.handleUserLogin(query);
      });

    }
  }

  googleSignIn(): void {
    this.googleSignInService.signIn();
    console.log(this.googleSignInService.getCurrUser());
    this.googleSignInService.signOut();
  }

}
