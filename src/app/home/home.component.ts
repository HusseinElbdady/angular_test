import { Component, OnInit } from '@angular/core';

import {GlobalServService} from '../global-serv.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  sports=[];
  h;

  constructor(private _GlobalServService:GlobalServService) { 

  	this._GlobalServService.getSports().subscribe(data => this.sports = data.articles)
  }


  ngOnInit() {
  }

}
