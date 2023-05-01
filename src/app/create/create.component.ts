import { Component } from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import { ApiService } from '../api/api.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent {
  titleFormGroup = this._formBuilder.group({
    title: ['', Validators.required],
    description: ['', Validators.required],
  });
  typeFormGroup = this._formBuilder.group({
    type: ['', Validators.required],
  });
  isLinear = false;

  constructor(private _formBuilder: FormBuilder,
    private apiService: ApiService) {}

  onSubmit() {
    const data = {
      title: this.titleFormGroup.value.title,
      description: this.titleFormGroup.value.description,
      type: this.typeFormGroup.value.type
    }
    this.apiService.createAnElement(data).subscribe((val) => {
      console.log(val)
    })
  }
}
