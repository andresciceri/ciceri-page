import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/primeng';
import { NgxMdModule } from "ngx-md";
import { Angulartics2Module } from 'angulartics2';
import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { LeftPanelComponent } from './left-panel/left-panel.component';
import { ContentComponent } from './content/content.component';
import { PostListComponent } from './post-list/post-list.component';
import { ArticlePageComponent } from './article-page/article-page.component';
import { PagePipesPipe, ReversePipe } from './page-pipes.pipe';


@NgModule({
  declarations: [
    AppComponent,
    LeftPanelComponent,
    ContentComponent,
    PostListComponent,
    ArticlePageComponent,
    PagePipesPipe,
    ReversePipe
  ],
  imports: [
    BrowserModule,
    TabViewModule,
    NgxMdModule.forRoot(),
    routing,
    Angulartics2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
