import { Component, OnInit } from '@angular/core';
import {NgModel, NgForm} from '@angular/forms';
import {GlobalServService} from '../global-serv.service';



@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  
  /*
  posts:object[]=[];

  imgDef:boolean = false;

  imgToggle()
  {
    this.imgDef = !this.imgDef
  };

  addPost(theForm:NgForm)
  {
    this.posts.push(theForm.value);
    console.log(theForm.value)
  };

*/
techHome=[];
h;

constructor(private _GlobalServService:GlobalServService) { 

  this._GlobalServService.getTech().subscribe(data => this.techHome = data.articles)
}


ngOnInit() {}

}
