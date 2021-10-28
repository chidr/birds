import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';//import package

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  sendData(dataForm:NgForm)
  {
console.log("data in form is:" ,dataForm);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
