import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from 'src/app/core/header/header.component';

const EXPORTS = [

];

const COMPONENTS = [
  HeaderComponent
];

@NgModule({
  declarations: [
    ...COMPONENTS,
  ],
  imports: [
    RouterModule,
    ...EXPORTS,
  ],
  exports: [
    ...EXPORTS,
    ...COMPONENTS,
  ],
  providers: [
  ],
})
export class HeaderModule { }
