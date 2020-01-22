import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GlobalServService {

  constructor(private _HttpClient:HttpClient) {  }

  getDummyData():Observable<any>
   {
     return this._HttpClient.get("https://jsonplaceholder.typicode.com/posts")
   }


   getNews():Observable<any>
   {
     return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=ng&category=sport&apiKey=3ca8dd4717234e4c834729089e64c6b0")
   }

   getTech():Observable<any>
   {
    return this._HttpClient.get("https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3ca8dd4717234e4c834729089e64c6b0")
   }

   getSports():Observable<any>
   {
     return this._HttpClient.get("https://newsapi.org/v2/top-headlines?country=eg&category=sport&apiKey=3ca8dd4717234e4c834729089e64c6b0")
   }

  }

