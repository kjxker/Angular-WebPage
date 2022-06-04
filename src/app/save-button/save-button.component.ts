import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.css']
})
export class SaveButtonComponent implements OnInit {

  constructor() { }
  @Input() disabled:boolean | undefined;
  @Input() spin:boolean | undefined;

  ngOnInit() {
  }

}