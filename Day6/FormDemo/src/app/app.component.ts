import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, AbstractControl, ValidatorFn } from '@angular/forms';


function ageControlValidator(minAge: number, maxAge: number) : ValidatorFn{

  return (control: AbstractControl) : {[key: string]: boolean} | null => {
    if (control.value !== undefined && (isNaN(control.value) || control.value < minAge || control.value > maxAge)){
      return {'ageRange' : true};
    }
    return null;
  }
}
@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  title = 'FormDemo';
  // email: FormControl;
  login: FormGroup;
  minAge= 18;
  maxAge= 65;
  constructor(private fb: FormBuilder) {
    // this.email = new FormControl(null, [Validators.required]);

    // this.login = new FormGroup({
    //   email: new FormControl("", [Validators.required, Validators.email]),
    //   password: new FormControl("", [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    // });
  }

  ngOnInit(){
    this.login = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, Validators.minLength(4), Validators.maxLength(8)]],
      age: [null, [ageControlValidator(this.minAge, this.maxAge)]],
      phonenumber: [null],
      notification: ['email']
    });

    this.formControlValueChanged();
  }

  loginUser(){
    console.log(this.login.value);
    console.log(this.login.status);
    // Make an API call
    // Pass the information to server
  }

  formControlValueChanged(){
    const phoneControl = this.login.get('phonenumber');
    this.login.get('notification')?.valueChanges.subscribe(
      data => {
        console.log(data);
        if (data === "phone"){
          phoneControl?.setValidators([Validators.required]);
        }
        else if (data === "email"){
          phoneControl?.clearValidators();
        }
        phoneControl.updateValueAndValidity();
      }
    );
  }
}
