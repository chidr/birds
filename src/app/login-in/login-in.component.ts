import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';//import package

@Component({
  selector: 'app-login-in',
  templateUrl: './login-in.component.html',
  styleUrls: ['./login-in.component.css']
})
export class LoginInComponent implements OnInit {

  sendData(dataForm:NgForm)
  {
console.log("data in form is:" ,dataForm);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
