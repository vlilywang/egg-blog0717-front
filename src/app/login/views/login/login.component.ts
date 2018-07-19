import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../snippets/services/login.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  result: any;
  formModel: FormGroup;
  constructor(
    private loginService: LoginService,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
    this.loginService.test().subscribe(
      val => {}
    );
    this.formModel = this.fb.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });

  }
  login() {
    this.loginService.login(this.formModel.value.name, this.formModel.value.password).subscribe(val => {
      this.result = val;
    });
  }
}
