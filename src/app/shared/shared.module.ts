import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
  ],
  imports: [
    RouterModule,
    BrowserModule,
  ],
  exports: [
    RouterModule,
    BrowserModule,
  ],
  providers: [],
})
export class SharedModule { }
