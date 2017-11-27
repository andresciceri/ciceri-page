import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import {Page} from '../page';
import {pageRoutes} from '../page.routing';

@Component({
  selector: 'app-article-page',
  templateUrl: './article-page.component.html',
  styleUrls: ['./article-page.component.css']
})
export class ArticlePageComponent implements OnInit {

	id: number;
	article: Page;
	listPage: any;	

  constructor(private route: ActivatedRoute, private router: Router) {
  	this.id = parseInt(route.snapshot.paramMap.get('id'));
  	this.article = new Page();
  }

  ngOnInit() {
  	var obj = this;
  	pageRoutes.forEach(page => {
  		if(page.id === obj.id) {
  			obj.article = page;  			
  		}  		
  	});

  }  

}
