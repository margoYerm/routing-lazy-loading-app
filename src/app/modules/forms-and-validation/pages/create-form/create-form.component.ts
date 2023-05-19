import { Component, OnInit } from '@angular/core';
import { AsyncValidatorFn, FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { MyValidators } from '../../validators/my.validators';
import { AsyncValidatorClass } from '../../validators/async.validator';

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {  

  form: FormGroup;

  constructor() { }

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [
        Validators.email, 
        Validators.required,
        MyValidators.restrictedEmails,
      ], 
      [AsyncValidatorClass.uniqEmail] as AsyncValidatorFn[]
      ),

      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6)
      ]),

      address: new FormGroup({
        country: new FormControl('fr'),
        city: new FormControl('', [Validators.required])
      }),

      skills: new FormArray([]),
    })
  }

  setCapital() {
    const cityMap: any = {
      fr: 'Paris',
      ua: 'Kyiv',
      it: 'Rome',
      gr: 'Berlin',
    };

    const cityKey: any = this.form.get('address')?.get('country')?.value;
    const city = cityMap[cityKey]; //cityC
    
    this.form.patchValue({
      address: {city},
      //address: {city: cityC} 
    });
  } 

  addSkill() {
    const control = new FormControl('', [Validators.required]);
    //(<FormArray>this.form.get('skills')).push() 
    (this.form.get('skills') as FormArray).push(control);
  }  

  getControls(controlItem: string) {
    return (this.form.get(controlItem) as FormArray).controls;
  }

  submitForm() {
    if (this.form.valid) {
      console.log('Form was submitted', this.form);
      const formData = {...this.form.value};
      console.log('Form data: ', formData);

      this.form.reset();
    }
  }

}
