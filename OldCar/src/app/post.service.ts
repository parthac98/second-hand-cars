import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://api.jsonbin.io/b/5ebe673947a2266b1478d892';
    
  constructor(private httpClient: HttpClient) { }
   
  getPosts(){
    return this.httpClient.get(this.url);
  }
    
}
