import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { StartsComponent } from './starts/starts.component';
import { PanelComponent } from './panel/panel.component';
import { CompifComponent } from './compif/compif.component';
import { TabsComponent } from './tabs/tabs.component';
import { BoucleComponent } from './boucle/boucle.component';

@NgModule({
  declarations: [
    AppComponent,
    StartsComponent,
    PanelComponent,
    CompifComponent,
    TabsComponent,
    BoucleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
