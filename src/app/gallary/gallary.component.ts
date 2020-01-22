import { Component, OnInit } from '@angular/core';

import {GlobalServService} from '../global-serv.service';
@Component({
  selector: 'app-gallary',
  templateUrl: './gallary.component.html',
  styleUrls: ['./gallary.component.css']
})
export class GallaryComponent implements OnInit {

  newsHome=[];
  h;

  constructor(private _GlobalServService:GlobalServService) { 

  	this._GlobalServService.getNews().subscribe(data => this.newsHome = data.articles)
  }

  ngOnInit() {
  }

}
