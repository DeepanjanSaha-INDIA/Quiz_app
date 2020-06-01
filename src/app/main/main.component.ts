import { Component, OnInit } from '@angular/core';
import { ServerService } from '../service/server.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  number_of_question: Number;

  constructor(private service: ServerService) { }

  start(){
    console.log("Game started");
    this.service.getTotalQuestion();
  }

  ngOnInit() {  }

}
