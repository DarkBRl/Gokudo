import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mid-screen',
  templateUrl: './mid-screen.component.html',
  styleUrls: ['./mid-screen.component.css']
})
export class MidScreenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public changeContent(){
    console.log("working");

  }

}
