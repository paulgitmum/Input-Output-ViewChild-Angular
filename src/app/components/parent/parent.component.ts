import { Component, OnInit, ViewChild } from '@angular/core';
import {ChildComponent} from '../child/child.component'
@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  public data: String = 'Data From Parent';
  items = ['item1', 'item2', 'item3', 'item4'];
  msgFromChild:string;
  dataChild:string;
  @ViewChild(ChildComponent,{static:false})child;
  constructor() {}
  addItem(newItem: string) {
    this.items.push(newItem);
  }

  recieveMessage($event) {
    this.msgFromChild = $event;
  }

  ngAfterViewInit(){
    this.dataChild = this.child.msgFrom
  }
  ngOnInit(): void {}
}
