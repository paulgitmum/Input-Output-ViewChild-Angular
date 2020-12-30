import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  message:string = "Message From Child/ Output !!!"
  msgFrom:string = "Message From Child @ViewChild"
  constructor() {}
  @Input() data: String;
  @Output() dataFromChild = new EventEmitter <string>();
  @Output() messageFromChild = new EventEmitter <string>();
  
  addNewItem(value:string){
    this.dataFromChild.emit(value)
  }
  addMessage(){
    this.messageFromChild.emit(this.message)
  }

  ngOnInit(): void {}
}
