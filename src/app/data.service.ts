import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  //API_KEY = 'ec3461b5a1e95faa06a9fd456069477b';

  constructor(private httpClient: HttpClient) { }

  getAllCharacter(limit:number,offset:number){
    return this.httpClient.get("http://localhost:5000/characters?limit="+limit+"&offset="+offset);
  }
  getCharacterById(Id:number){
    return this.httpClient.get("http://localhost:5000/characters/"+Id);
  }
}


//API_KEY = 'ec3461b5a1e95faa06a9fd456069477b';
  //    return this.httpClient.get(`https://gateway.marvel.com:443/v1/public/characters/1011334?apiKey=${this.API_KEY}`);
