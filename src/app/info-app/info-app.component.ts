import { Component, OnInit } from '@angular/core';
import { TranslocoModule, TRANSLOCO_SCOPE } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'app-info-app',
  templateUrl: './info-app.component.html',
  styleUrls: ['./info-app.component.scss'],
  imports: [TranslocoModule],
  providers: [
    {
      provide: TRANSLOCO_SCOPE,
      useValue: { scope: 'info-app' },
    },
  ],
})
export class InfoAppComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
