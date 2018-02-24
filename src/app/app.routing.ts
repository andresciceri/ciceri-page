import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PostListComponent} from './post-list/post-list.component';
import {ArticlePageComponent} from './article-page/article-page.component';

const appRoutes: Routes = [
	{
    	path: '',
    	component: PostListComponent,    
    },
    {
    	path: 'article/:id',
    	component: ArticlePageComponent
    },
    { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes, {useHash: true});