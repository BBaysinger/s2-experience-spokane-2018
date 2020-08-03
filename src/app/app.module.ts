import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/core/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
