import { Component, OnInit } from '@angular/core';
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
  ],
})
export class CustomerFormComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
