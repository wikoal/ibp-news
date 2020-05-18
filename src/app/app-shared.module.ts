import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

@NgModule({
  imports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ],
  exports: [
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
  ]

})

export class SharedModule {
}
