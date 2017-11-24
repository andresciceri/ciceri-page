import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/primeng';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ContentComponent } from './content/content.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    ContentComponent
  ],
  imports: [
    BrowserModule,
    TabViewModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
