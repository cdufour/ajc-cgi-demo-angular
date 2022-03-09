import { formatPercent } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } 
  from '@angular/forms';

// le retour null signifie qu'il n'y pas de problème
// de validation
function customValidator(): ValidatorFn {
  return (control: AbstractControl) => 
    control.value === 'custom' ? null : { bad: control.value }
}

@Component({
  selector: 'rform',
  templateUrl: './rform.component.html',
  styleUrls: ['./rform.component.css']
})
export class RformComponent implements OnInit {
  studentForm: FormGroup = new FormGroup({
    firstname: new FormControl('', Validators.required),
    lastname: new FormControl('', customValidator()),
    email: new FormControl('', [
      Validators.required, Validators.email]
    ),
    address: new FormGroup({
      street: new FormControl(''),
      postcode: new FormControl('', Validators.pattern(/\d{5}/g))
    })
  }); 

  constructor() { }

  ngOnInit(): void {
  }

}
