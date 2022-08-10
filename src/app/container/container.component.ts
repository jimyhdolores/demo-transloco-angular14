import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  standalone: true,
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss'],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    RouterModule,
  ],
})
export class ContainerComponent implements OnInit {
  /**
   *Para obtener el idioma activo usaremos la función getActiveLang()
   */
  lang = this._translocoService.getActiveLang();

  constructor(private _translocoService: TranslocoService) {}

  ngOnInit(): void {
    /**
     * Si queremos saber cada vez que se cambia un idioma debemos de suscribirnos al Observable "langChanges$"
     */
    this._translocoService.langChanges$.subscribe((response) => {
      this.lang = response;
    });
  }

  clickTranslate(language: string): void {
    this._translocoService.setActiveLang(language);
  }
}
