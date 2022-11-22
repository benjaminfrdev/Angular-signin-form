import {
  AfterViewInit,
  Component, ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output, QueryList,
  SimpleChanges, ViewChild, ViewChildren,
} from '@angular/core';
import { off } from 'process';
import { of } from 'rxjs';
import {ToggleComponent} from "./toggle/toggle.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnChanges, AfterViewInit {
  @ViewChild('toggleComp') toggleComp?: ToggleComponent;
  @ViewChild('container') container?: ElementRef<HTMLDivElement>
  @ViewChild('nameForm', {
    read: ElementRef,
  }) form?: ElementRef<HTMLFormElement>
  @ViewChildren(ToggleComponent) toggleComps?: QueryList<ToggleComponent>
  checked: boolean = true;
  title = 'Angular-SignInForm';
  name!: string;
  model = {
    name: 'Khoa Vo'
  };
  counter: number = 1;

  constructor() {}

  ngAfterViewInit(): void {
    console.log(this.form);
    }

  ngOnInit(): void {
    console.log(this.form);
    of(this.checked).subscribe((val) => console.log(val));
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
  }
  clickInside(): void{
    if(this.toggleComp) this.toggleComp.toggle();
  }
}
