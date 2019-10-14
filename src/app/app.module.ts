import { NgModule } from '@angular/core';

import { AppComponent } from 'src/app/app.component';
import { CoreModule } from 'src/app/core/core.module';
import { AppRoutingModule } from 'src/app/core/app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    CoreModule,
    AppRoutingModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
