import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  isEditable = true;
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    qa: true
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder) { }

  next(stepper: MatStepper) {
    stepper.next()
  }

  previous(stepper: MatStepper) {
    stepper.previous()
  }
}
