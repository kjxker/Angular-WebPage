import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-findhero',
  templateUrl: './findhero.component.html',
  styleUrls: ['./findhero.component.css']
})
export class FindheroComponent implements OnInit {

  constructor() { }
  @Input() disabled:boolean | undefined;
  @Input() spin:boolean | undefined;

  ngOnInit() {
  }

}