import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { off } from 'process';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit,OnChanges{
  checked: boolean = true;
  title = 'Angular-SignInForm';
  name!: string;
  constructor(){}

  ngOnInit(): void {
      of(this.checked).subscribe(val => console.log(val));
  }
  ngOnChanges(changes: SimpleChanges): void {
      console.log(changes);
  }
}

