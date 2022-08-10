import { Component, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TranslocoModule } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.scss'],
  imports: [
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    TranslocoModule,
    ReactiveFormsModule,
  ],
})
export class CustomerFormComponent implements OnInit {
  constructor(private _formBuilder: FormBuilder) {}
  formGroup = this._formBuilder.group({
    name: [null, Validators.required],
    lastName: [null, Validators.required],
    email: [null, Validators.email],
  });

  ngOnInit(): void {}
}
