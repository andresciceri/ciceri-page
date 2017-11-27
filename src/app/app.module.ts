import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {TabViewModule} from 'primeng/primeng';
import { MarkdownModule } from 'angular2-markdown';

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
    MarkdownModule.forRoot(),
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
