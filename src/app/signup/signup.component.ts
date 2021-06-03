import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FormGroup,FormControl} from '@angular/forms';
import {SignupService} from '../signup.service';
// import { from } from 'rxjs';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements  OnInit {
  // url:'http://localhost/formalde/app_api/Api/register';
  // createUser = new FormGroup({
  //   firstname: new FormControl(''),
  //   lastname: new FormControl(''),
  //   email: new FormControl(''),
  //   password: new FormControl('')
  // })
  constructor(private _auto: SignupService) { }
  ngOnInit(){

  }
  // registerUser(){
  //   // console.warn(this.registerUser.value)
  //   // this.httpClient.post(this.url, this.createUser.value).subscribe((data)=>{
  //   //   console.warn(data)
  //   // })
  //   //  this._auto.registerUser(this.registerUser)
  //   //  .subscribe(
  //   //    res => console.log(res),
  //   //    err => console.log(err)
  //   //  )
  // }
}
