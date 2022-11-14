import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {
  user = {
    name: "Benjamin",
    age: 18
  }
  constructor() { }

  ngOnInit(): void {
  }
  showInfo(): void {
      alert(`Hello ${this.user.name}`);
  }
}
