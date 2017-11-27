import { Component, OnInit } from '@angular/core';
import {Page} from '../page';
import {pageRoutes} from '../page.routing';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

	postList : Page[];

  constructor() { 
  	this.postList = pageRoutes;
  }

  ngOnInit() {  	
  }

}
