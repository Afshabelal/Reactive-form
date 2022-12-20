import { Component, OnInit } from '@angular/core';

import { Emp } from '../emp';

@Component({
  selector: 'app-tdf',
  templateUrl: './tdf.component.html',
  styleUrls: ['./tdf.component.css']
})
export class TdfComponent implements OnInit {
skills =['c', 'c++', 'javascript'];

model = new Emp(101, 'john', 'project manager', this.skills[0]);

submitted = false;

onsubmit() {
  this.submitted = true;
}

get diagnostic() {
  return JSON.stringify(this.model);
}

constructor() {}

ngOnInit(): void{

}
}
