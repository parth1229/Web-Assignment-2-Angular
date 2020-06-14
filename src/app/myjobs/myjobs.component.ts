import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-myjobs',
  templateUrl: './myjobs.component.html',
  styleUrls: ['./myjobs.component.css']
})
export class MyjobsComponent implements OnInit {

  jobs = [
    {"company":"IBM","position":"Software Developer"},
    {"company":"Google","position":"Web Developer"},
    {"company":"Facebook","position":"Software Engineer"},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  delete(index:number){
    this.jobs.splice(index,1);
    event.preventDefault();
  }

}
