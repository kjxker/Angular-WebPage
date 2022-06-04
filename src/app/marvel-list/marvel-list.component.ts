import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from '../data.service';
@Component({
  selector: 'app-marvel-list',
  template:`
  <h2>{{title}}</h2>
  <save-button  (click)="onPress()" [spin]="spinLoader"></save-button>
  <div style="margin-top: 20px;">
  <input [(ngModel)]="id" #ctrl="ngModel" required>
  <button (click)="onPressById(id)" formtarget="_blank">Find Hero By ID</button>
  </div>
  <table class="table table-striped">  
  <thead>  
      <tr>  
        <th>Id</th>  
        <th>Name</th>  
        <th>{{column}}</th>  
      </tr>  
  </thead>  
  <tbody>  
    <tr *ngFor="let character of data">  
      <td>{{ character.id }}</td>  
      <td>{{ character.name }}</td>  
      <td>{{ character.image }}</td>  
      <td>{{ character.desc }}</td>  
    </tr>  
  </tbody>  
  </table>  
  `
})
export class MarvelListComponent implements OnInit {
    id=0;
    title="List of all super heros!";
    data:any[] | undefined;
    msg=""
    spinLoader= false;
    column = "Image";
    detail = "character.image"
    constructor(public dataService : DataService, private cookieService:CookieService) {}
    ngOnInit(): void {
      this.spinLoader = true;
      this.cookieService.set('limit','100');
      this.cookieService.set('offset','0');
      this.dataService.getAllCharacter(100,0).subscribe((data:any)=>{
        console.log(data);
        this.data = data;
        this.spinLoader = false;

      });
      this.cookieService.set('limit','100');
      this.cookieService.set('offset','101');

    }
    onPress() {
      this.spinLoader = true
      let offset = Number(this.cookieService.get('offset'));
      let limit = Number(this.cookieService.get('limit'));
      console.log("offset: "+this.cookieService.get('offset'));
      console.log("limit: "+this.cookieService.get('limit'));
      this.dataService.getAllCharacter(limit,offset).subscribe((data:any)=>{
        this.column = "Image";
        this.detail = "character.image"
        console.log("data");
        this.msg = "haha"
        this.data = data;
        this.spinLoader = false
      });
      this.cookieService.set('limit','100');
      this.cookieService.set('offset',String(offset+limit));
    }
    onPressById(id:number) {
      
      this.dataService.getCharacterById(id).subscribe((data:any)=>{
        console.log("data");
        this.data = data;
        this.column = "Desc";
        this.detail = "character.desc"
      });
      this.cookieService.set('offset',String(0));

    }
}




